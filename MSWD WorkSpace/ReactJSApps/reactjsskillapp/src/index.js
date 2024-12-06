//import the required js file in index.js and change the "<App/>" to <.../>
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './ThirdSkillExperiment/Demo';
import AxiosAPIDemo from './ForthSkillExperiment/AxiosAPIDemo';
import Quiz from "./EndExam/Quiz"

/*ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <React.StrictMode>
    <Quiz/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
