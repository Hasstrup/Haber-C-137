import React, { Component } from 'react'

class FirstItem extends Component {
        constructor(props) {
          super(props)
          this.state = {
            selector: '',
            content: this.props.content
          }}

      componentWillMount() {
        this.setState({
          selector: this.props.selector, content: this.props.content
        })}

render() {

        let subject_agecontent;
        let teacher_classcontent;

        if(this.props.selector === 'student') {
          subject_agecontent = (
            <div>
              <p> Age </p>
              <h6>   {this.props.content.age} </h6>
            </div>)
        }
          else if(this.props.selector === 'teacher') {
            subject_agecontent = (
              <div>
                <p> Subject </p>
                <h6>   {this.props.subject.name} </h6>
              </div>
               )
          } else { }

          if(this.state.selector === 'teacher' || this.state.selector === 'student') {
            teacher_classcontent = (
              <div className='container-fluid'>
                <p> Lastname </p>
                <h4> {this.props.content.lastname} </h4>
                <hr/>
                <p> Firstname </p>
                <h3>   {this.props.content.firstname} </h3>
                <hr/>
                {subject_agecontent}
              </div>
            )} else {
              teacher_classcontent = (
                <div className='container-fluid'>
                  <p> Class Name </p>
                  <h4> {this.props.content.name} </h4>
                  <hr/>
                  <p> Class Teacher:  </p>
                  <h6> {this.props.classteacher.firstname}{this.props.classteacher.lastname} </h6>
                </div>
              )}

        return (
          <div>
          <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-4'>

              <img src= {this.props.selector === 'class' ? 'https://i.pinimg.com/736x/ec/0d/6d/ec0d6d7553a5236542868553c32726cc--logo-s-logo-branding.jpg' : this.props.content.image } alt= {this.props.content.image} className="img-thumbnail" style={{ height: 300 + 'px' }} id='top-image'/>
              </div>

            <div className='col-md-2'>
              <div className='container'> </div>
            </div>
            <div className='col-md-6'>
              {teacher_classcontent}
              </div>
              </div>
              </div>
              </div>
          )}}

export default FirstItem
