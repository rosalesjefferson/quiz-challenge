import cn from 'classnames'

import { useQuiz, useQuizTheme } from '../../context/constants';

const NextButton = () => {
    const { setTheme, theme } = useQuizTheme()
    const {
      currentQuestionIndex,
      setCurrentQuestionIndex,
      setSelectedAnswer,
      selectedAnswer
    } = useQuiz();
  
    const handleNext = () => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setTheme((prev) => {
        if(prev === 'dark') return 'light'
        return 'dark'
      })
    }
  
    const btnStyles: Record<'light' | 'dark', string> = {
      light: 'disabled:bg-secondary-400 bg-primary disabled:text-secondary-600 text-secondary',
      dark: 'bg-secondary-300 text-black-300 disabled:bg-opacity-10 disabled:text-secondary/10 '
    }

    return  (
      <button
        className={cn('w-[9.375rem] h-[4.6875rem] text-[1.875rem]', 
          theme === 'light' ? btnStyles['light'] : btnStyles['dark']
        )}
        onClick={handleNext}
        disabled={!selectedAnswer}
      >
        Next
      </button>
    )
  }

  export default NextButton