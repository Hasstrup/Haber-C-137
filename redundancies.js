//unneccesary code that I may use if things go left

//editing logic 1 [server folder]

//editing a student from a class
// router.get('/classes/:id/students/:student_id', function(req, res){
//     Student.findById(req.params.student_id, function(err, student){
//       if(err) {
//         console.log('the problem is with me 5')
//         console.log(err)
//       } else {
//           res.json({student: student, class_id: req.params.id })
//   }
// })
// })

//gets a particular student in a class
// router.get('/classes/:id/students/:student_id', function(req, res){
//     Student.findById(req.params.student_id, function(err, student){
//       if(err) {
//         console.log('the problem is with me 2')
//         console.log(err)
//       } else {
//           res.json({student: student, class_id: req.params.id })
//   }
// })
// })
// else if(this.state.isEdit == false && this.state.selector == 'teacher'){
//   return(
//     <div>
//     <form onSubmit={this.handleSubmitS}>
//       <input/>
//       <input/>
//       <input/>
//       <select>
//         {this.state.classes.forEach(function(classs){
//           <option> {classs.name} </option>
//         })}
//       </select>
//     </form>
//   </div>
//#f8f9fa
//   )
//
// }
<Route  path = '/student/:id'  render={props => <DetailItem selector='student' {...props} />} />
<Route  path = '/class/:id'  render={props => <DetailItem selector='class' {...props} />} />
<Route  path = '/teacher/:id'  render={props => <DetailItem selector='teacher' {...props} />} />
if(this.state.selector === 'students'){
var requestUrl = `http://localhost:4000/api/students/${this.state.id}`
axios.request({ method: 'put', url: requestUrl, data: this.state.newStudent })
.then(response => {
  this.props.history.push('/')
})}

 else if(this.state.selector === 'teacher'){
teachers.editTeacher(this.state.id, this.state.newTeacher, function(err, response){
  if(err){
    console.log(err);
  }
  else {
  this.props.history.push('/')
}
})}
else {
  classes.editClass(this.state.id, this.state.newClass, function(err, response){
    if(err){
      console.log(err) }
    else {
    this.props.history.push('/')
  }})}

  handleSubmitS = (e) => {
    e.preventDefault();
    const name = e.target.name
    const value = e.target.value
    let newContent;

    if(this.state.selector === 'teacher') {
     newContent = {
      firstname1: this.refs.firstname.value,
      lastname2: this.refs.lastname.value,
      image3: this.refs.image.value,
      subject: this.refs.subject.value
    }}
     else if(this.state.selector === 'student') {
      newContent = {
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      image: this.refs.image.value,
      class:  null //this.refs.class.value
    }} else {
      newContent = {
      name: this.refs.name.value,
      subjects: this.refs.subjects.value,
      classteacher: this.refs.subjects.value,
      students: this.refs.subjects.value
    }}

    if(this.state.selector === 'student') {
      students.postNewStudent(newContent, function(err, response){
        if(err){
          console.log(err)
        } else {
          this.props.history.push('/')
        }})}
        else if(this.state.selector === 'teacher'){

        teachers.postNewTeacher(newContent, function(err, response){
          if(err){
            console.log(err)
          } else {
            this.props.history.push('/')
          }})}
      else {
          classes.postNewClass(newContent, function(err, response){
          if(err){
            console.log(err)
          } else {
            this.props.history.push('/')
          }})}}


          handleInputChange = (e) => {
            e.preventDefault();
            const name = e.target.name
            const value = e.target.value
          if(this.state.selector === '') {
          this.setState({
           newStudent: {[name]: value} })
          } else if (this.state.selector === 'teacher'){
            this.setState({
              newTeacher: ({ [name]: value })
            })
          } else {
            this.setState({
              newClass: ({ [name]: value })
            })
          }}



          <div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='container'>
                  <h2> classes </h2>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='container'>
                  <h2> Teachers </h2>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='container'>
                  <h2> Students </h2>
                </div>
              </div>
              </div>
            </div>

            onClick={() => that.onChangeSub(subject._id)

              Link to={`/edit${this.state.selector}/${this.props.content._id}`}>  Edit Student Info </Link>

              {this.state.classteacher.subject.id}
              {this.state.classs.classteacher.name}
              {this.props.classteacher.subject.id}
              {this.props.classs.students.length} student{this.props.classs.students.length > 1 ? 's' : ''}

          //http://localhost:3000/viewclasses/
          {this.props.content.classteacher.name}


          if(this.props.content.isClassTeacher == true && this.props.content.isClassTeacher === 'true') {

            studenttts = this.props.classmates.map((student, index) => {
              <div>
            <div className='row'>
          <div className='col-md-3'>
          <div id='card-content'>
          <div class="card" style={{width: 10 + 'em'}} id='cardi' onClick={() => that.onChangeStu(student._id)}>
            <img class="card-img-top" src={student.image} alt={student.firstname}/>
              <div class="card-body">
                <h4 class="card-title"> {student.firstname} {student.lastname}</h4>

                </div>
            </div>
            </div>
            </div>
          </div>
          </div> })

            secondpart = (
              <div>
              <div className='col-md-4'>
                <div className='card' style={{width: 13 + 'em'}}>
                  <div className='card-body'>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"> <p> Currently teaches </p>   </li>
                      <li class="list-group-item"> <strong> {this.props.subject.name} </strong> </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div>
                {studenttts}
              </div>
            </div>

          )} else { null}
          if(this.props.content.isClassTeacher == true && this.props.content.isClassTeacher === 'true') {
          classgrid = (
                  <div>
                  <div className='row'>
                    <div className = 'col-md-8'>
                      <div className="card" style={{width: 13 + 'em'}}>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"> <p> {'class'} teacher at </p>   </li>
                          <li class="list-group-item"> <strong> {this.props.classs.name} </strong> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    {secondpart}
                  </div>
                </div>

              )} else {
                return null



                <div className='row'>
                  <div className='col-md-4' id='landing-text' >

                      <div >
                        <p id='landing-text10'>
                        Bacon ipsum dolor amet shoulder tenderloin frankfurter pork loin kevin
                        prosciutto ground round brisket {'ribeye. Jowl'} pork pork loin pastrami {'tri-tip'} filet
                          mignon chicken {'hamburger. Chicken'}ham pork chop, fatback cow kielbasa cupim spare ribs
                          beef ribs hamburger tri-tip t-bone swine.
                        </p>

                    </div>
                  </div>
                  <h1> view {this.props.selector}s </h1>
                  <p> Find and explore as many {this.props.selector}s as you like <br/>
                   You can make changes to each one {'if'} you want to </p>
                 <ul>
                 <li>
                  <Link to= {`/view${this.props.selector}`}> view {this.props.selector}s </Link>
                  <div className='container'>
                    <h1> create {'new'} {this.state.selector}</h1>
                    <p> Find and explore as many {this.state.selector}s as you like <br/>
                     You can make changes to each one {'if'} you want to </p>
                   <ul>
                   <li > <Link to= {`/new${this.state.selector}`}> Add {this.state.selector}</Link> </li>
                   </ul>
                </div>
                <div className='row' id='landing-row'>

                  <div className='col-md-12'>
                    <div className='jumbotron' id='land-jumbo'>
                    <h1> {this.props.selector}{'s'} activity page </h1>
                    <h2>    What would you like to {'do?'} </h2>
                  </div>

                  </div>
                  </div>

                  <div className='col-md-4'>
                    <div className='container'>
                      <div id='landing-text'>
                        <p>
                        Bacon ipsum dolor amet shoulder tenderloin frankfurter pork loin kevin
                        prosciutto ground round brisket {'ribeye. Jowl'} pork pork loin pastrami  {'tri-tip'} filet
                          mignon chicken {'hamburger. Chicken'}ham pork chop, fatback cow kielbasa cupim spare ribs
                          beef ribs hamburger tri-tip t-bone swine.
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg id="i-activity" viewBox="0 0 32 32" width="32" height="32" fill="none"
                    stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M4 16 L11 16 14 29 18 3 21 16 28 16" />

                  <div className='col-md-4'>
                    <div className='container'>
                      <div id='landing-text'>
                        <p>
                        Bacon ipsum dolor amet shoulder tenderloin frankfurter pork loin kevin
                        prosciutto ground round brisket {'ribeye. Jowl'} pork pork loin pastrami {'tri-tip'} filet
                          mignon chicken {'hamburger. Chicken'}ham pork chop, fatback cow kielbasa cupim spare ribs
                          beef ribs hamburger tri-tip t-bone swine.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
