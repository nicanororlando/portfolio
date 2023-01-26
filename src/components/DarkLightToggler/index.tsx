import React from "react";
import { Toggler } from "./styles";

interface IToggler {
  className?: string;
  checked?: boolean;
  onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
}

const DarkLightToggler: React.FC<IToggler> = ({
  className,
  checked,
  onChange,
}) => {
  return (
    <Toggler className={className + "hide-sm ml--10"}>
      <label>
        <input type="checkbox" checked={!checked} onChange={onChange} />
        <span className="slider" />
      </label>
    </Toggler>
  );
};

export default DarkLightToggler;
