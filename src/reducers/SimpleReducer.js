export const initialState = {
  tasks: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]
};

export const simpleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
        const newTodo = {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      return [...state.tasks, newTodo];

    // case '':
    //   return {
       
    //   };
    default:
      return state;
  }
};