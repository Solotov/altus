import React, { ReactElement, useContext } from "react";
import ReactModal from "react-modal";
import { TabContext } from "../context/TabContext";
import Icon from "@iconify/react";
import roundClose from "@iconify/icons-ic/round-close";
import Setting from "./Setting";
import Button from "./Button";

type SettingsModalProps = {
  isOpen: boolean;
};

const SettingsModal = ({ isOpen }: SettingsModalProps): ReactElement => {
  const context = useContext(TabContext);

  const closeSettingsModal = (): void =>
    context.dispatch({ type: "CLOSE_SETTINGS_MODAL" });

  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className="modal settings-modal"
      overlayClassName="modal-overlay settings-modal-overlay"
      onRequestClose={(): void => closeSettingsModal()}
    >
      <div className="header">
        <div className="title">Settings</div>
        <div
          className="close-button"
          onClick={(): void => closeSettingsModal()}
        >
          <Icon icon={roundClose} height="1.65rem" />
        </div>
      </div>
      <div className="settings">
        <Setting
          title="Close To Tray"
          description="Minimize app to tray when closed, instead of quitting the app."
          value={false}
        />
        <Setting
          title="Exit Prompt"
          description="Confirm before exiting the app."
          value={true}
        />
        <Setting
          title="Dark Mode"
          description="Toggle app-wide dark mode."
          value={true}
        />
        <Setting
          title="Tab Bar"
          description="Toggle the tab bar."
          value={true}
        />
        <Setting
          title="Custom Titlebar"
          description="Toggle the custom titlebar. Requires restart to apply."
          value={true}
        />
      </div>
      <div className="footer">
        <Button text="Save" />
      </div>
    </ReactModal>
  );
};

export default SettingsModal;
