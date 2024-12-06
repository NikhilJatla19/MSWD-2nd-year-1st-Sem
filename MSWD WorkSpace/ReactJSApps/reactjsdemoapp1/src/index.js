import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RoutingDemo from './routingdemo/RoutingDemo';
import CC_Demo from './lifecycle/CC_Demo';
import FC_Demo from './Hooks/FC_Demo';
import ButtonDemo from './materialui/ButtonDemo';
import MapsDemo from './maps/MapsDemo';
import FetchDemo from './httpmethods/FetchDemo';
import AxiosDemo from './httpmethods/AxiosDemo';
import AxiosDemo1 from './httpmethods/AxiosDemo1';
import FragmentDemo from './fragments/FragmentDemo';
import Demo1_Functional from './Destructuring/Demo1_Functional';
import Demo1_Functional1 from './Destructuring/Demo1_Functional1';
import Demo1_Class from "./Destructuring/Demo1_Class";
import Demo_Form from "./ReactForms/Demo_Form";
import Demo_RegForm from "./ReactForms/Demo_RegForm";

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <React.StrictMode>
    <RoutingDemo />
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
    <CC_Demo />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <React.StrictMode>
    <MapsDemo />
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
    <FetchDemo />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <React.StrictMode>
    <AxiosDemo1 />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <React.StrictMode>
    <FragmentDemo />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <React.StrictMode>
    <Demo1_Functional1 />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <React.StrictMode>
    <Demo1_Class />
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <React.StrictMode>
    <RoutingDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
