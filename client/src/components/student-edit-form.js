import React, {Component} from 'react'
import { Router, withRouter , Redirect } from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select'

var classes = require('../api/class-api')
var students = require('../api/students-api')
var teachers = require('../api/teacher-api')

class EditOrNewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: '',
      selector: this.props.selector,
      id: '' ,
      checked: 'true',
      contents: [],
      subjects: [],
      ssstudents: [],
      sssubjects: [],
      item: {},
      redirect: '',
      students: [],
      value: '',
      selectedsubjects: [],
      selectedstudents: [],
      errormessage: ''
    }

    }

  componentWillMount() {
    let value;
    if(this.props.isEdit === 'hasnot'){
      value = 'no'}
       else { value = 'yes'}
    this.setState({ isEdit: value, id: this.props.id })}

componentDidMount()
    { if(this.state.selector === 'student'){

      if (this.props.isEdit === 'has') {
        this.setState({ id: this.props.id })
      var requestUrl = `http://localhost:4000/api/students/${this.state.id}/edit`
      axios.get(requestUrl).then(response => {
        this.setState({ item: response.data.student, contents: response.data.classes }) })}

      else {
       var requestUrl = 'http://localhost:4000/api/registerstudents'
       axios.get(requestUrl).then(response => {
         this.setState({contents: response.data.classes})
       })}}

    else if(this.state.selector === 'teacher') {
      if (this.state.isEdit === 'yes') {
        this.setState({ id: this.props.id })
        var requestUrl = `http://localhost:4000/api/teachers/${this.state.id}/edit`
        axios.get(requestUrl).then(response => {
          this.setState({ item: response.data.teacher, contents: response.data.subjects })
        })}
        else {
        var requestUrl = 'http://localhost:4000/api/registerteachers'
          axios.get(requestUrl).then(response =>{
            this.setState({contents: response.data.subjects})
            })}}

       else if(this.state.selector === 'class') {
        if(this.state.isEdit === 'yes'){
          this.setState({ id: this.props.id })
            var requestUrl = `http://localhost:4000/api/classes/${this.state.id}/edit`
            axios.get(requestUrl).then(response => {
              this.setState({ item: response.data.classs, contents: response.data.teachers })})}
          else {
              var requestUrl = 'http://localhost:4000/api/registerclasses'
              axios.get(requestUrl).then(response => {
            this.setState({contents: response.data.teachers,
              subjects: response.data.subjects,
              students: response.data.students }) })}}
              else { null }

            }


            onChangeStu = (data, studentname) =>  {
            this.setState({ checked: 'true' })
            var newStudents = this.state.ssstudents
            var studentnames = this.state.selectedstudents
            let index;
            let first;
            let second
            if(this.state.checked === 'true'){

              index = newStudents.indexOf(data)
              if (newStudents.indexOf(data) === -1 ) {
                newStudents.push(data)
              } else {
                newStudents.splice(index, 1) }
              this.setState({ ssstudents: newStudents})

              if(studentnames.indexOf(studentname) === -1) {
                studentnames.push(studentname)
              } else {
                 second = studentnames.indexOf(studentname)
                studentnames.splice(second, 1)
              }
               this.setState({ selectedstudents: studentnames})
            }
              else {
                 newStudents.splice(index, 1)
                 studentnames.splice(second, 1) }
                }







onChangeSub = (data, subjectname) =>  {
this.setState({ checked: 'true' })
var newSubjects = this.state.sssubjects
var subjectnames = this.state.selectedsubjects
let index;
let first;
let second
if(this.state.checked === 'true'){

  index = newSubjects.indexOf(data)
  if (newSubjects.indexOf(data) === -1 ) {
    newSubjects.push(data)
  } else {
    newSubjects.splice(index, 1) }
  this.setState({ sssubjects: newSubjects})

  if(subjectnames.indexOf(subjectname) === -1) {
    subjectnames.push(subjectname)
  } else {
     second = subjectnames.indexOf(subjectname)
    subjectnames.splice(second, 1)
  }
   this.setState({ selectedsubjects: subjectnames})
}
  else {
     newSubjects.splice(index, 1)
     subjectnames.splice(second, 1) }
    }








handleChange = (event) => {
event.preventDefault();
this.setState({ value: event.target.value })}



