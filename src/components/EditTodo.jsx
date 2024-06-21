import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findTodo, updateTodo } from "../features/todoSlice";
import { useNavigate, useParams } from "react-router-dom";

function EditTodo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = useSelector((state) => findTodo(state, id));
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
  if (!todo) {
    return <h2>Todo not found</h2>;
  }

  const dispatch = useDispatch();
  const saveHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id, title, content }));
    setTitle("");
    setContent("");
    navigate("/");
  };

  return (
    <div className="edit-Container">
      <span>../todo/{id}</span>
      <h2 className="editHeader">Edit Todo</h2>
      <form className="formContainer">
        <div>
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content" className="form-label">
            Content:
          </label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn" onClick={(e) => saveHandler(e)}>
          Save
        </button>
      </form>
    </div>
  );
}
export default EditTodo;
