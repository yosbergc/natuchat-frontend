import './App.css'
import { useChat } from './hooks/useChat'
import { SendMessage } from './components/SendMessage/SendMessage'
import { ChatMessages } from './components/ChatMessages/ChatMessages'
function App() {
  const { chat, setChat } = useChat()
  return (
    <>  
      <main>
        <section className="chat-container">
          <ChatMessages />
          <SendMessage />
        </section>
        
      </main>
    </>
  )
}

export default App
