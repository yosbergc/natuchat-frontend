import { Manager } from "socket.io-client";
import { useState, useMemo } from "react";
import { ChatState, Message } from "../types";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
function useChat() {
    const [chat, setChat] = useState<ChatState>([])
    const { user } = useContext(UserContext)
    const { socket } = useMemo(() => {
        const manager = new Manager('ws://natuchat-5rd9oadq6-yosber-guerreros-projects.vercel.app/')
        const socket = manager.socket('/', {
        auth: {
            user: user?.user,
            lastMessage: 0
        }
        })
        
        return { socket }
    }, [user])
    
    socket.on('chat message', (message: Message) => {
        const newChat = [...chat]
        newChat.push(message)
        setChat(newChat)
    })
    socket.on('initial chat', (chat: ChatState) => {
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
    
    
    const [notification, setNotification] = useState({
        show: false,
        state: false
    })
    
    return { chat, setChat, notification, sendMessage }
}

export { useChat }