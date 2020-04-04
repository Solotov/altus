import React, { ReactElement, useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import { Icon } from "@iconify/react";
import roundClose from "@iconify/icons-ic/round-close";
import Select, { ValueType } from "react-select";
import Toggle from "./Toggle";
import Button from "./Button";
import roundPlus from "@iconify/icons-ic/round-plus";
import { v4 as uuid } from "uuid";
import closeTabModal from "../utils/closeTabModal";

type TabModalProps = {
  isOpen: boolean;
  tabStateHandler: Function;
  editTab?: TabObject;
};

type ThemeOptionType = {
  label: string;
  value: string;
};

const TabModal = ({
  isOpen,
  tabStateHandler,
  editTab
}: TabModalProps): ReactElement => {
  const themeOptions = [
    { value: "default", label: "Default" },
    { value: "dark", label: "Dark" }
  ];

  const values = {
    name: editTab !== undefined ? editTab.name : "",
    theme:
      editTab !== undefined
        ? themeOptions.find(theme => theme.value === editTab.theme)
        : themeOptions[0],
    notifications: editTab !== undefined ? editTab.notifications : true,
    sound: editTab !== undefined ? editTab.sound : true
  };

  const [tabName, setTabName] = useState(values.name);
  const [tabTheme, setTabTheme] = useState(values.theme);
  const [tabNotifications, setTabNotifications] = useState(
    values.notifications
  );
  const [tabSound, setTabSound] = useState(values.sound);

  useEffect(() => {
    setTabName(values.name);
    setTabTheme(values.theme);
    setTabNotifications(values.notifications);
    setTabSound(values.sound);
  }, [values.name]);

  const addTab = (): void => {
    const newTab: TabObject = {
      name: tabName || "New Tab",
      id: uuid(),
      theme: tabTheme.value,
      notifications: tabNotifications,
      sound: tabSound
    };

    tabStateHandler((prev: TabState) => {
      return {
        ...prev,
        tabs: [...prev.tabs, newTab],
        activeTabId: newTab.id,
        welcomePageHidden: true
      };
    });
  };

  const editExistingTab = (): void => {
    const editedTab: TabObject = {
      name: tabName,
      id: editTab.id,
      theme: tabTheme.value,
      notifications: tabNotifications,
      sound: tabSound
    };

    tabStateHandler((prev: TabState) => {
      return {
        ...prev,
        tabs: [
          ...(prev as any).tabs.map((tab: TabObject) =>
            tab.id === editedTab.id ? editedTab : tab
          )
        ]
      };
    });
  };

  const modalActionHandler = (): void => {
    if (editTab) {
      editExistingTab();
    } else {
      addTab();
    }

    closeTabModal(tabStateHandler);
  };

  ReactModal.setAppElement("#root");

  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={(): void => closeTabModal(tabStateHandler)}
      className="tab-modal"
      overlayClassName="tab-modal-overlay"
    >
      <div className="header">
        <div className="title">Tab Preferences</div>
        <div
          className="close-button"
          onClick={(): void => closeTabModal(tabStateHandler)}
        >
          <Icon icon={roundClose} height="1.65rem" />
        </div>
      </div>
      <div className="settings">
        <div className="setting">
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            name="name-input"
            className="textbox"
            value={tabName}
            onChange={(e): void => setTabName(e.target.value)}
          />
        </div>
        <div className="setting">
          <label htmlFor="theme-input">Theme:</label>
          <Select
            options={themeOptions}
            value={tabTheme}
            name="theme-input"
            classNamePrefix="theme-select"
            onChange={(e: ValueType<ThemeOptionType>): void =>
              setTabTheme(e as ThemeOptionType)
            }
          />
        </div>
        <div className="setting inline">
          <p className="label">Enable Notifications</p>
          <Toggle
            value={tabNotifications}
            onClick={(): void => setTabNotifications(prev => !prev)}
          />
        </div>
        <div className="setting inline">
          <p className="label">Enable Sound</p>
          <Toggle
            value={tabSound}
            onClick={(): void => setTabSound(prev => !prev)}
          />
        </div>
      </div>
      <div className="footer">
        <Button
          text={`${editTab !== undefined ? "Save" : "Add"}`}
          icon={<Icon icon={roundPlus} />}
          onClick={modalActionHandler}
        />
      </div>
    </ReactModal>
  );
};

export default TabModal;
