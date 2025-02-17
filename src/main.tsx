import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App/App.tsx'
import { Login } from './routes/Login/Login.tsx'
import { Register } from './routes/Register/Register.tsx'
import { ProtectedRoute } from './routes/ProtectedRoute/ProtectedRoute.tsx'
import { UserContextProvider } from './context/UserContext.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <UserContextProvider>
            <Routes>
                <Route path='/chat' element={
                    <ProtectedRoute>
                        <App />
                    </ProtectedRoute>
                }></Route>
                <Route path='/iniciar-sesion' Component={Login}></Route>
                <Route path='/' Component={Login}></Route>
                <Route path='/registro' Component={Register}></Route>
            </Routes>
        </UserContextProvider>
    </BrowserRouter>)
