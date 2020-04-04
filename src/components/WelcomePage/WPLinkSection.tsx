import React, { ReactElement } from "react";
import WelcomePageSection from "./WPSection";
import Button from "../Button";
import Icon from "@iconify/react";
import bugOutlined from "@iconify/icons-ant-design/bug-outlined";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import linkOutline from "@iconify/icons-ant-design/link-outline";
import roundChat from "@iconify/icons-ic/round-chat";
import downloadOutlined from "@iconify/icons-ant-design/download-outlined";
import openExternalLink from "../../utils/openExternalLink";

const WelcomePageLinkSection = (): ReactElement => {
  const linkHandler = (e: any): void => {
    openExternalLink(e.target.closest(".button").getAttribute("datalink"));
  };

  return (
    <WelcomePageSection title="Links">
      <div className="links-list">
        <Button
          text="Report Bug"
          icon={<Icon icon={bugOutlined} width="1.1rem" />}
          isFluid={true}
          link="https://github.com/amanharwara/altus/issues"
          onClick={linkHandler}
        />
        <Button
          text="GitHub Repo"
          icon={<Icon icon={githubFilled} width="1.1rem" />}
          isFluid={true}
          link="https://github.com/amanharwara/altus"
          onClick={linkHandler}
        />
        <Button
          text="Website"
          icon={<Icon icon={linkOutline} width="1.1rem" />}
          isFluid={true}
          link="https://amanharwara.xyz/altus"
          onClick={linkHandler}
        />
        <Button
          text="Discord"
          icon={<Icon icon={roundChat} width="1.1rem" />}
          isFluid={true}
          link="https://discord.gg/mGxNGP6"
          onClick={linkHandler}
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
