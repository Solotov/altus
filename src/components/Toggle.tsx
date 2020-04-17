import React, { ReactElement, useState, MouseEventHandler } from "react";
import { v4 as uuid } from "uuid";

type ToggleProps = {
  value: boolean;
  onClick?: MouseEventHandler;
};

const Toggle = ({ value, onClick }: ToggleProps): ReactElement => {
  const [toggleValue, setToggleValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const toggle = (clickHandler?: Function): void => {
    setToggleValue((prev) => !prev);
    if (clickHandler) clickHandler();
  };

  return (
    <div
      className={`toggle ${toggleValue ? "enabled" : ""} ${
        isFocused ? "focused" : ""
      }`}
    >
      <input
        type="checkbox"
        className="toggle-checkbox"
        checked={toggleValue}
        onChange={(): void => toggle(onClick)}
        onFocus={(): void => setIsFocused(true)}
        onBlur={(): void => setIsFocused(false)}
      />
    </div>
  );
};

export default Toggle;
