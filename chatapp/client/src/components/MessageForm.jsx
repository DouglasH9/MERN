
import React, {useState, useEffect} from "react";
import io from "socket.io-client";

function MessageForm() {
  // connection to backend server
    const [socket] = useState( () => io(":8000") );
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log("Is this on?")
        socket.on("send chat", inputMessage => {
            setMessages(prevMessages => {return [...prevMessages, inputMessage]});
        })
        // optional space for extra components
        return () => socket.disconnect(true);
        },[socket]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        socket.emit("chat", input);
        setInput("");
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    return (
    <div className="App">
        <form onSubmit={onSubmitHandler}>
        <input type="text" name="message" autoComplete="off" value={input} onChange={onChangeHandler}/>
        <input type="submit" value="submit"/>
        </form>
        {
        messages.map((msg, i) => {
            return <h3 key={i}>{msg}</h3>
        })
            }
    </div>
    );
}

export default MessageForm;