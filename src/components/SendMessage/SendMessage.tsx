import { LuSendHorizontal } from "react-icons/lu";
import './sendmessage.css'

function SendMessage() {
    return (
        <section className="send-message-container">
            <input type='text' placeholder='Escribe tu mensaje'></input>
            <button><LuSendHorizontal /></button>
        </section>
    )
}

export { SendMessage }