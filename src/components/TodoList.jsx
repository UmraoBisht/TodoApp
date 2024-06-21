import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todoSlice";
import { Link } from "react-router-dom";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const doneTodos = todos.filter((todo) => !todo.isDone);
  const notDoneTodos = todos.filter((todo) => todo.isDone);

  const todoDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const todoDoneHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {doneTodos.map((todo) => {
          return (
            <div className="todo-container" key={todo.id}>
              <div>
                <h2 className="todo-title">{todo.title}</h2>
                <div>{todo.content}</div>
              </div>
              <div className="button-set">
                <button
                  className="todo-delete-button btn"
                  onClick={() => todoDeleteHandler(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="todo-complete-button btn"
                  onClick={() => todoDoneHandler(todo.id)}
                >
                  Done
                </button>
                <Link
                  className="todo-edit-button btn"
                  to={`/editTodo/${todo.id}`}
                >
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {notDoneTodos.map((todo) => {
          return (
            <div className="todo-container" key={todo.id}>
              <div>
                <h2 className="todo-title">{todo.title}</h2>
                <div>{todo.content}</div>
              </div>
              <div className="button-set">
                <button
                  className="todo-delete-button btn"
                  onClick={() => todoDeleteHandler(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="todo-complete-button btn"
                  onClick={() => todoDoneHandler(todo.id)}
                >
                  Cancel
                </button>
                <Link
                  className="todo-edit-button btn"
                  to={`/editTodo/${todo.id}`}
                >
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
