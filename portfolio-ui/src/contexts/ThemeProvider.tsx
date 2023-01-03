import React, { createContext, useState, useCallback } from "react";

export interface ThemeContextData {
  theme: string;
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

  const handleTheme = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.target.value === "light") setTheme("light");
      else setTheme("dark");
    },
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
