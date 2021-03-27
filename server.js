const express = require('express');
const app = express();
var session = require('express-session');
var jquery = require('jquery');
var path = require('path');

app.use(express.static("public"));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

let {login: login, logout: logout, getServerTime: getServerTime} = require('./public/test.js');

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/getLoginPage', function(request, response) {
	console.log("Going to login");
	response.sendFile(path.join(__dirname + '/public/test.html'));
});

//app.post('/login', login);
app.post('/logout', logout);
app.post('/getServerTime', getServerTime);

// Start the server running
app.listen(app.get('port'), function() {
    console.log('Test app is running on port', app.get('port'));
});


