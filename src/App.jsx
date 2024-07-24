import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext';

function App() {
 
  const [todos, setTodos] = useState([])

  // function addTodos(todoText){
  //   let nextId = todos.length + 1;
  //   setTodos([...todos, {id: nextId, text: todoText, isFinished: false}])
  // }

  return (
    <>
      <TodoContext.Provider value={{todos, setTodos}}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  )
}

export default App
