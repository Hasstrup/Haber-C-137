import React, { Component } from 'react';
import First from './components/first-main'
import Main from './components/main'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/nav-bar'


import './App.css';

class App extends Component {
  render(){
    return(
      <div>

      <NavBar/>
          <div  id='baddo'>
            <BrowserRouter>
            <Main />
             </BrowserRouter>
             <div  id='container-x'>
             <footer>
               <div>
                 <nav id='footer' className="navbar fixed-bottom">
                   <a id='footer-texts' className=' mr-auto'> <svg id="i-github" viewBox="0 0 64 64" width="32" height="32">
                     <path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
                 </svg> </a>
                 <a class="navbar-text navbar-nav ml-auto" id='footer-texts' href="http://twitter.com/hasstrupezekiel"> <span id='footer-text'> Built {'with'}
                   <svg id="i-heart" viewBox="0 0 32 32" width="17" height="17" fill="red" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                     <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
                   </svg>
                   by Hasstrup Ezekiel </span> </a>
               </nav>
               </div>
             </footer>
           </div>
           </div>
         </div>
)

  }

}


export default App;
