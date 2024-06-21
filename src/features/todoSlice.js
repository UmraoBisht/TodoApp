import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: ({ title, content }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            isDone: false,
          },
        };
      },
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              content: action.payload.content,
            }
          : todo
      );
    },
  },
});

export const findTodo = (state, id) => {
  return state.todo.todos.find((todo) => todo.id === id);
};

export const { addTodo, deleteTodo, toggleTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
