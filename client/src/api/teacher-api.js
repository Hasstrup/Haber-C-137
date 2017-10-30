var axios = require('axios')

module.exports = {

  //getting all teachers
  getAllTeachers: function () {
   var requestUrl = 'http://localhost:4000/api/teachers'
   axios.get(requestUrl).then(function(response){
     if(response.data.err) {
       console.log('I think we have a problem with me 1')
     } else {
       return response.data.teachers
     }
   })
  },

  getParticularTeacher: function(id)  {
   var requestUrl = `http://localhost:4000/api/teachers/${id}`
   axios.get(requestUrl).then(function(response){
     if(response.data.err){
       console.log(response.data.err)
     } else {
       return response.data
     }
   })
 },


 //deleting routes
 deleteTeacher: function (id) {
  var requestUrl = `http://localhost:4000/api/teachers/${id}`
  axios.delete(requestUrl).then(function(response, next){
    if(response.data.err){
      console.log(response.data.err)
    } else {
      return response.data;
    }
  })},

//creating  routes
  getTeacherForm: function() {
   var requestUrl = 'http://localhost:4000/api/registerteachers'
   axios.get(requestUrl).then(function(response){
     if(response.data.err){
       console.log(response.data.err)
     } else {
       return response.data
     }
   })},

   postNewTeacher: function(teacherss) {
    var requestUrl = 'http://localhost:4000/api/teachers'
    axios.request({
                    method: 'post',
                    url: requestUrl,
                    data: teacherss } )
      .then(function(response, next){
      if(response.data.err){
        console.log(response.data.err)
      } else {
        return response.data }
    })},

    //editing routes
    teacherToEdit: function(id) {
     var requestUrl = `http://localhost:4000/api/teachers/${id}/edit`
     axios.get(requestUrl).then(function(response, next){
       if(response.data.err){
         console.log(response.data.err)
       } else {
         return response.data;
       }
     })},

     editTeacher: function (id, updatedteacher)  {
        var requestUrl = `http://localhost:4000/api/teachers/${id}`
        axios.request({
          method: 'put',
          url:  requestUrl,
          data: updatedteacher
        }).then(response => {
          return response.data
        }).catch(err => console.log(err))
    }}
