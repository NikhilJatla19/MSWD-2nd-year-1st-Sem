import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services';
import Contactus from './Contactus';
import './routing.css'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
const RoutingDemo =() =>(

    <BrowserRouter>

        <ul>
            <Link to="/home">
            <li>Home</li>
            </Link>

            <Link to="/aboutus">
            <li>AboutUs</li>
            </Link>

            <Link to="/services">
            <li>Services</li>
            </Link>

            <Link to="contactus">
            <li>ContactUS</li>
            </Link>
        </ul>
        <Switch>
      <Route path="/home" component={Home} exact/>
      <Route path="/aboutus" component={Aboutus} exact/>
      <Route path="/services" component={Services} exact/>
      <Route path="/contactus" component={Contactus} exact/>
      </Switch>
      
      </BrowserRouter>

);
export default RoutingDemo;