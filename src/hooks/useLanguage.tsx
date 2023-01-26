import {
  LanguageContext,
  LanguageContextData,
} from "contexts/LanguageProvider";
import { useContext } from "react";

export function useLanguage(): LanguageContextData {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within an LanguageProvider");
  }

  return context;
}
