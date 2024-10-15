import { createContext } from "react";
import { theme } from "./theme";

export const themeContext = createContext(theme);
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <themeContext.Provider value={theme}>{children}</themeContext.Provider>
  );
};

export default ThemeContextProvider;
