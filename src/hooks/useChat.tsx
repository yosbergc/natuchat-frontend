import { Manager } from "socket.io-client";
import { useState } from "react";

function useChat() {
    const manager = new Manager('ws://localhost:5000')
    const socket = manager.socket('/')

    socket.io.on('ping', () => {
        console.log('User connected')
    })

    const [chat, setChat] = useState([])

    function sendMessage(message: string) {
        socket.emit("chat message", message)
    }

    sendMessage('Hola mundo')
    return { chat, setChat }
}

export { useChat }