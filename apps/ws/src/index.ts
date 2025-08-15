import { WebSocketServer } from "ws";
import {dbClient} from "@repo/db/client"
const server = new WebSocketServer({
    port:3001
})
server.on("connection", async (socket)=>{
   const res =  await dbClient.user.create({
        data:{
            email:Math.random().toString(),
            password:Math.random().toString(),
        }
    })
    console.log(res);
    socket.send("Hi there you are connected to the websocket server & user inserted to the database")
})