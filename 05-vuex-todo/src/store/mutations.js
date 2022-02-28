const addOneItem = (state, todoItem) => {
    const obj = {
        completed: false,
        item: todoItem
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeTodo = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}

const toggleComplete = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearTodo = (state) => {
    localStorage.clear();
    state.todoItems = []
}

export { addOneItem, removeTodo, toggleComplete, clearTodo }