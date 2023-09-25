import React from 'react'
import {Link , NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <NavLink className="navbar-brand" href="/">Navbar</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className={`nav-link ${({isActive})=>isActive && 'active'}`} to="/home" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                  
                    <li className="nav-item">
                        <NavLink className={`nav-link ${({isActive})=>isActive && 'active'}`} to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${({isActive})=>isActive && 'active'}`} to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${({isActive})=>isActive && 'active'}`} to="/contact">Contact</NavLink>
                    </li>
                </ul>
               
            </div>
      </div>
    </nav>
    
    
    </>
  )
}

export default Navbar