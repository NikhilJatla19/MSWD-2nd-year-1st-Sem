//import logo from './logo.svg';
import './App.css';
//import Navbar from './Skill/Navbar';
//import Home from './Skill/Home';
//import Skill1 from './Skill/Skill1';
//import Skill2 from './Skill/Skill2';
import Quiz from './EndExam/Quiz';
//import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;

//import the required js file in index.js and change the "<App/>" to <.../>
/*
<BrowserRouter>

      <Navbar/>
      
      <Route path='/home' component={Home} exact/>
      <Route path='/skill1' component={Skill1} exact/>
      <Route path='/skill2' component={Skill2} exact/>

      </BrowserRouter>
*/