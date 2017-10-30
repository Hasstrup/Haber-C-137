import SpecificItem from './specific-item'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
var getclass = require('../api/class-api')
var students = require('../api/students-api')
var teachers = require('../api/teacher-api')


class DetailItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,//thatever params from the route
      selector: this.props.selector, //determines whether class or not
      content: {}, //could be student / class or teacher
      firstarray: [],
      secondarray: [],
      thirdarray: [],
      secondobject: {},
      thirdobject: {}
    }


  }

    componentDidMount() {

      if (this.state.selector === 'class') {
        var requestUrl = `http://localhost:4000/api/classes/${this.state.id}`
        axios.get(requestUrl).then(response => {
          this.setState({ content: response.data.classs, firstarray: response.data.s_tudents, secondarray: response.data.s_ubjects, secondobject: response.data.classteacher })
        })}

        else if(this.state.selector === 'teacher') {
          var requestUrl = `http://localhost:4000/api/teachers/${this.state.id}`
          axios.get(requestUrl).then(response => {
            this.setState({ content: response.data.teacher, secondobject: response.data.subject, firstarray: response.data.studentArray, thirdobject: response.data.classe })})}

        else if(this.state.selector === 'student') {
          var requestUrl = `http://localhost:4000/api/students/${this.state.id}`
          axios.get(requestUrl).then(response => {
            this.setState({ content: response.data.student, secondobject:response.data.sclasss, firstarray: response.data.classmates, secondarray: response.data.subjects, thirdobject: response.data.classteacher })
          })}
        else {
          this.setState({content: null, id: null })
        }}

      render() {
              let specificitem;

            switch(this.state.selector){

            case 'class':
                specificitem = (
                  <SpecificItem history={this.props.history} selector={this.state.selector} content={this.state.content} id={this.state.id} classmates={this.state.firstarray} subjects={this.state.secondarray} classteacher={this.state.secondobject}/>
                )
            break;

            case 'student':
                specificitem = (
                  <SpecificItem history={this.props.history} selector={this.state.selector} content={this.state.content} id={this.state.id} classmates={this.state.firstarray} subjects={this.state.secondarray} classs={this.state.secondobject} classteacher={this.state.thirdobject}/>
                )
            break;

            case 'teacher':
                  specificitem = (
                    <SpecificItem history={this.props.history} selector={this.state.selector} content={this.state.content} id={this.state.id} subject={this.state.secondobject} classmates={this.state.firstarray} classs={this.state.thirdobject} />
                  )
            break;

            default:
              specificitem= (
                <h1> Something went wrong buddy </h1>
              )}

        return(
            <div id='Seeing-the-deets'>
              {specificitem}
            </div> )
          }
        }

        export default DetailItem
