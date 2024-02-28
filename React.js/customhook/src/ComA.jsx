import React from "react";
import useFetch from "./UseFetch";

// Using Custom Hook useFetch to make API call and return data, error, loading

const ComA = () => {
  const { data, loading, error } = useFetch("https://api.example.com/data");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComA;
