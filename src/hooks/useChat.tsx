import { Manager } from "socket.io-client";
import { useState } from "react";

function useChat() {
    const manager = new Manager('ws://localhost:5000')
    const socket = manager.socket('/')

    socket.io.on('error', () => {
        setNotification({
            show: true,
            state: false
        })

        setTimeout(() => {
            setNotification({
                show: false,
                state: false
            })
        }, 2000)
    })
    socket.io.on('reconnect', () => {
        setNotification({
            show: true,
            state: true
        })

        setTimeout(() => {
            setNotification({
                show: false,
                state: true
            })
        }, 2000)
    })
    const [chat, setChat] = useState([])
    const [notification, setNotification] = useState({
        show: false,
        state: false
    })
    function sendMessage(message: string) {
        socket.emit("chat message", message)
    }

    sendMessage('Hola mundo')
    return { chat, setChat, notification }
}

export { useChat }