////////// SET UP SERVER ///////////
var express = require('express');
var bodyParser = require('body-parser');

////////// OTHER DEPENDENCIES /////////
path = require('path');
mongoose = require('mongoose');

//need to instanciate?? express as app
app = express();

app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

/////////////START SERVER ///////////////
app.listen(1330, function(){
	console.log("******1330******");
})
