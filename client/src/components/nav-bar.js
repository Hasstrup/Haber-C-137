import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '.././App.css';

class NavBar extends Component {
  render() {
    return  (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='nav-bg'>

  <a className="navbar-brand" href="/" id='nav-bg'>Haber {'C-137'} </a>
  <p className='navbar-nav mr-auto' id='nav-bg'> {'|'}     </p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto" id='nav-bg' >
      <a href="/" className='nav-item nav-link' id='nav-bg' > Home </a>
      <a href='/classes' className='nav-item nav-link' id='nav-bg' > Classes </a>
      <a href="/students" className='nav-item nav-link' id='nav-bg'> Students </a>
      <a href="/teachers" className='nav-item nav-link'id='nav-bg' > Teachers </a>
    </div>
  </div>

</nav>


       )
}}

export default NavBar;
