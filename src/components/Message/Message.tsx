import './message.css'
function Message({ message, sender, isUser } : { message: string, sender: string, isUser: boolean}) {
    return (
        <div className={isUser ? "message-sent-container message" : "message"}>
            <div className={isUser ? "message-sent inner-message" : "inner-message"}>
            <p>{message}</p>
            </div>
            <small>{sender}</small>
        </div>
    )
}
export { Message }