import React, { useEffect, useState } from "react";

const GetAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => {
      res.json().then((result) => {
        setData(result);
      });
    });
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {data.map((item) => {
          return <h1 key={item.id}>{item.title}</h1>;
        })}
      </div>
    </>
  );
};

export default GetAPI;
