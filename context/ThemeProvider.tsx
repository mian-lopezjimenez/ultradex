import { useState, useEffect, createContext, useMemo } from "react";

interface Props {
  children: JSX.Element;
}

interface Theme {
  darkMode: boolean;
  toggleDarkMode?: () => void;
}

const defaultState: Theme = {
  darkMode: false,
};

const ThemeContext = createContext<Theme>(defaultState);

function ThemeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (): void => {
    setDarkMode((prev) => !prev);
  };

  const value: Theme = useMemo(
    () => ({ darkMode, toggleDarkMode }),
    [darkMode]
  );

  useEffect(() => {
    const toggleTheme = (): void => {
      const darkThemeMq: MediaQueryList = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      if (darkThemeMq.matches) setDarkMode(true);
    };

    toggleTheme();
  }, []);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider };

export default ThemeContext;