handleSubmit = (e) => {
  e.preventDefault();

let updatedContent;

switch(this.state.selector) {
    case 'teacher':
    updatedContent = {
     firstname: this.refs.firstname.value !== '' ? this.refs.firstname.value : this.refs.firstname.defaultValue,
     lastname: this.refs.lastname.value !== '' ? this.refs.lastname.value : this.refs.lastname.defaultValue,
     image: this.refs.image.value !== '' ? this.refs.image.value : this.refs.image.defaultValue,
     subject: this.state.value}
   break;

   case 'student':
   updatedContent = {
     firstname: this.refs.firstname.value !== '' ? this.refs.firstname.value : this.refs.firstname.defaultValue,
     lastname: this.refs.lastname.value !== '' ? this.refs.lastname.value : this.refs.lastname.defaultValue,
     image: this.refs.image.value !== '' ? this.refs.image.value : this.refs.image.defaultValue,
     age: this.refs.age.value !== '' ? this.refs.age.value : this.refs.age.defaultValue,
     Class:  this.state.value }
  break;

  case 'class':
  updatedContent = {
    name: this.refs.name.value !== '' ? this.refs.name.value : this.refs.name.defaultValue,
    subjects: this.state.sssubjects,
    classteacher: this.state.value,
    students: this.state.ssstudents }
  break;

  default:
    updatedContent = {}
  break;
}

switch(this.state.isEdit) {

case "yes":
    var requestUrl = `http://localhost:4000/api/${this.state.selector}s/${this.state.id}`
    axios.request({
      method: 'put',
      url:  requestUrl,
      data: updatedContent
    }).then(response => {
    this.props.history.push(`/view${this.state.selector}`);
  }).catch(err => {
      this.setState({ errormessage: 'something went wrong, please try that again & fill up every input box'})
  })
    break;

case 'no':
      var requestUrl = `http://localhost:4000/api/${this.state.selector}s`
      axios.request({ method: 'post', url: requestUrl, data: updatedContent })
        .then(response => {
          this.props.history.push(`/view${this.state.selector}`)})
          .catch(err => {
            this.setState({ errormessage: 'something went wrong, please try that again & fill up every input box'})
            
          })

  break;

  default:
    console.log('something is wrong fella')
}}

