import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Provider
import { Provider } from './Context';
//external api
import ExternalApi from "./views/ExternalApi";
//import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

//auth0
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";

//Navbar
import Navbar from './components/Navbar';
//Footer
import Footer from './components/Footer';
//Error404
import Errorpg from './components/Errorpg';
//Homepage
import Homepage from './components/Hompage';

//User page
import Userpage from './components/Userpage';
//Recipe Search
import Searchpage from './components/Searchpage';
//Recipe Page
import Recipepage from './components/Api/Recipepage';
//About Us
import About from './components/About';

//Private Policy
import PrivatePolicy from './components/PrivatePolicy';

//Spinner
import Spinner from './components/Loading';

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    
      <Provider>
       <Router>
       <React.Fragment>
        <Navbar />
    
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

          {/*Recipe Page*/}
          <PrivateRoute path="/recipepage/:label" component={Recipepage} /> 

           {/*404 Error*/}
           <Route path="/error" exact component={Errorpg} />
       
          </Switch>
        </React.Fragment>
      </Router>
      <Footer/>
      </Provider>
  );
}

export default App;


