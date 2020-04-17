import React from "react";
import tabStore from "../store/tabStore";
import TabReducer from "./TabReducer";

export const TabContext = React.createContext(undefined);

export class TabProvider extends React.Component {
  state: TabState = {
    tabs: tabStore.get("tabs"),
    activeTabId: "",
    welcomePageHidden: false,
    tabModalOpen: false,
    settingsModalOpen: false,
    editTab: null,
    dispatch: (action: Action) =>
      this.setState((state) => TabReducer(state, action)),
  };

  componentDidMount(): void {
    // Set initial active tab
    this.setState({
      ...this.state,
      activeTabId: (this.state.tabs[0] && this.state.tabs[0].id) || "",
    });
  }

  render(): React.ReactElement {
    return (
      <TabContext.Provider value={this.state}>
        {this.props.children}
      </TabContext.Provider>
    );
  }
}

export const TabConsumer = TabContext.Consumer;
