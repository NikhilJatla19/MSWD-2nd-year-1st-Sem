import logo from './logo.svg';
import './App.css';
import Navbar from './routingdemo/Navbar'
import Home from './routingdemo/Home'
import Aboutus from './routingdemo/Aboutus'
import Contactus from './routingdemo/Contactus'
import Services from './routingdemo/Services'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Navbar/>

      <Route path="/home" component={Home} exact/>
      <Route path="/aboutus" component={Aboutus} exact/>
      <Route path="/services" component={Services} exact/>
      <Route path="/contactus" component={Contactus} exact/>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
