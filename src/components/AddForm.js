import React, { useState, useReducer } from 'react';
import { initialState, simpleReducer } from './../reducers/SimpleReducer'
import ToDoTask from './ToDoTask'


function AddForm() {
  const [inputState, setInputState] = useState('')
  

  const [state, dispatch] = useReducer(simpleReducer, initialState);
  console.log('AddForm state: ', state)

  const changeInputHandler = event => {
    setInputState(event.target.value)
  }

  return (
    <div>
        <input 
          onChange={changeInputHandler}
          value={inputState}
          placeholder="Enter todo"
        />
        <button onClick={() => dispatch({ type: 'ADD_TODO', payload: inputState })}>Add Todo</button>
        {state.tasks.map(todo => <ToDoTask dispatch={dispatch} key={todo.id} completed={todo.completed} id={todo.id} item={todo.item} />)}
    </div>
  );
}

export default AddForm;