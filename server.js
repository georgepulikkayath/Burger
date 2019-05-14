var express = require('express');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var app = express();
var router = require('./controllers/burgers_controller.js');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
var port = process.env.PORT || 3000;
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/', router);
app.listen(port, function() {
  console.log("App is listening on port " + port);
});