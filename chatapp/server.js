const express = require("express");
const app = express();
const port = 8000;
const server = app.listen(port, () => console.log(`Droppin eaves on port ${port}...`));

// Hook up server to socket
const io = require("socket.io")(server, {cors: true});

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("chat", inputMessage => {
        console.log("Got message: " + inputMessage);
        io.emit("send chat", inputMessage);
    })
});


