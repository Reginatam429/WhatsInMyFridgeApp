import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExternalApi from "./views/ExternalApi";
//import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

//auth0
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";

//Navbar
import Navbar from './components/Navbar';
//Error404
import Errorpg from './components/Errorpg';
//Homepage
import Homepage from './components/Hompage';

//User page
import Userpage from './components/Userpage';
//Recipe Search
import Searchpage from './components/Searchpage';
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
       <div>
       <Switch>

            {/* route to the ExternalApi component */}
            <PrivateRoute path="/external-api" component={ExternalApi} />

            {/*Homepage Route*/}
            <Route path="/" exact component={Homepage} />

            {/*Login/Signup Route*/}
            <Route path="/about" exact component={About} />

            {/*Privacy Policy*/}
            <Route path="/private-policy" exact component={PrivatePolicy} />

            {/*Login/User Page*/}
            <PrivateRoute path="/user" component={Userpage} />

           {/*Search Page*/}
           <PrivateRoute path="/searchpage" component={Searchpage} /> 

           {/*404 Error*/}
           <Route path="/error" exact component={Errorpg} />

       
        </Switch>
        </div>
      </Router>
     
    </div>

  );
}

export default App;


