import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getallProducts();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])

    async function getallProducts() {
        const result = await axios.get("http://localhost:3000/ProductsList");
        setData(result.data);
        console.log(result.data);
    }

    return (
        <>
            {data.length === 0 || loading === true ?
                (
                    <div
                        className="fs-1 text-light text-center"
                        style={{ height: "800px" }}>
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <CirclesWithBar width="110" color="#DC3545" />
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1>{data[0]?.Name}</h1>
                        <h1>{data[1]?.Name}</h1>
                        <h1>{data[2]?.Name}</h1>
                        <h1>{data[3]?.Name}</h1>
                        <h1>{data[4]?.Name}</h1>
                        <h1>{data[5]?.Name}</h1>
                    </div>
                )}
        </>
    );
}

export default Products;