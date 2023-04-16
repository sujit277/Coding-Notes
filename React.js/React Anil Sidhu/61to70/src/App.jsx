import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  const users = [
    { id: 1, name: "Sujit", email: "sujitkumar234@gmail.com" },
    { id: 2, name: "Anjali", email: "anjali1230@gmail.com" },
    { id: 3, name: "Chandani", email: "chandani32@gmail.com" },
  ];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Dynamic Routing</h1>
        {users.map((item) => {
          return (
            <div key={item.id}>
              <Link to={"/user/" + item.email}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
