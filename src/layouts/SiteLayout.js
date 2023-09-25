import React from 'react'
import Navbar from '../Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer'

function SiteLayout() {
  return (
    <div>
      <nav>
      <Navbar></Navbar>
      </nav>
      <div className='container my-5'>
       <Outlet></Outlet>

    <Footer></Footer>
    </div>
    </div>
  )
}

export default SiteLayout