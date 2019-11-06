import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css"


//Homepage
import Homepage from './components/Hompage';
//Login/SignUp
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div className="App">
      
       <Router>
       <Navbar />
        <div className="container">
            {/*Homepage Route*/}
            <Route path="/" exact component={Homepage} />

            {/*Login/Signup Route*/}
            <Route path="/login" exact component={Login} />
               
        </div>
      </Router>
     
    </div>

  );
}

export default App;
