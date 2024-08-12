import { ReactNode, useState } from 'react';
import { ActiveThemeContext } from './ActiveThemeContext';
import log from '../log';

type Props = {
    children: ReactNode;
}

const ActiveThemeProvider = ({children}: Props) => {
  log("<ActiveThemeProvider /> rendered");
    const[theme, setTheme] = useState<string>("light");

    const toggleTheme = () => {
        setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
    }

  return (
    <ActiveThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ActiveThemeContext.Provider>
  )
}

export default ActiveThemeProvider;