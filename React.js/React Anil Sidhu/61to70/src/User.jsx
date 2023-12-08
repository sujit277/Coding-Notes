import React from "react";
import { useParams } from "react-router-dom";

// Dynamic Routing
const User = () => {
  const params = useParams("email");

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{params.email}</h1>
      </div>
    </>
  );
};

export default User;