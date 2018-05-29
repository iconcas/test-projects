var express = require('express'), 
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model loading here
    bodyParser = require('body-parser');
    

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb'); 
//mongoose.connect('mongodb://192.168.1.89/Tododb'); 
//mongoose.connect('mongodb://192.168.1.77/Tododb'); 
//mongoose.connect('mongodb+srv://innovatisoft:fl4ira@innovatimongo-vpqe7.mongodb.net/Tododb?retryWrites=true'); 
mongoose.connect('mongodb+srv://innovatisoft:fl4ira@innovatimongo-vpqe7.mongodb.net/Tododb'); 
//mongoose.connect('mongodb://mongo:3017/Tododb'); 
/*
var uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});
*/


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

/*
var cors = require('cors')

var app = express()
app.use(cors())
*/

app.listen(port);

console.log('TODO list RESTful API server started on:' + port);