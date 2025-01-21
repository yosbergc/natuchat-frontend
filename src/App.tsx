import './App.css'
import { useChat } from './hooks/useChat'
import { SendMessage } from './components/SendMessage/SendMessage'
import { ChatMessages } from './components/ChatMessages/ChatMessages'
import { Notification } from './components/Notification/Notification'

function App() {
  const { chat, setChat, notification } = useChat()
  return (
    <>  
      <main>
        <section className="chat-container">
          <ChatMessages />
          <SendMessage />
        </section>
        {
          notification.show && <Notification connection={notification.state} />
        }
      </main>
    </>
  )
}

export default App
