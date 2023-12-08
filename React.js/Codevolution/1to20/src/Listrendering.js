import React from "react";

//List rendering
const Listrendering = () => {
  const data = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Alia", age: 23 },
    { id: 4, name: "Sonal", age: 28 },
    { id: 5, name: "Ritu", age: 29 },
  ];

  const nameList = data.map((person) => {
    return <h1 key={person.id}>{person.name}</h1>;
  });
  return <div style={{ textAlign: "center" }}>{nameList}</div>;
};

export default Listrendering;
