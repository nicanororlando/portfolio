import React, {
  createContext,
  useCallback,
  useState,
  useMemo,
  useLayoutEffect,
} from "react";
import { useLocation, useHistory } from "react-router-dom";

export interface ILanguage {
  navBar: {
    home: string;
    about: string;
    skills: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  home: {
    data: {
      home_subtitle: string;
      home_description: string;
      hello_button: string;
    };
  };
}

export interface LanguageContextData {
  language: ILanguage;
  handleSelectIdiom(idiom: string): void;
  idiom: string;
}

export const LanguageContext = createContext<LanguageContextData>(
  {} as LanguageContextData
);

interface Props {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  // const pathname = window.location.pathname;
  const { pathname } = useLocation();
  const history = useHistory();
  const [idiom, setIdiom] = useState(() => {
    let lang = pathname.slice(1, 3);
    if (lang !== "es") {
      lang = localStorage.getItem("language") || "en";
    }
    const element = document.getElementsByTagName("html");
    element[0].lang = lang;
    return lang;
  });

  useLayoutEffect(() => {
    const idiomSelected = pathname.slice(1).split("/");
    if (idiomSelected[0].length === 2) {
      setIdiom(idiomSelected[0]);
    }
  }, [pathname]);

  const handleSelectIdiom = useCallback((idiomSelected: string) => {
    setIdiom(idiomSelected);
    const element = document.getElementsByTagName("html");
    element[0].lang = idiomSelected;
    // console.log(element[0].lang);
  }, []);

  const language = useMemo(() => {
    const checkIdiom = localStorage.getItem("language");
    // console.log(checkIdiom);

    if (checkIdiom !== idiom) {
      const lang = pathname.slice(1, 3);
      if (lang !== "en" && lang !== "es" && lang !== "pt") {
        history.push(`${process.env.PUBLIC_URL}/${idiom}${pathname}`);
      } else {
        history.push(`${process.env.PUBLIC_URL}/${idiom}${pathname.slice(3)}`);
      }
    }

    localStorage.setItem("language", idiom);

    return require(`data/Languages/${idiom}`);
  }, [history, idiom, pathname]);

  return (
    <LanguageContext.Provider value={{ language, handleSelectIdiom, idiom }}>
      {children}
    </LanguageContext.Provider>
  );
};
