import React, { createContext, useState } from "react";

export interface ThemeContextData {
  theme: string;
  themeChecked: boolean;
  handleTheme(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [themeChecked, setThemeCheked] = useState(false);

  // const handleTheme = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     if (event.target.value === "light") setTheme("light");
  //     else setTheme("dark");
  //   },
  //   []
  // );

  const handleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    setThemeCheked((curr) => (curr === false ? true : false));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeChecked, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
