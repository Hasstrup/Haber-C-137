var axios = require('axios')

module.exports = {


//getting all the students in the public directory
   getAllStudents: function() {
    var requestUrl = 'http://localhost:4000/api/students'
    axios.get(requestUrl).then(function(response){
      if(response.data.err) {
        console.log('I think we have a problem with me 1')
      } else {
        return response.data.students;
      }
    })
},
//getting a particular student from the directory
 getParticularStudent: function (id){
  var requestUrl = `http://localhost:4000/api/students/${id}`
  axios.get(requestUrl).then(function(response){
    if(response.data.err){
      console.log(response.data.err)
    } else {
      return response.data
    }
  })},

 deleteStudent: function (id) {
  var requestUrl = `http://localhost:4000/api/students/${id}`
  axios.delete(requestUrl).then(function(response, next){
    if(response.data.err){
      console.log(response.data.err)
    } else {
      return response.data;
    }
  })},

  //getting the form when creating the + including the list of classes
   getStudentForm: function()   {
    var requestUrl = 'http://localhost:4000/api/registerstudents'
    axios.get(requestUrl).then(function(response){
      if(response.data.err){
        console.log(response.data.err)
      } else {
        return response.data
      }
    })},

    //getting the post request right!
     postNewStudent: function (newstudent){
      var requestUrl = 'http://localhost:4000/api/students'
      axios.request({
                      method: 'post',
                      url: requestUrl,
                      data: newstudent })
        .then(function(response, next){
        if(response.data.err){
          console.log(response.data.err)
        } else {
          return response.data;
        }
      })},

      //editing api
       studentToEdit: function (id)  {
        var requestUrl = `http://localhost:4000/api/students/${id}/edit`
        axios.get(requestUrl).then(function(response, next){
          if(response.data.err){
            console.log(response.data.err)
          } else {
            return response.data;
          }
        })},

        //axios.put
       editStudent: function (id, updatedstudent)  {
          var requestUrl = `http://localhost:4000/api/students/${id}`
          axios.request({
            method: 'put',
            url:  requestUrl,
            data: updatedstudent
          }).then(response => {
              return response.data
          }).catch(err => console.log(err))
      }

}
