import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Service = () => {
  // For Reading Dynamic Url data
  const params = useParams("name");

  // For Reading and Writing to the Query Params in the Url
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Service Component</h1>
        {params.name ? <h1>{params.name}</h1> : null}
        {name ? <h1>{name}</h1> : null}
        <button
          type="button"
          onClick={() => {
            setSearchParams({ name: "Elon Musk", roll: 12 });
          }}
        >
          ChangeueryParms
        </button>
      </div>
    </>
  );
};

export default Service;
