import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes, BrowserRouter,Navigate} from "react-router-dom"
import Layout from './Components/Layout'
import Main from './Components/Main'
import Header from './Components/Header.jsx'
import {UserContextProvider} from "./Context/ContextApi.jsx"
function App() {

  return (
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Navigate to="/page/1"/>}/>
      <Route path="/" element={<Layout />}>
      <Route path="page/:id" element={<Header />}/>
          <Route path="page/:id" element={<Main/>}/>
      </Route>
          
    </Routes>
  </BrowserRouter>
</UserContextProvider>
   
  )
}

export default App
