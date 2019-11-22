import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import Awesome from './components/Awesome';

//Providers
import { Provider } from './Context';

//external api
import ExternalApi from "./views/ExternalApi";
//import Backend from './components/Api/Backend';

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

//Private Policy
import PrivatePolicy from './components/PrivatePolicy';

//Spinner
import Spinner from './components/Loading';

//Test
import Test from './components/Testpage';



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

            {/*Privacy Policy*/}
            <Route path="/private-policy" exact component={PrivatePolicy} />

            {/*Login/User Page*/}
            <PrivateRoute path="/user" component={Userpage} />

           {/*Search Page*/}
           <PrivateRoute path="/searchpage" component={Searchpage} />

           {/*404 Error*/}
           <Route path="/error" exact component={Errorpg} />

           {/*Test*/}
           <Route path="/test" exact component={Test} />

            {/*aWeSOME*/}
           <Route path="/awesome" exact component={Awesome} />

          </Switch>
        </React.Fragment>
      </Router>
      <Footer/>
    </Provider>
  );
}

export default App;


