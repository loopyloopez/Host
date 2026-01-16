import express from "express";
import http from "http";
import { Server } from "socket.io";
import { json } from "stream/consumers";

const app = express();
app.use(express.json())
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    //origin: "http://localhost:3000",
    methods: ["GET", "POST"]
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
 

  let voltage = req.body.voltage;
  let table = req.body.table;
  let info = {'table':table,'voltage':voltage};
  console.log( `found table ${table} and voltage was ${req.body.voltage}`)
  res.sendStatus(200);
  io.emit("foo", info);
});
server.listen(4000,'0.0.0.0', () => {
  console.log("Server running on http://localhost:4000");
});