import React, { ReactElement, useContext, useEffect } from "react";
import TabBar from "./TabBar";
import TabContent from "./TabContent";
import { TabContext } from "../context/TabContext";
import removeTab from "../utils/removeTab";
import useHotkeys from "../utils/useHotkeys";
import goToNextTabRight from "../utils/goToNextTabRight";
import goToNextTabLeft from "../utils/goToNextTabLeft";

const TabLayout = (): ReactElement => {
  const { tabState, setTabState } = useContext(TabContext);

  useEffect(() => {
    // Set initally active tab
    if (tabState.tabs.length > 0) {
      setTabState((prevState: TabState) => {
        return {
          ...prevState,
          activeTabId: prevState.tabs[0].id
        };
      });
    }
  }, []);

  // Close Active Tab
  useHotkeys(
    "ctrl+w, command+w",
    () => {
      removeTab(tabState.activeTabId, tabState, setTabState, true);
    },
    [tabState]
  );

  // Go to next tab on the right
  useHotkeys(
    "ctrl+tab, command+tab, ctrl+pagedown, command+pagedown",
    () => {
      goToNextTabRight(tabState.activeTabId, tabState, setTabState);
    },
    [tabState]
  );

  // Go to next tab on the left
  useHotkeys(
    "ctrl+shift+tab, command+shift+tab, ctrl+pageup, command+pageup",
    () => {
      goToNextTabLeft(tabState.activeTabId, tabState, setTabState);
    },
    [tabState]
  );

  return (
    <div
      className="tab-layout"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TabBar></TabBar>
      <TabContent></TabContent>
    </div>
  );
};

export default TabLayout;
