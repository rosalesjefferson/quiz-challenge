import { useContext } from "react";
import { QuizContext, QuizContextType } from "./QuizContextProvider";
import { QuizThemeContext, QuizThemeContextType } from "./QuizTheme";

export const useQuiz = () => {
    const context = useContext(QuizContext) as QuizContextType;
    if (!context) {
      throw new Error('useQuiz must be used within a QuizContextProvider');
    }
    return context;
  };

  export const useQuizTheme = () => {
    const context = useContext(QuizThemeContext) as QuizThemeContextType;
    if (!context) {
      throw new Error('useQuiz must be used within a QuizThemeContextProvider');
    }
    return context;
  };