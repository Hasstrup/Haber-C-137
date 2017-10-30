import React, { Component } from 'react';
import Main from './main'
import Nav from './nav-bar'

class First extends Component {
  render(){
    return(
      <div>
        <Nav />
        <div className='container'>
          <Main />
        </div>
</div>

    )

  }

}

export default First;
