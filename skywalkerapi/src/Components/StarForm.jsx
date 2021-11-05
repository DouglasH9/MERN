import React, {useState} from "react";
import { useHistory } from "react-router";


const StarForm = (props) => {

    const [searchType, setSearchType] = useState("people");
    const [id, setId] = useState(1);
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        history.push(`/${searchType}/${id}`);
    }

    return (
        <form onSubmit={search}>
            <label>Search for: </label>
            <select onChange={e => setSearchType(e.target.value)} value={searchType}>
                <option>people</option>
                <option>planets</option>
            </select>

            <label> Id: </label>
            <input type="number" min={1} onChange={ (e) => setId(e.target.value)} value={id}/>
            <input type="submit" value="Search"/>
        </form>
    )

}
export default StarForm;