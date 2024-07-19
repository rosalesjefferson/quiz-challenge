import { useNavigate } from 'react-router-dom';

import { FloaterLarge, MainLogoLight, LongArrowRight } from '../../assets/images';

const Landing = () => {
  const navigate = useNavigate();
  return (
  <div className='reltive w-screen h-screen overflow-hidden bg-primary-500 text-secondary'>
     <img className='min-h-full' src={FloaterLarge} />
     <div className='absolute z-10 top-1/2 -translate-y-1/2 right-[12.4rem] flex flex-col items-end'>
        <h1 className='text-[12rem] leading-[11rem] font-semibold'>QUIZZER</h1>
        <figure className='flex items-start gap-3 mb-10'>
          <figcaption className='text-[0.9375rem]'>By:</figcaption>
          <img src={MainLogoLight} alt="Forge" className='w-[10.875rem]' />
        </figure>
        <button type='button' onClick={() => navigate('/quiz')} className='flex items-end'>
          <span className='text-[2rem]'>Let's start the quiz</span>
          <img src={LongArrowRight} alt="Quiz Start" />
        </button>
      </div>
    </div>
  );
};

export default Landing;
