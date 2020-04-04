import React, { ReactElement, useState, MouseEventHandler } from "react";

type ToggleProps = {
  value: boolean;
  onClick?: MouseEventHandler;
};

const Toggle = ({ value, onClick }: ToggleProps): ReactElement => {
  const [toggleValue, setToggleValue] = useState(value);

  const toggle = (clickHandler?: Function): void => {
    setToggleValue(prevValue => !prevValue);
    clickHandler();
  };

  return (
    <div
      onClick={(): void => toggle(onClick)}
      className={`toggle ${toggleValue ? "enabled" : ""}`}
    ></div>
  );
};

export default Toggle;