render() {

          let firstpart1;
          let firstpart2;
          let form1;
          let form2;
          let secondpart1;
          let secondpart2;
          var that = this
          let contentname;

        const stname = this.state.selector === 'students' ? 'class' : 'subject'

        const contentss = this.state.contents.map((content, index) => {
            return(
          <option key={index} value={content._id} refs={stname}> {content.name} </option>
          )})

          const contents2 = this.state.contents.map((content, index) => {
              return(
            <option key={index} value={content._id} > {content.firstname} {content.lastname} </option>
            )})

          const studentss = this.state.students.map((student, index) => {
            return(
              <div className='col-md-3'>
              <div id='card-content'>
              <div class="card" style={{width: 10 + 'em'}} id='cardi' onClick={() => that.onChangeStu(student._id, student.lastname)}>
                <img class="card-img-top" src={student.image} alt={student.firstname}/>
                  <div class="card-body">
                    <h6 class="card-title"> {student.firstname} {student.lastname}</h6>

                    </div>
                </div>
                </div>
                </div>
            )})
        const subjectss = this.state.subjects.map((subject, index) => {
          return(

            <div className='col-sm-3'>
              <div id='card-content'>
              <div className="card" style={{width: 10 + 'em'}} id='cardd' onClick={() => that.onChangeSub(subject._id, subject.name)}>
      <div className="card-body">
        <h4 className="card-title"> {subject.name}  </h4>
        </div>
      </div>
      </div>
      </div> )
        })

        const selectedd = this.state.selectedsubjects.map((selectedsubject, index) => {
          return (
            <span>  {selectedsubject} </span>
          )
        })

        const selectedd2 = this.state.selectedstudents.map((selectedstudent, index) => {
          return (
            <span>  {selectedstudent} </span>
          )
        })

        if(this.state.isEdit === 'no') {
          contentname = this.state.selector
        } else {
          if(this.state.selector === 'student' || this.state.selector === 'teacher'){
            contentname = this.state.item.firstname + ' ' +  this.state.item.lastname
          } else {
            contentname= this.state.item.name
            }}



   if(this.state.selector === 'student' || this.state.selector === 'teacher') {

        firstpart1 = (
          <div>
          <div className='form-row'>
             <div className="form-group col-md-6">
               <label> Firstname </label>
               <input name='firstname' type='text' className='form-control' ref='firstname' placeholder='Thelma'/>
             </div>

             <div className="form-group col-md-6">
               <label> Lastname </label>
               <input name='lastname' className='form-control' type='text' ref='lastname' placeholder='Ezekiel'/>
             </div>
            </div>

              <div className='form-group'>
                <label> Image Url </label>
                <input name='image' type='text' className='form-control'  ref='image' placeholder='Please input a valid url'/>
              </div>
            </div>

      )} else{
        firstpart1 = (
          <div>
            <div className='form-group'>
              <input name='name' className='form-control' type='text' ref='name' placeholder='name'/>
            </div>

          </div>

          )} //this is when this.state.selector == class

       if(this.state.selector === 'student'){
        secondpart1= (
          <div className='form-group'>
          <input className='form-control' name='age' ref='age' type='number' placeholder='Age'/>
          </div>
          )
      } else { null }
        if(this.state.selector === 'teacher' || this.state.selector === 'student'){
          form1 = (
            <div className='form-group'>
              <label> {this.state.selector === 'teacher' ? 'Subject' : 'Class'}</label>
              <select className="custom-select form-control" id='form1' ref={stname} value={this.state.value} onChange={this.handleChange}>
                {contentss}
              </select>
            </div>
         )}
        else {
        form1 = (
          <div id='form12'>
            <div className='form-group'>
              <label> Class Teacher </label>
              <select className="custom-select form-control" ref='classteacher' name='classteacher' value={this.state.value} onChange={this.handleChange} >
                  {contents2}
                  </select>
            </div>
            <hr/>
            <div className='container-fluid' id='subjects-container'>
              <h2> Choose Subjects </h2>
              <div className='row' id='subjects-row'>
                {subjectss}
              </div>
              <p> {selectedd} </p>
            </div>
              <hr/>
                <div className='container-fluid' id='subjects-container'>
                  <h2> Choose Students </h2>
                  <div className='row' id='subjects-row'>
                    {studentss}
                  </div>
                  <p> {selectedd2}</p>
                </div>

              </div>
              )}

  if(this.state.selector === 'teacher' || this.state.selector === 'student'){
    firstpart2 = (
       <div id='firstpar2'>
         <div className='form row'>
           <div className='form-group col-md-6'>
             <label> Firstname </label>
            <input name='firstname' className='form-control' ref='firstname' defaultValue={this.state.item.firstname} type='text' placeholder={this.state.item.firstname}/>
           </div>
           <div className='form-group col-md-6'>
             <label> Lastname </label>
             <input name='lastname' className='form-control' ref='lastname' defaultValue={this.state.item.lastname} type='text' placeholder={this.state.item.lastname} />
           </div>
             </div>
             <div className='form-group'>
               <label> Image url </label>
                <input className='form-control'name='image' ref='image' className='form-control' defaultValue={this.state.item.image} type='text' placeholder={this.state.item.image}/>
             </div>
           </div>)}

           else {
          firstpart2 = (
            <div className='form-group'>
              <label> Class Name </label>
                <input className='form-control' name='name' ref='name' defaultValue={this.state.item.name} type='text' placeholder={this.state.item.age}/>
            </div>
         )
        }
         if(this.state.selector === 'student'){
         secondpart2 = (
           <div className='form-group'>
             <label> Age </label>
               <input className='form-control' name='age' ref='age' defaultValue={this.state.item.age} type='number'/>
           </div>

        )} else { null }
        if(this.state.selector === 'student' || this.state.selector === 'teacher'){
          form2 = (
            <div className='form-group'>
              <label> {this.state.selector === 'teacher' ? 'Subject' : 'Class'}</label>
              <select className="custom-select form-control" name='classs' ref='class' defaultValue={this.state.value} onChange={this.handleChange}>
                {contentss}
              </select>
             </div>
           )
        } else {
          form2 = (
            <div className='form-group'>
              <label> Class Teacher </label>
          <select className="custom-select form-control" name='classteacher' ref='classteacher' value={this.state.value} onChange={this.handleChange}>
            {contents2}
            </select>
        </div>
        )}

        return(
          <div>


            <div className='row'>
              <div className='col-md-12' >
              <div className='container' id='funny-guy' >
                <svg id="i-compose" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
                </svg>
                <h5> <strong>{this.state.isEdit === 'yes' ? 'Edit' : 'Create'} {contentname}</strong> </h5>
                <p> Please remember to {this.state.isEdit === 'yes' ? 'set the item in the dropdown again' : 'include a valid image url'}</p>
                <p> <span id='error'> {this.state.errormessage} </span> </p>
            </div>
              </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
              <div className='container' id='form-container'>
            <form onSubmit={this.handleSubmit}>
              {this.state.isEdit === 'yes' ? firstpart2 : firstpart1}
              {this.state.isEdit === 'yes' ? secondpart2 : secondpart1}
              {this.state.isEdit === 'yes' ? form2 : form1 }
              <input type='submit' className='btn btn-primary'/>
                   </form>
                   </div>
                   </div>
          </div>
          </div>
          )
          if (this.state.redirect === 'true'){
            return(
            <Redirect to={`/view${this.state.selector}`} /> )
          }

        }

        }

export default EditOrNewForm;
