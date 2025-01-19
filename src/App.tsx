import './App.css'
import { useChat } from './hooks/useChat'
import { SendMessage } from './components/SendMessage/SendMessage'

function App() {
  const { chat, setChat } = useChat()
  return (
    <>  
      <main>
        <section className="chat-container">
          <section className="chat-messages">

          </section>
          <SendMessage />
        </section>
        
      </main>
    </>
  )
}

export default App
