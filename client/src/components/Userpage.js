import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import Ingredient from './Database/Ingredient';

const Userpage = () => {
  const { loading, user } = useAuth0();
  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <React.Fragment>
      <div className="container-fluid padding">
          <br/>
          <h2>Welcome back, {user.given_name}</h2>
          <p>{user.email}</p>
          <code>{JSON.stringify(user, null, 2)}</code>
          <Ingredient />
               
      </div>
      
    </React.Fragment>
  );
};

export default Userpage;