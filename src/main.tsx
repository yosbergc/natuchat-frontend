import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App/App.tsx'
import { UserContextProvider } from './context/UserContext.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(<UserContextProvider>
    <BrowserRouter>
        <Routes>
            <Route path='/dashboard' Component={App}></Route>
            
        </Routes>
    </BrowserRouter>
</UserContextProvider>)
