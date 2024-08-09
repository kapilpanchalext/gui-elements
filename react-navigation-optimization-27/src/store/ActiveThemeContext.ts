import { createContext } from "react";

interface ThemeType  {
    theme: string;
    toggleTheme: () => void;
}

export const ActiveThemeContext = createContext<ThemeType>({
    theme: "light",
    toggleTheme: () => {},
});