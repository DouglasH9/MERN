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
    
    const itemClasses = ["itemText"]

    if(completed === true){
        itemClasses.push("lineThrough")
    }
    return (
        <div id="itemBoxContainer">
            {props.items.map( (item, i) => {

                return (
                <>
                    <div className="itemBox" key={i}>
                        <span className={itemClasses.join(" ")}>{item}</span><input name="completed" type="checkbox" onChange={CheckHandler}/>
                    </div>
                </>)
                
            })}

        </div>
    )
}

export default ItemDisplay;