import React, { ReactElement, useEffect, useContext } from "react";
import Tab from "./Tab";
import Dragula from "react-dragula";
import { TabContext } from "../context/TabContext";
import Icon from "@iconify/react";
import roundPlus from "@iconify/icons-ic/round-plus";

const TabBar = (): ReactElement => {
  const { tabState, setTabState } = useContext(TabContext);
  const { tabs } = tabState;

  useEffect(() => {
    // Instantiate Dragula to enable dragging
    Dragula([document.querySelector(".tabs-container")], {
      direction: "horizontal"
    });
  }, []);

  return (
    <div className="tabs-container">
      {...tabs &&
        tabs.map((tab: TabObject) => (
          <Tab
            title={tab.title}
            key={tab.id}
            id={tab.id}
            {...(tab.icon && { icon: tab.icon })}
          />
        ))}
      <div className="tab new-tab">
        <Icon icon={roundPlus} width="1.5em" />
      </div>
    </div>
  );
};

export default TabBar;
