import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors: {
    origin: "http://localhost:3001"
  }
 });


let scores =[]
io.on("connection", (socket) => {
  console.log("Hello Sir socket connected", socket.id)
  
  socket.on("score",(score)=>{
    scores.push(score);
    console.log(scores);
    
  })
});

httpServer.listen(3000, ()=>{console.log("server running on port 3000");
});