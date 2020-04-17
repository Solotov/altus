import Store from "electron-store";

const tabStore: Store<{
  tabs: any[] | TabObject[] | any;
}> = new Store({
  name: "tabs",
  defaults: {
    tabs: [],
  },
});

export default tabStore;
