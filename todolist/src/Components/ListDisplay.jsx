import React, {useState} from "react";

const ItemDisplay = (props) => {

    const [completed, setCompleted] = useState(false);

    const CheckHandler = (e) => {
        e.preventDefault();
        

    }

    return (
        <div id="itemBoxContainer">
            {props.items.map( (item) => {
                return (<>
                <div id="itemBox">
                    {item}<input name="completed" type="checkbox" onChange={CheckHandler}/>
                </div>
                </>)
                
            })}

        </div>
    )
}

export default ItemDisplay;