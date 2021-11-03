import React from "react";

const ItemDisplay = (props) => {

    const CheckHandler = (i) => {
        props.setComplete(i);
    }

    const deleteItem = (i) => {
        console.log(i);
        props.deleteThis(i);
    }

    const lineThrough = {
        textDecoration: "line-through"
    }
    const listStyle = {};

    const showDelete = (item, i) => {
        console.log(i);
        return item.isCompleted ? <button onClick={() => deleteItem(i)}>Delete</button> : <></>;
    }

    return (
        <div id="itemBoxContainer">
            {props.items.map( (item, i) => (
                <div key={i}>
                    <div className="itemBox">
                        <span style={item.isCompleted ? lineThrough : listStyle}>{item.toDo}</span>
                        <input checked={item.isCompleted} name="completed" type="checkbox" onChange={() => CheckHandler(i)} />
                        {showDelete(item, i)}
                    </div>
                </div>))}
        </div>
    )
}

export default ItemDisplay;