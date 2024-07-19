import { Route, Routes } from 'react-router-dom';

import QuizContainer from './components/quiz';
import Landing from './components/landing';
import Results from './components/quiz/Results';
import PageNotFound from './components/not-found';

const App = () => {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<QuizContainer />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;