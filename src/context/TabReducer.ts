import tabStore from "../store/tabStore";

const TabReducer = (state: TabState | any, action: Action): TabState => {
  switch (action.type) {
    case "ADD_TAB":
      tabStore.set("tabs", [...tabStore.get("tabs"), action.payload]);
      return {
        ...state,
        tabs: [...state.tabs, action.payload],
      };
    case "EDIT_TAB":
      tabStore.set("tabs", [
        ...tabStore
          .get("tabs")
          .map((tab: TabObject) =>
            tab.id === action.payload.id ? action.payload : tab
          ),
      ]);
      return {
        ...state,
        tabs: state.tabs.map((tab: TabObject) =>
          tab.id === action.payload.id ? action.payload : tab
        ),
      };
    case "REMOVE_TAB":
      tabStore.set(
        "tabs",
        tabStore
          .get("tabs")
          .filter((tab: TabObject) => tab.id !== action.payload)
      );
      return {
        ...state,
        tabs: state.tabs.filter((tab: TabObject) => tab.id !== action.payload),
      };
    case "CHANGE_ACTIVE_TAB":
      return {
        ...state,
        activeTabId: action.payload,
      };
    case "SET_TAB_TO_EDIT":
      return {
        ...state,
        tabModalOpen: true,
        editTab: action.payload,
      };
    case "OPEN_TAB_MODAL":
      return {
        ...state,
        tabModalOpen: true,
      };
    case "CLOSE_TAB_MODAL":
      return {
        ...state,
        tabModalOpen: false,
      };
    case "OPEN_SETTINGS_MODAL":
      return { ...state, settingsModalOpen: true };
    case "CLOSE_SETTINGS_MODAL":
      return { ...state, settingsModalOpen: false };
    case "SHOW_WELCOME_PAGE":
      return { ...state, welcomePageHidden: false };
    case "HIDE_WELCOME_PAGE":
      return { ...state, welcomePageHidden: true };
    case "CHECK_TABS_AND_TOGGLE_WELCOME_PAGE":
      return {
        ...state,
        welcomePageHidden: state.tabs.length === 0 ? false : true,
      };
    default:
      return state;
  }
};

export default TabReducer;
