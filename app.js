var express = require("express"), 
      app = express(), 
      morgan = require("morgan"),
      bodyParser = require("body-parser");
      router = require('./routes/index.js')

//Express.static allows us creates an alias for the file names
app.use('/js', express.static(__dirname +"/public/javascripts/"));
app.use('/stylesheets', express.static(__dirname + "/public/stylesheets/"));
app.use('/templates', express.static(__dirname + "/public/templates/"));

app.use(morgan("tiny"));
//
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use('/todos', router.todos);

app.get('/', function(req,res){
  res.sendFile(__dirname + "/views/layout.html");
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});