import { useLanguage } from "hooks/useLanguage";
import React, { useState } from "react";
import { Section, Tab } from "./styles";
import ModelProfile from "./ModelProfile";
import TabButtons from "./Tabs/TabButtons";
import FrontEnd from "./Tabs/FrontEnd";

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const [step, setStep] = useState(() => {
    const skillStep = sessionStorage.getItem("skill-step");
    if (Number(skillStep)) return Number(skillStep);
    return 1;
  });

  return (
    <ModelProfile>
      <Section className="contact section" id="projects">
        <h2 className="section__title">{language.contact.section_title}</h2>
        <span className="section__subtitle">
          {language.contact.section_subtitle}
        </span>
        <div className="row d-flex overflow-auto overflow-sm-none tabs">
          <TabButtons step={step} setStep={setStep} />
        </div>

        {/* TABS */}
        <Tab active={step === 1}>
          <FrontEnd />
        </Tab>
        <Tab active={step === 2}>
          <div />
        </Tab>

        {/* {step === 1 && <PersonalData />}
          {step === 2 && <MyConstructed />}
          {step === 3 && <Portfolio />}
          {step === 4 && <Payments />}
          {step === 5 && <MySite />} */}
      </Section>
    </ModelProfile>
  );
};

export default Projects;
