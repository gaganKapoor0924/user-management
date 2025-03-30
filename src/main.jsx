import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import UserProvider from './context/UserContext.jsx'
import AuthProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <UserProvider>
    <App />
    </UserProvider>
    </AuthProvider>
  </StrictMode>,
)
