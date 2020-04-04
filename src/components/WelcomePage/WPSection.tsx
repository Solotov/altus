import React, { ReactElement } from "react";

type WelcomeSectionProps = {
  title: string;
  children?: any;
  className?: any;
};

const WelcomePageSection = ({
  title,
  children,
  className
}: WelcomeSectionProps): ReactElement => {
  return (
    <div className={`welcome-page-section ${className ? className : ""}`}>
      <div className="title">{title}</div>
      <div className="section">{children}</div>
    </div>
  );
};

export default WelcomePageSection;
