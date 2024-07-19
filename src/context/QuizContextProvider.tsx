import { createContext, useState, ReactNode, SetStateAction, Dispatch } from 'react';

interface Question {
  id: number;
  question: string;
  answers: Record<string, string | null>;
  correct_answers: Record<string, string>;
}

export interface QuizContextType {
  questions: Question[];
  setQuestions: Dispatch<SetStateAction<Question[]>>;

  currentQuestionIndex: number;
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;

  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  
  selectedAnswer: string | null;
  setSelectedAnswer:  Dispatch<SetStateAction<string | null>>;
}

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

 const QuizContextProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);


  return (
    <QuizContext.Provider value={{
      score,
      setScore,
      questions,
      setQuestions,
      selectedAnswer,
      setSelectedAnswer,
      currentQuestionIndex,
      setCurrentQuestionIndex,
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider
