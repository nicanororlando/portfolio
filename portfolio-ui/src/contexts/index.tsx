import React from "react";

import { LanguageProvider } from "./LanguageProvider";
import { ThemeProvider } from "./ThemeProvider";

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => (
  <LanguageProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </LanguageProvider>
);

export default AppProvider;
