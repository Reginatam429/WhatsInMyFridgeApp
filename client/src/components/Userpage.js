import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Awesome from './Awesome';
import axios from 'axios';

const Userpage = () => {

  const { loading, user } = useAuth0();
  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  const backend = axios.get('localhost:5000/users/1/ingredients');
  
  
  return (
   
      <div className="container-fluid padding">
          <div className="row wording text-center">
           <div className="col-12">
              <br/>
              <i className="far fa-user-circle fa-7x"></i>
              <h2>Welcome back, {user.given_name}</h2>
              <p>{user.email}</p>
              <code>{JSON.stringify(user, null, 2)}</code>

              <Awesome />
            </div>
          </div>
      </div>
      
   
  );
};

export default Userpage;