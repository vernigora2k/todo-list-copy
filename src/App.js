import React from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, complited: false, title: 'Купить хлеб'},
    {id: 2, complited: false, title: 'Купить масло'},
    {id: 3, complited: false, title: 'Купить молоко'}
  ])

function toggleTodo(id) {
  setTodos(
    todos.map(todo => {
      if (todo.id === id) {
        todo.complited = !todo.complited
      }
      return todo
    })
  )
}

function addTodo(title) {
  setTodos(todos.concat([{
    title: title,
    id: Date.now(),
    complited: false
  }]))
}

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
        <h1>React Tutorial</h1>
        <AddTodo onCreate={addTodo}></AddTodo>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList> : <p>No Todos</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
