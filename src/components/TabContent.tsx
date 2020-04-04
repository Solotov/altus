import React, { ReactElement, useContext, useEffect } from "react";
import { TabContext } from "../context/TabContext";
import WebView from "./WebView";
import WelcomePage from "./WelcomePage/WelcomePage";

const TabContent = (): ReactElement => {
  const { tabState, setTabState } = useContext(TabContext);
  const { tabs, activeTabId, welcomePageHidden } = tabState;
  const hasTabs = tabs.length > 0;

  useEffect(() => {
    if (hasTabs) {
      setTabState(
        (prevState: TabState): TabState => {
          return {
            ...prevState,
            welcomePageHidden: true
          };
        }
      );
    }
  }, []);

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
