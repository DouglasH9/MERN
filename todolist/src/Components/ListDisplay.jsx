import React, {useState} from "react";

const ItemDisplay = (props) => {

    const [completed, setCompleted] = useState(false);

    const CheckHandler = (e) => {
        e.preventDefault();
        if(e.target.checked){
            setCompleted(true);
        } else {
            setCompleted(false);
        }
    }
    const isCompleted = true;
    return (
        <div id="itemBoxContainer">
            {props.items.map( (item) => {
                return (<>
                <div {isCompleted ? (className="checked") : (className = "itemBox")}>
                    {item}<input name="completed" type="checkbox" onChange={CheckHandler}/>
                </div>
                </>)
                
            })}

        </div>
    )
}

export default ItemDisplay;