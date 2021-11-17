import ChatView from "./ChatView";
import Info from "./Info";

import { useState, useEffect } from "react";
const [users, setUsers] = useState([]);
const [messages, setMessages] = useState([]);

let socket;
const end_point = "http://localhost:3000"

import io from "socket.io-client";
import { useLocation } from "react-router-dom";

const location = useLocation();

const Chat = () => {



useEffect( () => {
    socket = io(end_point)
    socket.emit("join", {name, room})

    return() => {
        socket.emit("left")
        socket.off()
    }
}, [end_point, location.search])

useEffect( () => {
    socket.on("message", (message) => setMessages([...messages, message]))
    socket.on("room-data", ({ users }) => setUsers(users))
},[])

return (
    <main className="chat">
        <Info room={room} users={users}/>
        <ChatView messages={messages} name={name} room={room} />
    </main>
)
}

export default Chat;