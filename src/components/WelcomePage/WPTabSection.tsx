import React, { ReactElement, useContext } from "react";
import WelcomePageSection from "./WPSection";
import { TabContext } from "../../context/TabContext";
import Tab from "../Tab";
import Button from "../Button";
import roundPlus from "@iconify/icons-ic/round-plus";
import Icon from "@iconify/react";
import openTabModal from "../../utils/openTabModal";

const WelcomePageTabSection = (): ReactElement => {
  const { tabState, setTabState } = useContext(TabContext);
  const { tabs } = tabState;
  const hasTabs = tabs.length > 0;

  return (
    <WelcomePageSection
      title="Tabs"
      className={`tab-section ${!hasTabs ? "is-flex" : ""}`}
    >
      {hasTabs ? (
        tabs.map((tab: TabObject) => (
          <Tab
            name={tab.name}
            key={tab.id}
            id={tab.id}
            icon={tab.icon}
            theme={tab.theme}
            notifications={tab.notifications}
            sound={tab.sound}
          />
        ))
      ) : (
        <div className="no-tabs">
          <p>You don't have any tabs.</p>
          <Button
            text="Add Tab"
            icon={<Icon icon={roundPlus} width="1.25rem" />}
            onClick={(): void => openTabModal(setTabState)}
          />
        </div>
      )}
    </WelcomePageSection>
  );
};

export default WelcomePageTabSection;
