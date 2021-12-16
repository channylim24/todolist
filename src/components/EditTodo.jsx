import React from "react";
import { Link } from "react-router-dom";

const EditTodo = () => {
  return (
    <div className="container">
      <form>
        <div className="input-field col s6">
          <input id="task_name" type="text" className="validate" />
          <label htmlFor="task_name">Enter Task</label>
        </div>
        <button
          className="waves-effect waves-light btn"
          style={{ marginRight: "1rem" }}
        >
          <i className="material-icons right">create</i>Edit Task
        </button>
        <Link to="/" className="waves-effect waves-light btn red">
          <i className="material-icons right">cancel</i>
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default EditTodo;

// CHANNY'S! DO NOT COPY!
