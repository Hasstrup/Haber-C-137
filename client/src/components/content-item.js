import React, { Component } from 'react'

class ContentItem extends Component {
  constructor(){
    super()
    this.state = { content: null, selector: null}
  }

  componentWillMount(){
    this.setState({
      content: this.props.content,
      selector: this.props.selector
    })}

handleClick = (id) => {
this.props.history.push(`/${this.props.selector}/${id}`)
}



render() {

      let displayMessage;

      if (this.state.selector === 'student' || this.state.selector === 'teacher') {
    displayMessage = (
        <div className={ this.state.selector === 'students' ? 'col-md-3' : 'col-md-3'}>
        <div class="card"  style={{width: 12 + 'rem' }} id={this.state.selector === 'student' ? 'cardi' : 't-card' } onClick={() => this.handleClick(this.state.content._id)}>
            <img class="card-img-top"  src={this.state.content.image} alt={this.state.content.firstname}/>
              <div class="card-body">
              <p class="card-text"> {this.state.content.firstname} {this.state.content.lastname} </p>
              </div>
            </div>
          </div>
      )}
         else {
          displayMessage = (
            <div className= 'col-md-2'>
              <div class="card"  style={{width: 15 + 'rem' }} onClick={() => this.handleClick(this.state.content._id)} id='cardix'>
                <div class="card-body">
                  <h4 class="card-title"> {this.state.content.name} </h4>
                  <p class="card-text"> {this.state.content.classteacher.name}</p>
                </div>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{this.state.content.subjects.length} subject{ this.state.content.subjects.length > 1 ? 's' : ''} </li>
                  <li class="list-group-item">{this.state.content.students.length} student{ this.state.content.students.length > 1 ? 's' : ''} </li>
                </ul>
              </div>
        </div>)}

  return(
    <div>
      {displayMessage}
    </div>
)}}

export default ContentItem;
