import { types } from "mobx-state-tree";
import { SessionRecord } from "./Session";
const Root = types.model("RootStore", {
  session: SessionRecord
});

export const RootStore = Root.create({
  session: {
    user: {}
  }
});
