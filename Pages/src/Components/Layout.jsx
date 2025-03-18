import React from 'react'
import Header from './Header.jsx'

import Footer from './Footer.jsx'
import Main from './Main.jsx'
import { Outlet } from 'react-router-dom'
export default function () {
  return (
     <div className='wrapper'>
            <div className='headerStyle'> 
              <Header><Outlet/></Header>
            </div>
            <div>
                <Main><Outlet/></Main>
           
             </div>
            <div>
              <Footer><Outlet/></Footer>
            </div>
          </div>
  )
}
