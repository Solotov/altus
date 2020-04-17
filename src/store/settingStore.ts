import Store from "electron-store";
import defaults from "../settings/defaults";

const settingStore: Store<{}> = new Store({
  name: "settings",
  defaults,
});

export default settingStore;
