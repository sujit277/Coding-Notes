import React from "react";
import { useEffect, useState } from "react";

const ComB = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Child Component is Rendered");
  }, [getItems]);

  return items.map((item) => (
    <h1 className="mt-3" key={item}>
      {item}
    </h1>
  ));
};

export default ComB;
