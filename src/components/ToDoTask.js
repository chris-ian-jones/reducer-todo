import React from 'react'

const TodoTask = props => {
  return (
    <div>
      <p>Completed: {props.completed.toString()}</p>
      <p>Id: {props.id}</p>
      <p>Item: {props.item}</p>
    </div>
  )
}
export default TodoTask