import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList() {

    const {todos, setTodos} = useContext(TodoContext);

    function onDeleteTodo(id){
        const newTodoList = todos.filter((todo) => todo.id != id);
        setTodos(newTodoList);
    }

    function editTodo(id, newTodo) {
        const newTodoList = todos.map(todo => {
            if(todo.id == id) {
                todo.text = newTodo;
            }
            return todo;
        });
        setTodos(newTodoList)
    }
    function onFinishedTodo(id, state){
        const newTodoList = todos.map(todo => {
            if(todo.id == id) {
                todo.isFinished = state;
            }
            return todo;
        });
        setTodos(newTodoList)
    }

    return (
        todos && todos.map(
            (todo) => <Todo 
                        key={todo.id} 
                        text={todo.text} 
                        isFinished={todo.isFinished}
                        updateTodo={(newTodo) => editTodo(todo.id,newTodo)}
                        deleteTodo={() => onDeleteTodo(todo.id)}
                        finishTodo={(state) => onFinishedTodo(todo.id, state)}
        />)
    );
}

export default TodoList