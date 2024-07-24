import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo() {
    const {todos, setTodos} = useContext(TodoContext);
    const [todotext, setTodotext] = useState('');
    return (
        <>
            <input 
                placeholder="Add your next todo...."
                onChange={(e) => setTodotext(e.target.value)}
                value={todotext}
            />
            <button onClick={() => {
                let nextId = todos.lenght + 1;
                setTodos([...todos,{id: nextId, Text: todotext, isFinished: false}]);
                setTodotext('');
            }}>Add</button>
        </>
    )
}

export default AddTodo; 