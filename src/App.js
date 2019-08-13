import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import AddForm from './components/AddForm'

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
