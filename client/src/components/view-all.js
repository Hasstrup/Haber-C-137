import ContentItem from './content-item'
import React, { Component } from 'react';
import axios from 'axios'
var getclass = require('../api/class-api')
var students = require('../api/students-api')
var teachers = require('../api/teacher-api')



class ViewAll extends Component {
        constructor(props) {
        super(props);
        this.state = {selector: '', contents: []}
      }

  componentWillMount() {
    this.setState({ selector: this.props.selector })}

    componentDidMount(){

    if (this.state.selector === 'class') {

      var requestUrl = 'http://localhost:4000/api/classes'
      axios.get(requestUrl).then(response => {
        this.setState({ contents: response.data.classes, teachers:response.data.teachers })})}

      else if (this.state.selector === 'student'){
        var requestUrl = 'http://localhost:4000/api/students'
        axios.get(requestUrl).then(response => {
          this.setState({ contents: response.data.students })})}

      else if (this.state.selector === 'teacher'){
        var requestUrl = 'http://localhost:4000/api/teachers'
        axios.get(requestUrl).then(response => {
          this.setState({ contents: response.data.teachers })
        })}

      else {null}}

  render() {
    const contentss = this.state.contents.map((content, index) => {
  return (<ContentItem  key={index} content={content} selector={this.state.selector} history={this.props.history}/>)})

  const studentgrid = (
        <div className='card-deck'>
          <div className='container'>
          <div className='row'>
            {contentss}
          </div>
          </div>
        </div>
      )

  const classgrid = (

      <div className='container'>
        <div className='row'>
          {contentss}
        </div>
        </div>

  )

    return(
        <div>

          <div className='container' id='container-view' >
            <div id='tiny-box1'>
                <h6 id='lad-text'> {this.state.contents.length} </h6>
            </div>
            <div id='tiny-box2'>
                <h6 id='lad-text'> {this.state.selector}{this.state.selector === 'class' ? 'es' : 's'} currently </h6>
            </div>
            <div id='tiny-box3'>
              <a href={`/new${this.state.selector}`}>  <svg id="i-tag" viewBox="0 0 32 32" width="19" height="19" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <circle cx="24" cy="8" r="2" />
    <path d="M2 18 L18 2 30 2 30 14 14 30 Z" />
</svg>  create {'new'} {this.state.selector} </a>
            </div>

          </div>

          <div className='container-fluid'>
          {this.state.selector === 'class' ? classgrid : studentgrid}
        </div>
      </div>
      )}
  }

export default ViewAll;
