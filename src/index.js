const express = require("express");
const path = require("path");


//INIICIALIZATIONS
const app = express();


//SETTINGS
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('views', __dirname + '/public/views');


//STATIC FILES
app.use(express.static(path.join(__dirname, "public/views")));


//ROUTES
app.get('/', function(req, res){
    res.render('index.html');
});

//SERVER
app.listen(app.get("port"), () =>
    console.log("server on port", app.get("port")
))