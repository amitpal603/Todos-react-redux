import { createSlice, nanoid } from '@reduxjs/toolkit';

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [{ id: 1, task: "Add Another task" }]
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), task: action.payload };
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updataTodo: (state, action) => {
     const {id,task} = action.payload
     const todo = state.todos.find((todo) => todo.id === id)

     if(todo){
      todo.task = task
     }
    }
  }
});

export const { addTodo, removetodo, updataTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
