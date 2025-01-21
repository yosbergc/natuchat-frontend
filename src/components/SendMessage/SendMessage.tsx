import { LuSendHorizontal } from "react-icons/lu";
import './sendmessage.css'
import { FormEvent } from "react";
import { useRef } from "react";

function SendMessage({ sendMessage } : { sendMessage: (message: FormDataEntryValue | null) => void}) {
    const messageRef = useRef<HTMLInputElement>(null)
    function handleSend(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (messageRef.current === null) return;
        if (messageRef.current.value === '') {
            return console.log('vacio')
        }
        sendMessage(messageRef.current.value)
        messageRef.current.value = '';
    }
    return (
        <form className="send-message-container" onSubmit={handleSend}>
            <input type='text' placeholder='Escribe tu mensaje' name="message" autoComplete="off" ref={messageRef}></input>
            <button><LuSendHorizontal /></button>
        </form>
    )
}

export { SendMessage }