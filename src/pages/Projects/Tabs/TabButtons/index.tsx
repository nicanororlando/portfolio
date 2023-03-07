import React, { ReactNode } from "react";

import { Container } from "./styles";
import { useLanguage } from "hooks/useLanguage";

interface IProps {
  step: number;
  setStep(step: number): void;
}

interface BProps {
  children: ReactNode;
  active: number;
}

const TabButtons: React.FC<IProps> = ({ step, setStep }) => {
  const { language } = useLanguage();

  const Button = ({ children, active }: BProps) => {
    if (active === step && typeof Storage !== "undefined")
      sessionStorage.setItem("skill-step", `${step}`);

    return (
      <button
        type="button"
        className={active === step ? "small px-3 me-1 active" : "small px-3"}
        onClick={() => setStep(active)}
        disabled={active === step}
      >
        {children}
      </button>
    );
  };

  return (
    <Container>
      <Button active={1}>{language.projects.frontend_title}</Button>
      <Button active={2}>{language.projects.backend_title}</Button>
    </Container>
  );
};

export default TabButtons;
