import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react'
import { initialState, simpleReducer } from './../reducers/SimpleReducer'

function AddForm() {
  const [inputState, setInputState] = useState('')
  console.log(inputState)

  const changeInputHandler = event => {
    setInputState(event.target.value)
  }

  return (
    <div>
      <form>
        <Input 
          size='huge'
          onChange={changeInputHandler}
          value={inputState}
          placeholder="Enter todo"
        />
        <Button>Add Todo</Button>
      </form>
    </div>
  );
}


export default AddForm;