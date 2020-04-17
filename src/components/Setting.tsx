import React, { ReactElement } from "react";
import Toggle from "./Toggle";

type SettingProps = {
  title: string;
  description: string;
  value: boolean;
};

const Setting = ({ title, description, value }: SettingProps): ReactElement => {
  return (
    <div className="setting">
      <div className="info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <Toggle value={value} />
    </div>
  );
};

export default Setting;
