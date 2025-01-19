import './App.css'
import { useChat } from './hooks/useChat'
import { LuSendHorizontal } from "react-icons/lu";

function App() {
  const { chat, setChat } = useChat()
  return (
    <>
      <main>
        <section className="chat-container">
          <section className="chat-messages">
            <div className="message">
              <div className="inner-message">
                <p>Asco de canción</p>
              </div>
              <small>Yosber</small>
            </div>
            <div className="message">
              <div className="inner-message">
                <p>Asco de canción</p>
              </div>
              <small>Yosber</small>
            </div>
            <div className="message message-sent-container">
              <div className="inner-message message-sent">
                <p>Así es muy aburrido</p>
              </div>
              <small>Emmanuel</small>
            </div>
            <div className="message message-sent-container">
              <div className="inner-message message-sent">
                <p>Así es muy aburrido</p>
              </div>
              <small>Emmanuel</small>
            </div>
            <div className="message message-sent-container">
              <div className="inner-message message-sent">
                <p>Así es muy aburrido</p>
              </div>
              <small>Emmanuel</small>
            </div>
            <div className="message">
              <div className="inner-message">
                <p>Asco de canción</p>
              </div>
              <small>Yosber</small>
            </div>
            <div className="message">
              <div className="inner-message">
                <p>Asco de canción</p>
              </div>
              <small>Yosber</small>
            </div>
            <div className="message">
              <div className="inner-message">
                <p>Asco de canción</p>
              </div>
              <small>Yosber</small>
            </div>
            <div className="message">
              <div className="inner-message">
                <p>Asco de canción</p>
              </div>
              <small>Yosber</small>
            </div>
            <div className="message">
              <div className="inner-message">
                <p>Asco de canción</p>
              </div>
              <small>Yosber</small>
            </div>
            <div className="message">
              <div className="inner-message">
                <p>Asco de canción</p>
              </div>
              <small>Yosber</small>
            </div>
          </section>
          <section className="send-message-container">
            <input type='text' placeholder='Escribe tu mensaje'></input>
            <button><LuSendHorizontal /></button>
          </section>
        </section>
        
      </main>
    </>
  )
}

export default App
