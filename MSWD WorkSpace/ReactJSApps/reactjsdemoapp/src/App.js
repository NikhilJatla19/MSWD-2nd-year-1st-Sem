import logo from './klu.png';

import { ReactComponent as Logo } from './logo.svg';

import './App.css';
import './style.css';
import kl from './image/klu.png';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Parent from './Parent';
import CC_State from './StateDemo/CC_state';
import Props_Parent_Functional from './propsdemo/Props_Parent_Functional';
import Props_Parent_Class from './propsdemo/Props_Parent_Class';

function App() {
  return (
    <div className="App">

      <Logo/>

      <h1>Demo On Functional And Class Components</h1>
      <ClassComponent/>
      <FunctionalComponent/>
      <Parent/>
      <h1 style={{color:"Red"}}><u>Demo On State On Class Component</u></h1>
      <CC_State/>
      <Props_Parent_Functional gender="male" dob="19/04/2003" age="18"/>
      <Props_Parent_Class gender="male" dob="19/04/2003" age="18"/>
      <h3 style={{color:"blue"}}>Id:2000030384</h3>
      <h3 style={{color:"blue"}}>Name:Jatla Nikhil Sai Lalith</h3>

      <img src='/logo192.png' width="100" height="100"/>
 
      <img src='klulogo3.png'/>   
      <br/>
      <img src={logo}  width="150" height="150"/> 
      <br/> 
      <h1><u>Demo On Inline CSS in react Js</u></h1>  
      <div style={{backgroundColor:"lime",fontWeight:'bold'}}>
        <p style={{fontSize:'25px',color:"blue"}}>Name:Jatla Nikhil Sai Lalith</p>
        <p style={{fontSize:'25px',color:"red"}}>Designation: Student</p>
        <p style={{fontSize:'25px',color:"yellow"}}>Department:CSE</p>
      </div> 

      <h1>Demo On External CSS in ReactJs</h1>  
      <div classname='demo'>

        University ID:2000030384<br/><br/>
        University:KL University<br/><br/>
        <img src={kl} width="100" height="75"/><br/><br/>
    
      </div>                 

    </div>
  );
}

export default App;
