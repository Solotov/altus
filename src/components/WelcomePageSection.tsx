import React, { ReactElement } from "react";

type WelcomeSectionProps = {
  title: string;
  children?: any;
};

const WelcomePageSection = ({
  title,
  children
}: WelcomeSectionProps): ReactElement => {
  return (
    <div className="welcome-page-section">
      <div className="title">{title}</div>
      <div className="section">{children}</div>
    </div>
  );
};

export default WelcomePageSection;
