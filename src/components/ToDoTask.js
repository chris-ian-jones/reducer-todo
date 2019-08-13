import React, { useReducer } from 'react';
import './ToDoTask.css'
import { initialState, simpleReducer } from './../reducers/SimpleReducer'

function TodoTask(props) {
  console.log('todotask props: ', props)
  const [state, dispatch] = useReducer(simpleReducer, initialState);

  return (
    <div 
      className={`${props.completed ? 'completed' : ''}`}
      onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: props.id })}
    >
      <p>{props.item}</p>
    </div>
  )
}
export default TodoTask