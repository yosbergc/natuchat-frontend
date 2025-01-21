import './chatmessages.css'
import { Message } from '../Message/Message'
import { Message as MessageType } from '../../types'
function ChatMessages({ chat } : { chat: MessageType[]}) {
    return (
        <section className="chat-messages">
            {
                chat.map(message => {
                    return <Message isUser={false} message={message.message} sender={message.user} key={message.id}/>
                })
            }
        </section>
    )
}
export { ChatMessages }