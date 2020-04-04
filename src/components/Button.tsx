import React, { ReactElement, MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  icon: ReactElement;
  isFluid?: boolean;
  onClick?: MouseEventHandler;
  link?: string;
};

const Button = ({
  text,
  icon,
  isFluid,
  onClick,
  link
}: ButtonProps): ReactElement => {
  return (
    <div
      className={`button ${isFluid ? "fluid" : ""}`}
      onClick={onClick}
      {...(link && { datalink: link })}
    >
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Button;
