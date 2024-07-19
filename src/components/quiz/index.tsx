import axios from 'axios';
import { useEffect } from 'react';
import cn from 'classnames';

import { MainLogoDark, FloterSmallDark, FloterSmallLight } from '../../assets/images';
import { useQuiz, useQuizTheme } from '../../context/constants';
import Quiz from './Quiz';

const QuizContainer = () => {
  const { setQuestions, questions } = useQuiz();
  const { theme } = useQuizTheme()

  useEffect(() => {
    if(questions?.length) return
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://quizapi.io/api/v1/questions', {
          params: {
            apiKey: 'CQqJRxUpHmEirNS0AK4Vd4TTOFt6ouxA7sC8Sull', 
            limit: 10,
          },
        });
        setQuestions(response?.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [setQuestions, questions]);

  return (
    <div className={cn('relative min-h-screen overflow-auto p-6',
      theme === 'light' ? 'bg-secondary-600 text-primary' : 'bg-black-300 text-secondary'
    )}>
      <img src={MainLogoDark} alt="Main Logo" className='w-[9.75rem] ml-auto mb-10 relative z-10' />
      <img 
        src={theme === 'light' ? FloterSmallDark : FloterSmallLight}
        alt="Main Logo" className='z-20 absolute left-0 top-0 h-full' 
      />
      <Quiz />
    </div>
  );
};

export default QuizContainer

