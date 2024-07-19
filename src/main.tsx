import React from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom/client";

import QuizThemeContextProvider from "./context/QuizTheme.tsx";
import QuizContextProvider from "./context/QuizContextProvider.tsx";
import App from "./App.tsx";

import './main.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizThemeContextProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </QuizThemeContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);
