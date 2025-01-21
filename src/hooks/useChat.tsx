import { Manager } from "socket.io-client";
import { useState, useMemo } from "react";
import { ChatState } from "../types";
function useChat() {
    const { sendMessage } = useMemo(() => {
        const manager = new Manager('ws://localhost:5000')
        const socket = manager.socket('/', {
        auth: {
            user: 'yosber',
            lastMessage: 0
        }
        })
        socket.on('chat message', (message) => {
            const newChat = [...chat]
            newChat.push(message)
            setChat(newChat)
        })
        socket.on('initial chat', (chat) => {
            console.log('socket recuperado')
            setChat(chat)
        })
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
        function sendMessage(message: FormDataEntryValue | null) {
            socket.emit("chat message", message)
        }
        return { sendMessage }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    const [chat, setChat] = useState<ChatState>([])
    const [notification, setNotification] = useState({
        show: false,
        state: false
    })
    
    return { chat, setChat, notification, sendMessage }
}

export { useChat }