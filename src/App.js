import React from 'react';
import './App.css'
import AddForm from './components/AddForm'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <h1>Todo!</h1>
      <AddForm />
      <TodoList />
    </div>
  );
}


export default App;
