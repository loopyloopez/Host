import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    origin: "http://localhost:3000"
  }
});

io.on("connection", (socket) => {
  console.log("Client connected");



  

  // Example of broadcasting foo events
  socket.on("clientFoo", (msg) => {
    io.emit("foo", "message from server");
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
app.post("/", (req, res) => {
  let table = req.query.table;
  res.send(200);
  io.emit("foo", req.query.table, (err)=>{if(err){console.log(err);}});
});
server.listen(4000,'0.0.0.0', () => {
  console.log("Server running on http://localhost:4000");
});