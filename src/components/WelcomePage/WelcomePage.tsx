import React, { ReactElement } from "react";
import WelcomePageLinkSection from "./WPLinkSection";
import WelcomePageTabSection from "./WPTabSection";
import WelcomePageSettingSection from "./WPSettingSection";

const WelcomePage = ({ hidden }: { hidden?: boolean }): ReactElement => {
  return (
    <div className={`welcome-page ${hidden ? "hidden" : ""}`}>
      <div className="header">Welcome to Altus!</div>
      <div className="content">
        <WelcomePageLinkSection />
        <WelcomePageTabSection />
        <WelcomePageSettingSection />
      </div>
    </div>
  );
};

export default WelcomePage;
