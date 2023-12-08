import React from "react";

// Using index of array elements as a key in list rendering
// Conditions for using array index as keys
// 1. The items in your list do not have a unique id.
// 2. The list is a static list and will not change.
// 3. The items in your list will never be reordered and flitered.

const Indexaskeys = () => {
  const data = ["Sujit", "Anjali", "Chandani", "Puja"];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Index as Key</h1>
      {data.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  );
};

export default Indexaskeys;
