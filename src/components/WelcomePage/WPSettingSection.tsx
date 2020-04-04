import React, { ReactElement } from "react";
import WelcomePageSection from "./WPSection";
import Button from "../Button";
import Toggle from "../Toggle";
import Icon from "@iconify/react";
import baselineSettings from "@iconify/icons-ic/baseline-settings";
import reloadOutlined from "@iconify/icons-ant-design/reload-outlined";
import roundImportExport from "@iconify/icons-ic/round-import-export";

const WelcomePageSettingSection = (): ReactElement => {
  return (
    <WelcomePageSection title="Quick Settings" className="settings-section">
      <div className="quick-settings">
        <div className="quick-setting">
          <div className="title">Dark Mode:</div>
          <Toggle value={true} />
        </div>
        <div className="quick-setting">
          <div className="title">Tab Bar:</div>
          <Toggle value={true} />
        </div>
        <div className="quick-setting">
          <div className="title">Tray Icon:</div>
          <Toggle value={false} />
        </div>
      </div>
      <div className="settings-options">
        <Button
          text="View All Settings"
          icon={<Icon icon={baselineSettings} />}
          isFluid={true}
        />
        <Button
          text="Reset Settings"
          icon={<Icon icon={reloadOutlined} />}
          isFluid={true}
        />
        <Button
          text="Import/Export"
          icon={<Icon icon={roundImportExport} />}
          isFluid={true}
        />
      </div>
    </WelcomePageSection>
  );
};

export default WelcomePageSettingSection;
