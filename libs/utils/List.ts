import query from "@app/libs/queries/crud/query";
import streamQuery from "@app/libs/queries/crud/streamQuery";
import { AsyncStorage } from "react-native";
import { flow, types } from "mobx-state-tree";

interface ListOptions {
  record: any;
  query: string;
  stream?: boolean;
  args?: string;
  where?: any;
}

interface StreamOptions {
  useSession: boolean;
}

export default (opt: ListOptions) => {
  return types
    .model({
      query: types.optional(types.string, opt.query || ""),
      loading: types.optional(types.boolean, false),
      list: types.array(opt.record)
    })
    .actions((self: any) => {
      const meta = JSON.parse(opt.record.properties._meta._defaultValue);
      return {
        afterCreate: function() {
          if (opt.stream) {
            self.startStream();
          } else {
            self.requery();
          }
        },
        startStream: function() {
          const where = Object.keys(opt.where || {}).map((w: string) => {
            return `${w}: {_eq: ${JSON.stringify(opt.where[w])}}`;
          });
          if (where.length > 0) {
            where[0] = ",where:{" + where[0];
            where[where.length - 1] = where[where.length - 1] + "}";
          }

          let tableArgs = `${opt.args || ""} ${where.join(",")}`.trim();
          if (tableArgs.length > 0) {
            tableArgs = `(${tableArgs})`;
          }
          const record = JSON.parse(opt.record.properties._meta._defaultValue);
          const query = `subscription {
            ${record.tableName}${tableArgs} 
              ${opt.query} 
          }`;
          streamQuery(query, (result: any) => {
            if (
              result.type !== "error" &&
              result.payload &&
              result.payload.data &&
              result.payload.data[record.tableName]
            ) {
              self.setList(
                result.payload.data[record.tableName].map((item: any) => {
                  return opt.record.create(item);
                })
              );
            }
          });
        },
        requery: flow(function*() {
          let queryOpt: any = {};

          if (opt.where) queryOpt["where"] = opt.where;
          if (opt.args) queryOpt["args"] = opt.args;
          const result = yield query(meta.tableName, opt.query, queryOpt);

          self.list = (result || []).map((item: any) => {
            return opt.record.create(item);
          });
        }),
        serverModify: function(list: ReadonlyArray<any>) {
          self.list = list;
        },
        localUpdate: function(criteria: any, data: any) {
          self.list.forEach((item: any) => {
            let shouldUpdate = true;
            for (let i in criteria) {
              if (criteria[i] !== item[i]) {
                shouldUpdate = false;
                break;
              }
            }
            if (shouldUpdate) {
              for (let i in data) {
                item[i] = data[i];
              }
            }
          });
        },
        localDelete: function(criteria: any) {
          const newlist: any = [];
          self.list.forEach((item: any) => {
            let shouldDelete = true;
            for (let i in criteria) {
              if (criteria[i] !== item[i]) {
                shouldDelete = false;
                break;
              }
            }
            if (!shouldDelete) {
              newlist.push(item);
            }
          });
          self.list = newlist;
        },
        setList: function(newList: any[]) {
          self.list = newList;
        },
        localSave: flow(function*() {
          self.loading = true;
          yield AsyncStorage.setItem(meta.tableName, JSON.stringify(self.list));
          self.loading = false;
        }),
        localLoad: flow(function*() {
          self.loading = true;
          const result = yield AsyncStorage.getItem(meta.tableName)
          self.list = JSON.parse(result || "");
          self.loading = false;
        })
      };
    });
};
