import React, { ReactElement, useContext } from "react";
// Tab context
import { TabContext } from "../context/TabContext";
// Tab utility functions
import changeActiveTab from "../utils/changeActiveTab";
import removeTab from "../utils/removeTab";
// Icons
import { Icon } from "@iconify/react";
import userOutlined from "@iconify/icons-ant-design/user-outlined";
import baselineSettings from "@iconify/icons-ic/baseline-settings";
import roundClose from "@iconify/icons-ic/round-close";

const Tab = ({
  name,
  icon,
  id,
  theme,
  notifications,
  sound
}: TabObject): ReactElement => {
  const {
    tabState,
    setTabState
  }: { tabState: TabState; setTabState: Function } = useContext(TabContext);

  const isActive = tabState.activeTabId === id ? true : false;

  return (
    <div
      id={id.toString()}
      className="tab"
      data-active={isActive}
      onClick={(): void => changeActiveTab(id, tabState, setTabState)}
    >
      <div className="icon">
        {icon ? (
          <img src={icon} alt="Tab Icon" />
        ) : (
          <Icon icon={userOutlined} width="1.1em" />
        )}
      </div>
      <div className="title">{name}</div>
      <div className="controls">
        <div
          className="settings"
          onClick={(e): void => {
            e.stopPropagation();
            setTabState((prev: TabState) => {
              return {
                ...prev,
                tabModalOpen: true,
                editTab: {
                  name,
                  id,
                  theme,
                  notifications,
                  sound,
                  ...(icon && { icon })
                }
              };
            });
          }}
        >
          <Icon icon={baselineSettings} width="1.1em" />
        </div>
        <div
          className="close"
          onClick={(e): void => {
            e.stopPropagation();
            removeTab(id, tabState, setTabState, isActive);
          }}
        >
          <Icon icon={roundClose} width="1.25em" />
        </div>
      </div>
    </div>
  );
};

export default Tab;
