import React, { ReactNode } from "react";

import { Container } from "./styles";

interface IProps {
  step: number;
  setStep(step: number): void;
}

interface BProps {
  children: ReactNode;
  active: number;
}

const TabButtons: React.FC<IProps> = ({ step, setStep }) => {
  const Button = ({ children, active }: BProps) => {
    if (active === step && typeof Storage !== "undefined")
      sessionStorage.setItem("skill-step", `${step}`);

    return (
      <button
        type="button"
        className={
          active === step
            ? "small btn-border px-3 me-1 active"
            : "small btn-border px-3"
        }
        onClick={() => setStep(active)}
        disabled={active === step}
      >
        {children}
      </button>
    );
  };

  return (
    <Container>
      <Button active={1}>Frontend projects</Button>
      <Button active={2}>Backend projects</Button>
    </Container>
  );
};

export default TabButtons;
