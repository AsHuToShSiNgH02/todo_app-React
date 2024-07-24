import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList({ deleteTodo, editTodo }) {

    const {todos, dispatch} = useContext(TodoContext)

    function deleteTodo(id) {
        dispatch({type: 'delete_todo', payload: {id}});
    }

    function editTodo(id, todoText) {
        dispatch({type: 'edit_todo', payload: {id, todoText}});
    }

    return (
        todos && 
        todos.map((todo) => 
                    <Todo key={todo.id} 
                        text={todo.text} 
                        isFinished={todo.isFinished}
                        deleteTodo={() => deleteTodo(todo.id)}
                        updateTodo={(todoText) => editTodo(todo.id, todoText)}
                    />)
    );
}

export default TodoList;