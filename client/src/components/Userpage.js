import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";


const Userpage = () => {
  const { loading, user } = useAuth0();
  console.log("hi Mega");
  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Userpage;