import React, { useState, useEffect, useContext } from 'react';

import { SONIC_TOKEN } from 'utils/env';
import { theme as mainTheme, Theme } from 'styles/theme';
import { ThemeType } from 'types';
import { AnswerType } from 'utils/summarizeAnswer';

export type Answer = {
  question: string;
  answer: AnswerType;
};
export type History = Record<AnswerType, Answer[]>;

type ContextType = {
  themeType: ThemeType;
  setThemeType: (themeType: ThemeType) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  history: History;
  setHistory: (history: History) => void;
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
  const [history, setHistory] = useState<History>({
    [AnswerType.YES]: [],
    [AnswerType.NO]: [],
    [AnswerType.INVALID]: [],
  });
  const [token, setToken] = useState<string>(SONIC_TOKEN);

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
