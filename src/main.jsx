import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserDon from './assets/components/UserDon.jsx'
import Ccontex from './assets/components/Ccontex.jsx'
import Login from './assets/components/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ccontex>
    <BrowserRouter>
    <Routes>
       <Route path='/user' element={<UserDon />} />
       <Route path='/log' element={<Login />} />
       <Route path='/' element={<App />} />
    </Routes>
    </BrowserRouter>  
     </Ccontex>
  </StrictMode>,
)
