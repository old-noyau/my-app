import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "../NavBar/NavBar.css"

const NavBar = () => {
  return (
    <>
    <header>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-3">
      <div className="container-fluid">
        <Link id="liO" className="navbar-brand" to="/"><img src="../images/noyau.jpeg" alt="Noyau" width={35} class="rounded-circle" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"     data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav gap-2">
            <li id="liA" className="nav-item">
              <Link className="nav-link" to="/Base">Base</Link>
            </li>
            <li id="liB" className="nav-item">
              <Link className="nav-link" to="/Community">Community</Link>
            </li>
            <li id="liC" className="nav-item">
              <Link className="nav-link" to="/Notes">Notes</Link>
            </li>    
            <li id="liD" className="nav-item">
              <Link className="nav-link" to="/OurLab">OurLab</Link>
            </li>    
          </ul>
        </div>
      </div>
    </nav>
    </header>
    
    <Outlet />
    </>
  )
}

export default NavBar