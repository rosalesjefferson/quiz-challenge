import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/constants";

const Results = () => {
  const navigate = useNavigate()
  
  const {
    score,
    setScore,
    questions,
    setQuestions,
    setSelectedAnswer,
    setCurrentQuestionIndex
  } = useQuiz();

  const handlePlayAgain = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuestions([]); 

    navigate('/')

  };
  
  return (
    <div className="h-screen w-screen bg-primary text-secondary">
    <div className="flex h-full">
      <div className="h-full px-8 flex flex-col items-center justify-center min-w-[40rem] w-[45%]">
        <div>
          <h1 className="flex flex-col mb-4">
            <span className="text-[10rem] font-semibold leading-[8rem]">BRAVO!</span>
            <span className="text-[4rem] font-semibold">YOU HAVE SCORED</span>
          </h1>
          <button type='button' onClick={handlePlayAgain} className="text-[2rem] border-b ml-auto block">
            Wanna play again?
          </button>
        </div>
      </div>
      <div className="h-full font-semibold min-w-[40rem] w-[45%] bg-secondary text-primary 
        text-[18rem] flex flex-col items-center justify-center"
      >
        {score}/{questions.length}
      </div>
    </div>
  </div>   
  )
}

export default Results