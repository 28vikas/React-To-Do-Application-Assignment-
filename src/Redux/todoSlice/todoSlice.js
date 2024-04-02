import { createSlice, nanoid } from "@reduxjs/toolkit";

const getTaskFromLocalStorage = () => {
  let tasks = localStorage.getItem("tasks");
  if (!tasks) {
    tasks = [
      { id: 1, text: "Pay for Hosting", completed: false },
      { id: 2, text: "Upload New Pictures on Website", completed: false },
    ];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    tasks = JSON.parse(tasks);
  }
  return tasks;
};

const saveTaskToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const initialState = {
  todos: getTaskFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload, completed: false };
      state.todos.push(todo);
      saveTaskToLocalStorage(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      saveTaskToLocalStorage(state.todos);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTaskToLocalStorage(state.todos);
      }
    },
    removeAll: (state) => {
      state.todos = [];
      saveTaskToLocalStorage(state.todos);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        saveTaskToLocalStorage(state.todos);
      }
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, removeAll, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
