import React, { ReactElement, MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactElement;
  isFluid?: boolean;
  onClick?: MouseEventHandler;
  link?: string;
};

const Button = ({
  text,
  icon,
  isFluid,
  onClick,
  link,
}: ButtonProps): ReactElement => {
  return (
    <button
      type="button"
      className={`button ${isFluid ? "fluid" : ""}`}
      onClick={onClick}
      {...(link && { datalink: link })}
    >
      {icon && <div className="icon">{icon}</div>}
      <div className="text">{text}</div>
    </button>
  );
};

export default Button;
