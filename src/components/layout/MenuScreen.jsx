import React from "react";
import { Link } from 'react-router-dom';
import './MenuScreen.css'


const MenuScreen = () =>{

    return (
<nav className="navbar navbar-expand-lg navbar-dark menu p-3">
  <a className="navbar-brand text-top" href="#"><i className="fa-solid fa-clapperboard menu-icon"></i>&nbsp;&nbsp;&nbsp;<span className="font-size logo-color">FLJJ</span><span className="font-size">  MOVIE</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <a href="/login" className="btn btn-success bg-custom">Login</a>
      </li>
    </ul>
  </div>
</nav>
    )

}

export default MenuScreen;