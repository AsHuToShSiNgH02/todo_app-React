function TodoReducer(state, action) {
    if(action.type == 'add_todo') {
        let nextId = state.length+1;
        return[...state, {id: nextId, text: action.payload.todoText, isFinished: false}];
    }else if(action.type == 'edit_todo') {
        const newTodoList = state.map(todo => {
            if(todo.id == action.payload.id) {
              todo.text = action.payload.todoText;
            }
            return todo;
        });
        return newTodoList;
    }else if(action.type == 'delete_todo') {
        const updatedTodos = state.filter(todo => todo.id != action.payload.id);
        return updatedTodos;
    }
    return state
}

export default TodoReducer;