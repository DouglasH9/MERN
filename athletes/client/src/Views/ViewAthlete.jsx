import React from "react";
import { useParams } from "react-router-dom";

const ViewAthlete = (props) => {

    const {id} = useParams();
    console.log(id);

    return(
        <div>
            <h1>Page for athlete: {id}</h1>
        </div>
    )
}

export default ViewAthlete;