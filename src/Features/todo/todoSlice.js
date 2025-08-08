import { createSlice, nanoid } from '@reduxjs/toolkit';

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), task: action.payload, completed: false };
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updataTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.task = action.payload.task;
      }
    },
    complete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, removetodo, updataTodo, complete } = TodoSlice.actions;
export default TodoSlice.reducer;
