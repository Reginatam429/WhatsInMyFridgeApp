// src/views/ExternalApi.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();

  const callApi = async () => {
    console.log("callApi");
    try {
      const token = await getTokenSilently();

      // mega:
      // since you didn't define proxy in client's package.json
      // full url for your axios request is needed
      const response = await axios.get("http://localhost:5000/api/external", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const responseData = response.data;
      console.log("responseData from axios:", responseData);

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>External API</h1>
      <button onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default ExternalApi;
