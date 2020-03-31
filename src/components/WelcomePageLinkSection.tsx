import React, { ReactElement } from "react";
import WelcomePageSection from "./WelcomePageSection";
import Button from "./Button";
import Icon from "@iconify/react";
import bugOutlined from "@iconify/icons-ant-design/bug-outlined";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import linkOutline from "@iconify/icons-ant-design/link-outline";
import roundChat from "@iconify/icons-ic/round-chat";
import downloadOutlined from "@iconify/icons-ant-design/download-outlined";

const WelcomePageLinkSection = (): ReactElement => {
  return (
    <WelcomePageSection title="Links">
      <div className="links-list">
        <Button
          text="Report Bug"
          icon={<Icon icon={bugOutlined} width="1.1rem" />}
          isFluid={true}
        />
        <Button
          text="GitHub Repo"
          icon={<Icon icon={githubFilled} width="1.1rem" />}
          isFluid={true}
        />
        <Button
          text="Website"
          icon={<Icon icon={linkOutline} width="1.1rem" />}
          isFluid={true}
        />
        <Button
          text="Discord"
          icon={<Icon icon={roundChat} width="1.1rem" />}
          isFluid={true}
        />
        <Button
          text="Check For Updates"
          icon={<Icon icon={downloadOutlined} width="1.1rem" />}
          isFluid={true}
        />
      </div>
    </WelcomePageSection>
  );
};

export default WelcomePageLinkSection;
