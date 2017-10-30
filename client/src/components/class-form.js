//this is a redundant component page w
import React, { Component } from 'react'

class ClassForm extends Component {
 constructor(props) {
      super(props)
      this.state = {
        hasId: false,
        id: null
      }
    }

    componentWillMount(){
      if(this.props.validator == true){
        this.setState({ hasId: true, id: this.props.params.//youknow
        })
      } else {
        this.setState({ hasId: false, id: null})
      }}

      render(){
        if(this.state.hasId == true){
          return (
            <EditForm id={this.state.id} isEdit={true}/>
          )
        } else {
          return(
            <EditForm isEdit={false}/>
          )
        }
}}

export default ClassForm

<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
<div className="carousel-item">
<img src="http://i.huffpost.com/gen/1258631/thumbs/o-EMPTY-SCHOOL-HALLWAY-facebook.jpg" alt="..."/>
  <div className="carousel-caption d-none d-md-block">
    <h3>Welcome to Haber College </h3>
    <p> Dedicated page {'for'} administrators </p>
    <a className="btn btn-primary btn-lg" href="#" role="button"> Authenticate </a>
  </div>
</div>
<div className="carousel-item">
  <img src="http://citizen.education/wp-content/uploads/ucla.jpg" alt="..."/>
    <div className="carousel-caption d-none d-md-block">
      <h3> Dont have an Auth token {'?'} </h3>
      <p> quickly peep my Github <a> @Hasstrup </a>  </p>
      <a className="btn btn-primary btn-lg" href="#" role="button"> Authenticate </a>
    </div>
  </div>
  </div>
</div>
