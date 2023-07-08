import React, { useState, useEffect, useContext } from 'react';

import { ThemeType } from 'types';
import { theme as mainTheme, Theme } from 'styles/theme';

export type History = {
  question: string;
  answer: string;
};

type ContextType = {
  themeType: ThemeType;
  setThemeType: (themeType: ThemeType) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  history: History[];
  setHistory: (history: History[]) => void;
  token: string;
  setToken: (token: string) => void;
};
type Props = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props): JSX.Element => {
  const defaultThemeType: ThemeType = 'dark';
  const [themeType, setThemeType] = useState<ThemeType>(defaultThemeType);
  const [theme, setTheme] = useState<Theme>(mainTheme[defaultThemeType]);
  const [history, setHistory] = useState<History[]>([]);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    setTheme(mainTheme[themeType]);
  }, [themeType]);

  const value = {
    themeType,
    setThemeType,
    theme,
    setTheme,
    history,
    setHistory,
    token,
    setToken,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
export const AppContext = React.createContext({} as ContextType);
export const useAppContext = (): ContextType => useContext(AppContext);
