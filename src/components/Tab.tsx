import React, { ReactElement, useContext } from "react";
// Tab context
import { TabContext } from "../context/TabContext";
// Icons
import { Icon } from "@iconify/react";
import userOutlined from "@iconify/icons-ant-design/user-outlined";
import baselineSettings from "@iconify/icons-ic/baseline-settings";
import roundClose from "@iconify/icons-ic/round-close";
import getNextTabId from "../utils/getNextTabId";

const Tab = ({
  name,
  icon,
  id,
  theme,
  notifications,
  sound,
}: TabObject): ReactElement => {
  const context = useContext(TabContext);
  const currentTab = {
    name,
    ...(icon && { icon }),
    id,
    theme,
    notifications,
    sound,
  };
  const isActive = context.activeTabId === id ? true : false;
  const nextTabId = getNextTabId(
    context.tabs,
    currentTab.id,
    context.tabs.indexOf(currentTab) === context.tabs.length - 1 ? false : true
  );

  return (
    <div
      id={id.toString()}
      className="tab"
      data-active={isActive}
      onClick={(): void =>
        context.dispatch({ type: "CHANGE_ACTIVE_TAB", payload: id })
      }
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
            context.dispatch({
              type: "SET_TAB_TO_EDIT",
              payload: currentTab,
            });
          }}
        >
          <Icon icon={baselineSettings} width="1.1em" />
        </div>
        <div
          className="close"
          onClick={(e): void => {
            e.stopPropagation();
            context.dispatch({
              type: "CHANGE_ACTIVE_TAB",
              payload: nextTabId,
            });
            context.dispatch({ type: "REMOVE_TAB", payload: id });
            context.dispatch({ type: "CHECK_TABS_AND_TOGGLE_WELCOME_PAGE" });
          }}
        >
          <Icon icon={roundClose} width="1.25em" />
        </div>
      </div>
    </div>
  );
};

export default Tab;
