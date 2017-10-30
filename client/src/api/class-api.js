var axios = require('axios')

module.exports = {

 //get all classes
 getAllClasses: function() {
  var requestUrl = 'http://localhost:4000/api/classes'
  axios.get(requestUrl).then(function(response){
    if(response.data.err) {
      console.log('I think we have a problem with me 1')
    } else {
      return response.data
    }
  })},

  // get particular class
  getParticularClass: function (id) {
   var requestUrl = `http://localhost:4000/api/classes/${id}`
   axios.get(requestUrl).then(function(response){
     if(response.data.err){
       console.log(response.data.err)
     } else {
       return response.data
     }
   })
 },

 // deleting
 deleteClass: function (id) {
  var requestUrl = `http://localhost:4000/api/classes/${id}`
  axios.delete(requestUrl).then(function(response, next){
    if(response.data.err){
      console.log(response.data.err)
    } else {
      return response.data 
    }
  })},


  //new class

  getClassForm: function () {
   var requestUrl = 'http://localhost:4000/api/registclasses'
   axios.get(requestUrl).then(function(res){
     if(res.data.err){
       console.log(res.data.err)
     } else {
       return res.data;
     }
   })},

   //getting the post request right!
    postNewClass: function (newclass) {
     var requestUrl = 'http://localhost:4000/api/classes'
     axios.request({
                     method: 'post',
                     url: requestUrl,
                     data: newclass } )
       .then(function(res, next){
       if(res.data.err){
         console.log(res.data.err)
       } else {
         return res.data;
       }
     })},


     classToEdit: function(id)  {
      var requestUrl = `http://localhost:4000/api/classes/${id}/edit`
      axios.get(requestUrl).then(function(res, next){
        if(res.data.err){
          console.log(res.data.err)
        } else {
          return res.data;
        }
      })},

      editClass: function (id, updatedclass) {
         var requestUrl = `http://localhost:4000/api/classes/${id}`
         axios.request({
           method: 'put',
           url:  requestUrl,
           data: updatedclass
         }).then(response => {
           return response.data
         }).catch(err => console.log(err))
     }}
