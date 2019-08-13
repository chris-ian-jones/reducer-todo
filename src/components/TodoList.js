import React, { useReducer } from 'react'
import ToDoTask from './ToDoTask'
import { initialState, simpleReducer } from './../reducers/SimpleReducer'

const TodoList = () => {
  const [state, dispatch] = useReducer(simpleReducer, initialState);
  console.log(state);

  return (
    <div>
      <p>placeholder TodoList component</p>
      {state.map(todo => <ToDoTask completed={todo.completed} id={todo.id} item={todo.item} />)}
    </div>
  );
}


export default TodoList;