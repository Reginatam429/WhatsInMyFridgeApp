import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css"

//Navbar
//import Navbar from './components/Navbar'

//Homepage
import Homepage from './components/Hompage';

function App() {
  return (
    <body>

    
    <div className="App">
       <Router>
      
        <div className="container">
          {/* <Navbar /> */}
          <br/>
            {/*Homepage Route*/}
            <Route path="/" exact component={Homepage} />

               
        </div>
      </Router>
     
    </div>
    </body>
  );
}

export default App;
