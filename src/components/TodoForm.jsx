import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import "../App.css";

function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addTodo({ title, content }));
    }
    setTitle("");
    setContent("");
  };
  return (
    <div className="flex form-container">
      <form className="flex form" onSubmit={(e) => submitHandler(e)}>
        <div className="flex">
          <div className="flex">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="form-label" htmlFor="content">
              Content
            </label>
            <input
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn submit-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
