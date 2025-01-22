import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App/App.tsx'
import { Login } from './routes/Login/Login.tsx'
import { Register } from './routes/Register/Register.tsx'
import { UserContextProvider } from './context/UserContext.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(<UserContextProvider>
    <BrowserRouter>
        <Routes>
            <Route path='/chat' Component={App}></Route>
            <Route path='/iniciar-sesion' Component={Login}></Route>
            <Route path='/registro' Component={Register}></Route>
        </Routes>
    </BrowserRouter>
</UserContextProvider>)
