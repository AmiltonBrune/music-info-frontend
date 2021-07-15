import React, { createContext, useState, useContext } from 'react';

import light from 'styles/themes/light';

interface IThemeContext {
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;
    lightGray: string;

    info: string;
    yellow40: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@music-info:theme');

    if (themeSaved) return JSON.parse(themeSaved);
    else return light;
  });

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };
