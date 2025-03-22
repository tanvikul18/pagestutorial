import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes, BrowserRouter,Navigate} from "react-router-dom"
import Layout from './Components/Layout'
import Main from './Components/Main'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

function App() {

  return (
   
    <BrowserRouter>
    <Routes>  

      <Route path="/" element={<Layout/>}>    
         <Route path="page/:id" element={<Main/>} />
          {/* <Route path="page/:id" element={<Main/>}/>        */}
      </Route>
       
    </Routes>
  </BrowserRouter>


   
  )
}

export default App
