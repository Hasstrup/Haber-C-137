var express = require('express')
app = express();
var request = require("request");
var mongoose = require('mongoose')
var port = 4000
var cors = require('cors')
app.use(cors());
var bodyParser = require('body-parser')
var LoadDB = require('./load.js')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));



mongoose.connect("mongodb://localhost/haber", {
    useMongoClient: true
});

var classRoute = require('./routes/classes')
var StudentRoutes = require('./routes/students')
var teacherRoutes = require('./routes/Teacher')

var Student = require('./models/Students')
var Class = require ('./models/classes')
var Subject = require ('./models/subjects')
var Teacher =require ('./models/teachers')

app.use(classRoute);
app.use(StudentRoutes);
app.use(teacherRoutes);


app.use(require('express-session')({
  secret: "headasss",
  resave: false,
  saveUninitialized: false
}))





app.listen(port, function() {

  console.log('haber is up and running at %s', port)
});
