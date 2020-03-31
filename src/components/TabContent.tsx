import React, { ReactElement, useContext } from "react";
import { TabContext } from "../context/TabContext";
import WebView from "./WebView";
import WelcomePage from "./WelcomePage";

const TabContent = (): ReactElement => {
  const { tabState } = useContext(TabContext);
  const { tabs, activeTabId } = tabState;

  return (
    <div id="tab-content">
      {tabs.length > 0 ? (
        tabs.map((tab: TabObject) => (
          <WebView id={tab.id} key={tab.id} active={tab.id === activeTabId} />
        ))
      ) : (
        <WelcomePage />
      )}
    </div>
  );
};

export default TabContent;
