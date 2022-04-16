function renderActiveTodos(todos) {
	const ulElement = document.querySelector("ul");

	forEachTodo(todos);
}

function validateTodo(todo) {
	if (todo.active || todo.daysFinished > 0) throw "erro";
}

function forEachTodo(todos) {
	todos.forEach((todo) => {
		validateTodo(todo);
		const liElement = document.createElement("li");
		liElement.innerHTML = todo.text;
		ulElement.appendChild(liElement);
	});
}
