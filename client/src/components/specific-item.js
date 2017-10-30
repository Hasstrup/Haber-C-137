import FirstItem from './detail-first-grid'
import { Link} from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router';
import Form from './student-form'
import React, { Component } from 'react'
var cl_ass = require('../api/class-api')
var students = require('../api/students-api')
var teachers = require('../api/teacher-api')



class SpecificItem extends Component{
     constructor(props) {
       super(props)
       this.state= {
         selector: this.props.selector,
         content:{},
         responseMessage: '',
         students: [],
         subjects: [],
         subject: {},
         classmates: [],
         classs: {},
         classteacher: {}
         
       }
       this.handleDelete = this.handleDelete.bind(this);
       this.onClickStu = this.onClickStu.bind(this);
      }




 componentWillMount(){
   this.setState({ content: this.props.content })
   if(this.props.selector === 'student') {
     this.setState({
       students: this.props.classmates, classteacher: this.props.classteacher, classs: this.props.classs, subjects: this.props.subjects
     })
   }
    else if(this.props.selector === 'teacher') {
       this.setState ({
         students: this.props.students, subject: this.props.subject, classs: this.props.classs})
       }
       else {
           this.setState ({
             students: this.props.classmates, subjects: this.props.subjects, classteacher: this.props.classteacher
           })}

 }


  handleDelete = () => {

         var requestUrl = `http://localhost:4000/api/${this.props.selector}s/${this.props.content._id}`
         axios.delete(requestUrl).then(response => {
           this.props.history.push(`/view${this.props.selector}`)
         }
         )}

onClickStu = (id) => {
  this.props.history.push(`/student/${id}`)
}




    render() {
        var that = this
        let studentgrid;
        let classgrid;
        let classteachergrid;
        let subjectgrid;



        if(this.props.selector === 'student' || this.props.selector === 'class') {

         studentgrid = this.props.classmates.map((student, index) => {
            return(
            <div className='col-md-3'>
            <div id='card-content'>
            <div class="card" style={{width: 10 + 'em'}} id='cardi' onClick={() => this.onClickStu(student._id)}>
              <img class="card-img-top" src={student.image} alt={student.firstname}/>
                <div class="card-body">
                  <h6 class="card-title"> {student.firstname} {student.lastname}</h6>

                  </div>
              </div>
              </div>
            </div>)
          })

       subjectgrid = this.props.subjects.map((subject, index) => {
            return(

              <div className='col-sm-3'>
                <div id='card-content'>
                <div className="card" style={{width: 10 + 'em'}} id='cardd' >
        <div className="card-body">
          <h4 className="card-title"> {subject.name}  </h4>
          </div>
        </div>
        </div>
        </div>

       )
          })

     classteachergrid = (
            <div className='row'>
              <div className='col-md-4'>
                <div className='container-fluid'>
                <img src= {this.props.classteacher.image} alt= {this.props.classteacher.image} className="img-thumbnail" style={{ height: 'auto' }}/>
                </div>
              </div>
              <div className='col-md-2'>
                <div className='container'> </div>
              </div>

              <div className='col-md-6'>
                <div className='container-fluid'>
                  <p> Lastname </p>
                  <h4> {this.props.classteacher.lastname} </h4>
                  <hr/>
                  <p> FirstName </p>
                  <h6>   {this.props.classteacher.firstname} </h6>
                  <hr/>
                    <p> Subject </p>
                    <h6>   </h6>
                  </div>
              </div>
              </div> )

  classgrid = (
          <div className='row'>
            <div className = 'col-md-8'>
              <div className="card" style={{width: 13 + 'em'}}>

                  <div className="card-body">
                    <h6 className="card-title">{this.props.selector === 'class' ? this.props.content.name : this.props.classs.name}</h6>
                    <p className="card-text"></p>
                </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card' style={{width: 13 + 'em'}}>
              <div className='card-body'>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"> {this.props.subjects.length} subject{this.props.subjects.length > 1 ? 's' : ''}  </li>
                  <li class="list-group-item"> {this.props.classmates.length} student{this.props.classmates.length > 1 ? 's' : ''} </li>

                </ul>
              </div>
            </div>
          </div>
          </div>
 )}

  else {

    switch(this.props.content.isClassTeacher) {

      case 'true':

      studentgrid = this.props.classmates.map((student, index) => {
        return(

          <div className='col-md-3'>
            <div id='card-content'>
              <div class="card" style={{width: 10 + 'em'}} id='cardi' onClick={() => this.onClickStu(student._id)}>
                <img class="card-img-top" src={student.image} alt={student.firstname}/>
                <div class="card-body">
                  <h6 class="card-title"> {student.firstname} {student.lastname}</h6>

                </div>
              </div>
            </div>
            </div>
           )})

          classgrid = (
                  <div className='row'>
                    <div className = 'col-md-8'>
                      <div className="card" style={{width: 13 + 'em'}}>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item"> Classteacher at </li>
                            <li class="list-group-item"> <strong> {this.props.classs.name} </strong></li>
                          </ul>
                          <div className="card-body">
                        </div>
                    </div>
                  </div>

                  <div className='col-md-4'>
                    <div className='card' style={{width: 13 + 'em'}}>
                      <div className='card-body'>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"> Currently teaches  </li>
                          <li class="list-group-item"> <strong> {this.props.subject.name} </strong></li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div> )

              break;

              case 'false':
                studentgrid = null;
                classgrid = null;
              break;

              default:
                  studentgrid = null;
                  classgrid = null

              }
}



      let userMessage;

      switch (this.props.selector) {
        case 'student':
          userMessage =(
            <div className='container'>
            <FirstItem selector={this.state.selector} content={this.props.content} />
            <hr/>
            {classgrid}
            <hr/>
            {classteachergrid}
            <hr/>
            <h6> Subjects currently offering </h6>
              <div className='row'>
                 {subjectgrid}
              </div>
            <h6> Classmates </h6>
            <hr/>
            <div className='row'>
            {studentgrid}
            </div>
            </div>)
          break

          case 'teacher':

            userMessage=(
              <div className='container'>
                <FirstItem selector={this.state.selector} content={this.props.content} subject={this.props.subject} />
                <hr/>
                  {classgrid}
                <hr/>
                <div className='row'>
                {studentgrid}
                </div>

              </div>
            )
          break;

        case 'class':

          userMessage = (
            <div className='container'>
              <FirstItem selector={this.state.selector} content={this.props.content} classteacher={this.props.classteacher} />
              <hr/>
              {classteachergrid}
              <hr/>
              <h5> Class subjects </h5>
              <div className='row'>
                 {subjectgrid}
              </div>
              <hr/>
              <h5> Class students </h5>
              <div className='row'>
                {studentgrid}
              </div>
              </div>
            )
            break;

            default:
              userMessage=(
                <h2> Something went wrong buddy </h2>
              )
          }

        return(
          <div>


            <div className='container' id='container-ting'>
              {userMessage}
            </div>
            <div style={{ float: 'right' }} id='second-container'>
              <a  href={`/edit${this.props.selector}/${this.props.content._id}`} role='button' class="btn btn-outline-dark"> Make Changes to {this.props.selector === 'class' ? this.props.content.name : this.props.content.firstname } </a>
              <a class="btn btn-outline-danger" role='button' onClick={() =>this.handleDelete() }> Delete {this.props.selector === 'class' ? this.props.content.name : this.props.content.firstname } </a>
            </div>
          </div> )





        }
      }

    export default SpecificItem ;
