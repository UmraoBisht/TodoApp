import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
