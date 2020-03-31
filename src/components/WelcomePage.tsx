import React, { ReactElement } from "react";
import WelcomePageLinkSection from "./WelcomePageLinkSection";

const WelcomePage = (): ReactElement => {
  return (
    <div className="welcome-page">
      <div className="header">Welcome to Altus!</div>
      <div className="content">
        <WelcomePageLinkSection />
      </div>
    </div>
  );
};

export default WelcomePage;
