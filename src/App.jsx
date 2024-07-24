import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import { useReducer, useState } from 'react'
import TodoContext from './context/TodoContext'

import './App.css'
import TodoReducer from './reducers/TodoReducer'

function App() {

  // let [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(TodoReducer, [])

  return (
    <>
      <TodoContext.Provider value={{todos, dispatch}}>
        <AddTodo/>
        <TodoList/>
      </TodoContext.Provider>
    </>
  )
}

export default App