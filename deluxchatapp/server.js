const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors")

const port = process.env.port || 8000;

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server, {cors: true});

const { addUser, removeUser, getUser, getAllUsers } = require("./utils");

io.on("connection", socket => {
    socket.on("join", (data) => {
        const { name, room } = data
        const { user, error } = addUser({id: socket.id, name, room})
        if(error) return
    })
    socket.emit("message", {
        user: "admin",
        text: `${user.name}, thanks for joining!`
    })
    socket.broadcast.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has entered the chat`
    })
    socket.join(user.room)

    io.to(user.room).emit("room-data", {
        room: user.room,
        users: getAllUsers(user.room)
    })

    socket.on("left", () => {
        const user = removeUser(socket.id)

        user && io.to(user.room).emit("message", {
            user: "admin",
            text: `${user.name} has left the chat`
        })
    })

    socket.on("send-message", (message) => {
        const user = getUser(socket.id)

        io.to(use.room).emit("message", {
            user: user.name,
            text: message
        })

        io.to(user.room).emit("room-data", {
            room: user-room, 
            users: getAllUsers
        })
    })
})

app.get("/", (req, res) => res.send("Hello World"))

server.listen(port, () => 
    console.log(`Droppin eaves on port ${port}`)
    )

