import './chatmessages.css'
import { Message } from '../Message/Message'
import { Message as MessageType } from '../../types'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
function ChatMessages({ chat } : { chat: MessageType[]}) {
    const { user } = useContext(UserContext)
    return (
        <section className="chat-messages">
            {
                chat.map(message => {
                    return <Message isUser={user?.user === message.user} message={message.message} sender={message.user} key={message.id}/>
                })
            }
        </section>
    )
}
export { ChatMessages }