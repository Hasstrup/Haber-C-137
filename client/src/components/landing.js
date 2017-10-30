import NavBar from './nav-bar'
import React, { Component } from 'react'
import {Link, withRouter } from 'react-router-dom'
import LandingComponent from './landing-content'

class Landing extends Component {
constructor(props){
  super(props)
  this.state = {
    selector: ''
  }
}
componentWillMount(){
    this.setState({
      selector: this.props.selector
    })}

  render(){
    if(this.state.selector === '') {
    return(
      <div>

        <div id="carousel-slider" className="carousel slide responsive" data-ride="carousel" data-interval="7000">
      <div class="carousel-inner text-white ">
        <div class="carousel-item active">
            <div className='container-responsive'>
              <img class="d-block w-100" src="https://i.redd.it/n0j6ibnfxzey.png"/>
              </div>

          <div>
        <div class="carousel-caption d-none d-md-block" id='container-tingg'>
          <div className='container'>
          <h3 id='haber-text'> Welcome to Haber {'C-137'} School portal</h3>
          <hr/>
          <p id='haber-text-2'> This portal contains the directory of all students, teachers, and classes present {'in this'} planet. <br/>
          We are very happy to receive you as we have now granted you special {'CRUD'} abilities {'with this'} directory. <br/>
        <span> <strong> Have a blast!</strong> </span> </p>

          </div>
        </div>
      </div>
        </div>

        <div class="carousel-item align-items-center ">
          <div className='container-responsive'>
          <img class="d-block w-100"  id='funny-image' src="https://i.imgur.com/PK6HXUG.jpg"/>
          </div>
            <div className=" carousel-caption">
              <h1> Dont have an Auth token {'?'} </h1>
              <p> quickly peep my Github <a> @Hasstrup </a>  </p>
              <a className="btn btn-primary btn-lg" href="#" role="button"> Authenticate </a>
            </div>
        </div>
      </div>
    </div>

        <div  id='landing-content'>
          <LandingComponent selector={this.state.selector} history={this.props.history}/>
        </div>

      </div>
    )}
    
    else{
      return(
        <div>

    <LandingComponent selector={this.state.selector} history={this.props.history} />
  </div>
)
    }}}

export default Landing;
