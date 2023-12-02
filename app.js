let todos = [];

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        
        if (todo.editing) {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = todo.text;
            listItem.appendChild(inputField);
        } else {
            listItem.innerText = todo.text;
        }

        const editButton = document.createElement('button');
        editButton.innerText = todo.editing ? 'Save' : 'Edit';
        editButton.onclick = () => editTodo(index);
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteSingleTodo(index);

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
    });
}

function addTodo() {
    const newTodoInput = document.getElementById('newTodo');
    const text = newTodoInput.value.trim();

    if (text !== '') {
        todos.push({ text, editing: false });
        newTodoInput.value = '';
        renderTodos();
    }
}

function deleteAllTodos() {
    const confirmDelete = confirm('Are you sure you want to delete all todos?');

    if (confirmDelete) {
        todos = [];
        renderTodos();
    }
}

function editTodo(index) {
    todos[index].editing = !todos[index].editing;
    renderTodos();
}

function deleteSingleTodo(index) {
    const confirmDelete = confirm('Are you sure you want to delete this todo?');

    if (confirmDelete) {
        todos.splice(index, 1);
        renderTodos();
    }
}

renderTodos();