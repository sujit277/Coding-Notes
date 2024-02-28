import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const [params, setParams] = useSearchParams();
  const name = params.get("name");
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Products Page</h1>
      <div style={{ textAlign: "center" }}>
        <Link style={{ display: "block" }} to="/products?name=Sujit">
          Click1
        </Link>
        <Link style={{ display: "block" }} to="/products?name=Anjali">
          Click2
        </Link>
        <Link style={{ display: "block" }} to="/products?name=Chandani">
          Click3
        </Link>

        <h1 style={{ textAlign: "center" }}>Using URLSearchParams</h1>
        <h1 style={{ textAlign: "center" }}>{query.get("name")}</h1>
        <h1 style={{ textAlign: "center" }}>Using UseURLSearchParams</h1>
        <h1 style={{ textAlign: "center" }}>{name}</h1>
      </div>
    </>
  );
};

export default Products;
