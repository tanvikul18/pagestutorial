import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './Context/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
    <App />
    </UserContextProvider>
)
