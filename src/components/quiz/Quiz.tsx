import { useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import cn from 'classnames'

import { useQuiz, useQuizTheme } from '../../context/constants';
import QuestionsLoader from '../skeleton-loader/QuestionsLoader';
import NextButton from './NextButton';

const Quiz= () => {
  const { theme } = useQuizTheme()
  const {
    questions,
    currentQuestionIndex,

    score,
    setScore,

    selectedAnswer, 
    setSelectedAnswer
  } = useQuiz();

  const answerStyles = useCallback((key: string, type: 'parent' | 'children') => {
    const isSelected = selectedAnswer === key
    interface Element {
      children: string
      parent: string
    }
    const themes: Record<'light' | 'dark', Element> = {
      light: {
        parent: `border-primary ${isSelected ? 'bg-primary text-secondary' : 'text-primary'}`,
        children: isSelected ? 'border-secondary' : 'border-primary bg-primary text-secondary'
      },
      dark: {
        parent: `border-secondary ${isSelected ? 'bg-secondary text-black-300' : 'bg-transparent text-secondary'}`,
        children: isSelected ? 'border-black-300 text-black-300 bg-secondary' : 'border-secondary-300 bg-secondary-300 text-black-300'
      },
    }
    return themes?.[theme]?.[type]
    
  }, [theme, selectedAnswer])

  if (questions?.length === 0) return <QuestionsLoader />;

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answerKey: string) => {
    setSelectedAnswer(answerKey);
    const isCorrect = currentQuestion?.correct_answers[`${answerKey}_correct`] === "true";
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  if (currentQuestionIndex >= questions?.length) {
    return <Navigate  to='/results'/>
  }

  return (
    <div className='max-w-[50rem] mx-auto flex flex-col items-center relative z-30'>
      <h2 className='text-center text-[5.625rem] leading-[7.2rem] mb-2'>
        Question {currentQuestionIndex + 1}/{questions?.length}
      </h2>
      <p className='text-3xl leading-[2.835rem] mb-14 text-center'>{currentQuestion?.question}</p>
      <div className="flex flex-col gap-2 mb-8">
        {Object.entries(currentQuestion.answers).map(([key, answer]) => (
          answer && (
            <button
              key={key}
              className={cn('border-2 py-5 px-8 flex gap-6 items-center b',
                answerStyles(key, 'parent')
              )}
              onClick={() => handleAnswerClick(key)}
            >
              <span className={cn(
                 'border uppercase rounded-full',
                 'flex-shrink-0 flex flex-col items-center justify-center',
                 'w-[3.125rem] h-[3.125rem] text-[1.875rem]',
                 answerStyles(key, 'children')
                )}
                >
                  {key?.slice(-1)}
                </span>
              <span className='text-[1.5rem] text-current leading-7 text-left'>{answer}</span>
            </button>
          )
        ))}
      </div>
      <NextButton />
    </div>
  );
};

export default Quiz;




// const Choices = () => {

// }

  // if(theme === 'light') {
      //   if(isChildren){
      //       return isSelected ? 'border-secondary' : 'border-primary bg-primary text-secondary'
      //   }

      //   return `border-primary ${isSelected ? 'bg-primary text-secondary' : 'text-primary'}`
      // }

      // if(isChildren) {
      //     return isSelected ? 'border-black-300' : 'border-secondary bg-secondary text-black-300'
      // }
      // return `border-secondary ${isSelected ? 'bg-secondary text-black-300' : 'text-secondary'}`