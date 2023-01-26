import { ThemeContext, ThemeContextData } from "contexts/ThemeProvider";
import { useContext } from "react";

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }

  return context;
}
