import React, { ReactElement } from "react";
import { ipcRenderer } from "electron";
import TabBar from "./TabBar";
import TabContent from "./TabContent";
import TabModal from "./TabModal";
import SettingsModal from "./SettingsModal";
import { TabConsumer } from "../context/TabContext";
import getNextTabId from "../utils/getNextTabId";

interface TabLayoutProps {
  context: any;
}

class BaseTabLayout extends React.Component<TabLayoutProps> {
  componentDidUpdate(): void {
    const { context } = this.props;
    ipcRenderer.removeAllListeners("close-tab");
    ipcRenderer.removeAllListeners("goto-next-tab");
    ipcRenderer.removeAllListeners("goto-previous-tab");

    function closeTabHandler(): void {
      if (context.tabs.length > 0) {
        context.dispatch({
          type: "CHANGE_ACTIVE_TAB",
          payload: getNextTabId(context.tabs, context.activeTabId, true),
        });
        context.dispatch({ type: "REMOVE_TAB", payload: context.activeTabId });
        context.dispatch({ type: "CHECK_TABS_AND_TOGGLE_WELCOME_PAGE" });
      }
    }

    function goToNextTabHandler(): void {
      if (context.tabs.length > 0) {
        context.dispatch({
          type: "CHANGE_ACTIVE_TAB",
          payload: getNextTabId(context.tabs, context.activeTabId, false),
        });
      }
    }

    function goToPreviousTabHandler(): void {
      if (context.tabs.length > 0) {
        context.dispatch({
          type: "CHANGE_ACTIVE_TAB",
          payload: getNextTabId(context.tabs, context.activeTabId, true),
        });
      }
    }

    // Remove any active listeners
    // Initially add the listener
    ipcRenderer.on("close-tab", closeTabHandler);
    ipcRenderer.on("goto-next-tab", goToNextTabHandler);
    ipcRenderer.on("goto-previous-tab", goToPreviousTabHandler);
  }

  componentWillUnmount(): void {
    // Remove all listeners when component is about to unmount
    ipcRenderer.removeAllListeners("close-tab");
    ipcRenderer.removeAllListeners("goto-next-tab");
    ipcRenderer.removeAllListeners("goto-previous-tab");
  }

  render(): ReactElement {
    const { context } = this.props;
    return (
      <div
        className="tab-layout"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TabBar></TabBar>
        <TabContent></TabContent>
        <TabModal
          isOpen={context.tabModalOpen}
          {...(context.editTab && { editTab: context.editTab })}
        ></TabModal>
        <SettingsModal isOpen={context.settingsModalOpen} />
      </div>
    );
  }
}

const TabLayout = (): ReactElement => (
  <TabConsumer>
    {(context): ReactElement => <BaseTabLayout context={context} />}
  </TabConsumer>
);

export default TabLayout;
