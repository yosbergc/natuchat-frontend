import { io } from "socket.io-client";

const socket = io("ws://localhost/5000", {
    auth: {
        username: 'Pepe el pollo'
    }
});

export { socket }