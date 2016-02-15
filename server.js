var express = require('express');
var app = express();
var PORT = 3000;
var todos = [{
	id: 1,
	description: 'Walk the dog',
	completed: false
}, {
	id: 2,
	description: 'Lunch with mom',
	completed: false
}];

app.get('/', function (req, res) {
	res.send('TODO API root');
});


//getting all the todos
app.get('/todos', function (req, res) {
	res.send(todos);
});


//getting todo by Id
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id);
	var matchedTodo;

	todos.forEach(function (todo) {
		if(todo.id === todoId) {
			matchedTodo = todo;
		}
	});

	if(matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send('todo not found');
	}
});

app.listen(PORT, function () {
	console.log('Server is listening on port : ' + PORT);
});