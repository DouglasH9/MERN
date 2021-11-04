import react, {useEffect, useState} from "react";
import axios from "axios";

const StarForm = (props) => {

    const [starInfo, setStarInfo] = useState([]);

    useEffect( () => {
        axios.get("https://swapi.dev/api/films/")
        .then(res => {setStarInfo(res.data.results)})
        .catch(err => {console.log(err)});
        console.log("get request sent");
    }, [])


    return (
        <>
            <ul>
                {starInfo.map((starInfo, i) => {
                    return <li key={i}>{starInfo.title}</li>
                })}
            </ul>
        </>
    )
}
export default StarForm;