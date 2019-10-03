import Record from "@app/libs/utils/Record";
import { types } from "mobx-state-tree";


export const UserRecord = Record({
  tableName: "user",
  columns: {
    id: types.optional(types.integer, 0),
    username: types.optional(types.string, ""),
    password: types.maybeNull(types.string),
    role: types.optional(types.string, "sales"),
    sekolah_id: types.optional(types.integer, 0),
    status: types.optional(types.string, "active")
  },
});
