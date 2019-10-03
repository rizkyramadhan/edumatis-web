import createRecord from "@app/libs/queries/crud/createRecord";
import deleteRecord from "@app/libs/queries/crud/deleteRecord";
import query from "@app/libs/queries/crud/query";
import updateRecord from "@app/libs/queries/crud/updateRecord";
import { flow } from "mobx-state-tree";
import { IModelType, isLateType, isUnionType, ModelPropertiesDeclaration, ModelPropertiesDeclarationToProperties, types } from "mobx-state-tree";

export default <P extends ModelPropertiesDeclaration = {}>(opt: {
  tableName: string;
  primaryKey?: string;
  validations?: {
    [key: string]: "required";
  };
  columns: P;
  actions?: (
    self: any
  ) => {
    [key: string]: any;
  };
}): IModelType<
  ModelPropertiesDeclarationToProperties<P>,
  {
    set: (key: string | any, value?: any) => void;
    save: () => void;
    load: () => void;
    validate: () => void;
    delete: () => void;
    find: (where: { [key: string]: any }, findopt?: { query?: any }) => void;
  }
> => {
  let primaryKey = !opt.primaryKey ? "id" : opt.primaryKey;
  let columns: any = {};

  for (let i in opt.columns) {
    const c = opt.columns[i];
    if (typeof c !== typeof types.maybeNull) {
      columns[i] = types.maybeNull(c as any);
    } else {
      columns[i] = c;
    }
  }

  const recordResult: any = types
    .model({
      ...columns,
      _meta: types.optional(
        types.string,
        JSON.stringify({
          primaryKey: primaryKey,
          tableName: opt.tableName
        })
      ),
      loading: types.optional(types.boolean, false),
      errors: types.optional(types.array(types.string), []),
      isSaved: types.optional(types.boolean, false)
    })
    .views((self: any) => ({
      get isNewRecord() {
        return !self[primaryKey];
      },
      get rawData() {
        const col = Object.keys(opt.columns);
        const result: any = {};
        col.forEach(key => {
          if (self[key] !== null) {
            result[key] = self[key];
          }
        });
        return result;
      }
    }))
    .actions((self: any) => {
      let actions = {};

      if (opt.actions) {
        actions = opt.actions(self);
      }

      return {
        ...actions,
        set: function(key: string | any, value?: any) {
          if (typeof key === "string") {
            self[key] = value;
            if (self[key] !== value) {
              self.isSaved = false;
            }
          } else {
            for (let i in key) {
              self[i] = key[i];
            }
            self.isSaved = false;
          }
        },
        save: flow(function*() {
          self.validate();
          if (self.errors.length === 0) {
            if (self.isNewRecord) {
              self.set("loading", true);
              const id = yield createRecord(opt.tableName, self.rawData, {
                primaryKey
              });
              if (id) {
                self.set(primaryKey, id);
                self.set("isSaved", true);
              }
              self.set("loading", false);
            } else {
              yield updateRecord(opt.tableName, self.rawData, {
                primaryKey
              });
            }
          }
        }),
        validate: function() {
          if (opt.validations) {
            const validations = opt.validations;
            const errors: string[] = [];
            Object.keys(validations).forEach(key => {
              if (validations[key] === "required") {
                if (
                  self[key] === undefined ||
                  self[key] === null ||
                  self[key] === ""
                ) {
                  errors.push(`${key} is required.`);
                }
              }
            });

            self.errors = errors;
          }
        },
        load: flow(function*() {
          if (!self.isNewRecord) {
            yield self.find({ [primaryKey]: self[primaryKey] });
          }
        }),
        find: flow(function*(
          where: { [key: string]: any },
          findopt?: { query?: any }
        ) {
          self.set("loading", true);
          try {
            const columns = Object.keys(opt.columns).map(c => {
              if (
                isLateType(opt.columns[c] as any) ||
                isUnionType(opt.columns[c] as any)
              ) {
                let query = ``;
                const col: any = opt.columns[c];
                if (col._subType)
                  query = col._subType.properties.query._defaultValue;

                if (Array.isArray(col._types)) {
                  col._types.forEach((e: any) => {
                    if (isLateType(e)) {
                      if (e._subType) {
                        query = `{ ${e._subType.columns.join("\n")} }`;
                      }
                    }
                  });
                }

                if (findopt && findopt.query && findopt.query[c]) {
                  query = findopt.query[c];
                }

                if (query) {
                  return `${c} ${query}`;
                } else {
                  return ``;
                }
              }
              return c;
            });

            let record = (yield query(opt.tableName, columns, {
              where
            })) || {};

            for (let c in record) {
              const value = record[c];
              if (Array.isArray(value) && isLateType(opt.columns[c] as any)) {
                self.set(c, {
                  list: value,
                  loading: false
                });
              } else {
                self.set(c, value);
              }
            }
            self.set("isSaved", true);
            self.set("loading", false);
          } catch (e) {
            self.set("loading", false);
            console.warn(e);
          }
        }),
        delete: flow(function*() {
          try {
            const row = yield deleteRecord(opt.tableName, self.rawData, {
              primaryKey
            });

            Object.keys(opt.columns).forEach(c => {
              if (self[c] !== null) {
                self.set(c, null);
              }
            });
          } catch (e) {}
        })
      };
    });

  recordResult.columns = Object.keys(columns);
  return recordResult;
};
