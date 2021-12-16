import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { createTask } from "../redux/actions/tasks";

const AddTodo = () => {
  const initialTaskState = { task: "" };

  const [task, setTask] = useState(initialTaskState);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const newTask = () => {
    setTask(initialTaskState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(task.task))
      .then((data) => {
        newTask();
      })
      .catch((err) => console.log(err));
  };

  // CHIL
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-field col s6">
          <input
            id="task_name"
            type="text"
            className="validate"
            required
            value={task.task}
            onChange={handleInputChange}
            name="task"
          />
          <label htmlFor="task_name">Enter Task</label>
        </div>
        <button
          className="waves-effect waves-light btn"
          style={{ marginRight: "1rem" }}
          type="submit"
        >
          <i className="material-icons right">create</i>Submit
        </button>
        <Link to="/" className="waves-effect waves-light btn red">
          <i className="material-icons right">cancel</i>
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddTodo;

// CHANNY'S! DO NOT COPY!
