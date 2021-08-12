import logo from './logo.svg';
import './App.css';
import "./componetnts/Login"
import Login from './componetnts/Login';
import {BrowserRouter as Router , Redirect, Route , Switch, Link} from "react-router-dom";
import HomePage from './componetnts/HomePage';

import{BrowserRouter} from"react-router-dom"
import Signup from './componetnts/SignUp';
import SignUp from './componetnts/SignUp';
import Account from './componetnts/Account';
function App() {
  return (
    <BrowserRouter>
    
     <div>
      <Account />
      {/* <Router>
        <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/signup' exact component={SignUp}/>
        
        <Route path='/Login' exact component={Login}/>
        <Route path='/Signup' exact component={SignUp}/>
        
        </Switch>
      </Router> */}
        
          
    </div>
    </BrowserRouter>
  );
    
 
   
      
}

export default App;
