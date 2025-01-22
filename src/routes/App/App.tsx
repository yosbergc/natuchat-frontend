import './App.css'
import { useChat } from '../../hooks/useChat'
import { SendMessage } from '../../components/SendMessage/SendMessage'
import { ChatMessages } from '../../components/ChatMessages/ChatMessages'
import { Notification } from '../../components/Notification/Notification'

function App() {
  const { chat, notification, sendMessage } = useChat()
  return (
    <>  
      <main>
        <section className="chat-container">
          <ChatMessages chat={chat}/>
          <SendMessage sendMessage={sendMessage}/>
        </section>
        {
          notification.show && <Notification connection={notification.state} />
        }
      </main>
    </>
  )
}

export default App
