import { useState } from "react";

function Todo({finishTodo, text, isFinished, deleteTodo,updateTodo}) {
    const[isEditting, setIsEditting] = useState(false);
    const[todoText, setTodotext] = useState(text);
    return (
        <div>  
            <input type="checkbox" checked={isFinished} onChange={() => finishTodo(!isFinished)}/>

            {(isEditting)? <input value={todoText} onChange={(e) => setTodotext(e.target.value)}/> : <span> {todoText} </span>}

            <button onClick={() => {
                setIsEditting(!isEditting);
                updateTodo(todoText);
            }}> {(isEditting)? 'Save' : 'Edit'} </button>

            <button onClick={deleteTodo}> Delete </button>
        </div>
    );
}

export default Todo;