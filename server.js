var express = require('express');
var fs = require('fs');
var app = express();

// set the templating engine to pug (formerly jade)
app.set('view engine','pug');

app.use(express.static(__dirname + '/public'));

var allowed_entrypoints = {
	'':'home',
	'home':'home',
	'about':'about',
	'projects':'projects',
	'timeline':'timeline'
};

app.get('/:entrypoint',function(req,res){
	//sanitize the input
	entrypoint = req.params['entrypoint'].toLowerCase();
	entrypoint = allowed_entrypoints[entrypoint];

	if (entrypoint){
		res.render('app.pug', {entrypoint:entrypoint})
	} else {
		res.status(404).send('Sorry that page doesn\'t exist');
	}
	//handle all of the requests
});

app.get('/projects', function(req,res){
	res.render('app.pug', entrypoint='')
});

app.listen(3000,()=>{
		console.log("listening on localhost:3000")
});