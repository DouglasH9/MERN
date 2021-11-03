import React, {useState} from "react";

const ToDoInput = (props) => {
    const [item, setItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {toDo:item, isCompleted:false}
        props.onNewItem(task);
        setItem("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Enter something to do!</h1>
                <input type="text" name="itemHandle" onChange={ (e) => setItem(e.target.value) } value={item}/>
                <input type="submit" value="setTheItem"/>
            </form>
        </>
    )
}

export default ToDoInput;