var express = require("express");
var app = express();
var port = 4200;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/student");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



var nameSchema = new mongoose.Schema({
    StudentName: String,
    StudentId: String,
    Phone_Number:String,
    Gender:String,
    Address:String,
    Student_Branch:String,

});
var EventEmitter = require('events')
 
var ee = new EventEmitter()
ee.on('message', function (text) {
  console.log(text)
})
ee.emit('message', 'hello world')


var User = mongoose.model("User", nameSchema);


app.get("/", (req, res) => {
    console.log(res);
    res.sendFile(__dirname + "/index.html");
  
    
});

app.post("/save", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    console.log(res.nameSchema);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});