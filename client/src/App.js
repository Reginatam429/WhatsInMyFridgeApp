import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
//auth0
import { useAuth0 } from "./react-auth0-spa";

//Navbar
import Navbar from './components/Navbar';
//Error404
import Errorpg from './components/Errorpg';
//Homepage
import Homepage from './components/Hompage';
//Login/SignUp
import Login from './components/Login';
//User page
import Userpage from './components/Userpage';
//About Us
import About from './components/About';
//Private Policy
import PrivatePolicy from './components/PrivatePolicy';

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    
    <div className="App">
      
       <Router>
       <Navbar />
        <div className="container">
            {/*404 Error*/}
            <Route path="/error" exact component={Errorpg} />

            {/*Homepage Route*/}
            <Route path="/" exact component={Homepage} />

            {/*Login/Signup Route*/}
            <Route path="/login" exact component={Login} />

            {/*Login/User Page*/}
            <Route path="/user" exact component={Userpage} />

            {/*Login/Signup Route*/}
            <Route path="/about" exact component={About} />

            {/*Privacy Policy*/}
            <Route path="/private-policy" exact component={PrivatePolicy} />

        </div>
      </Router>
     
    </div>

  );
}

export default App;


