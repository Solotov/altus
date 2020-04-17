import React, { ReactElement, useContext, useEffect } from "react";
import { TabContext } from "../context/TabContext";
import WebView from "./WebView";
import WelcomePage from "./WelcomePage/WelcomePage";

const TabContent = (): ReactElement => {
  const context = useContext(TabContext);
  const { tabs, activeTabId, welcomePageHidden } = context;
  const hasTabs = tabs.length > 0;

  useEffect(() => {
    if (hasTabs) {
      context.dispatch({ type: "HIDE_WELCOME_PAGE" });
    }
  }, [activeTabId]);

  return (
    <div id="tab-content">
      {hasTabs ? (
        tabs.map((tab: TabObject) => (
          <WebView id={tab.id} key={tab.id} active={tab.id === activeTabId} />
        ))
      ) : (
        <></>
      )}
      <WelcomePage hidden={welcomePageHidden} />
    </div>
  );
};

export default TabContent;
