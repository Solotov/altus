import React, { ReactElement } from "react";

type ButtonProps = {
  text: string;
  icon: ReactElement;
  isFluid?: boolean;
};

const Button = ({ text, icon, isFluid }: ButtonProps): ReactElement => {
  return (
    <div className={`button ${isFluid ? "fluid" : ""}`}>
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Button;
