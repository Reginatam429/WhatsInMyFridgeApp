import React, { useEffect, useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import Awesome from "./Awesome";
import axios from "axios";

const Userpage = () => {
  const { loading, user } = useAuth0();

  const [ingredients, setIngredients] = useState();
  const [userInfo, setUser] = useState();

  useEffect(() => {
    const initializeUser = async() =>{
      const mytest = await axios({
        method: 'POST',
        url: 'http://localhost:5000/test',
        data: {
          email: user.email,
          auth0_id: user.sub,
          username: user.given_name
        }
      });
      console.log(mytest.data.ingredient);
      setIngredients(mytest.data.ingredient);
      setUser(mytest.data.user)
    }
    if (user) initializeUser()
  }, [user]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid padding">
      <div className="row wording text-center">
        <div className="col-12">
          <br />
          <i className="far fa-user-circle fa-7x"></i>
          <h2>Welcome back, {user.given_name}</h2>
          <p>{user.email}</p>
          <code>{JSON.stringify(user, null, 2)}</code>
          <br />
          <Awesome ingredients={ingredients} user={userInfo}/>
        </div>
      </div>
    </div>
  );
};

export default Userpage;
