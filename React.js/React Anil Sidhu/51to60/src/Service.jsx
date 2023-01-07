import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const Service = () => {

    const params = useParams('name');
    const location = useLocation();
    console.log(location);
    /* const [searchParams,setSearchParams] = useSearchParams();
    const name = searchParams.get('name'); */

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Service Component</h1>
                {params.name ? (<h1>{params.name}</h1>) : null}
               {/* {name?(<h1>{name}</h1>):null} */}
            </div>
        </>
    );
}

export default Service;