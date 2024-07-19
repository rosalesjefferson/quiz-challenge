import { createContext, useState, ReactNode, SetStateAction, Dispatch } from 'react';

type Theme = 'light' | 'dark'

export interface QuizThemeContextType {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const QuizThemeContext = createContext<QuizThemeContextType | undefined>(undefined);

 const QuizThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <QuizThemeContext.Provider value={{
      theme,
      setTheme,
    }}>
      {children}
    </QuizThemeContext.Provider>
  );
};

export default QuizThemeContextProvider

