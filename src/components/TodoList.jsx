import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, deleteTask } from "../redux/actions/tasks";

const TodoList = () => {
  const tasks = useSelector((store) => {
    return store.tasks;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const remove = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className="collection with-header" style={{ marginTop: "5rem" }}>
      <li className="collection-header">
        <h4>My Todos</h4>
      </li>
      {tasks &&
        tasks.map((task) => (
          <li key={task.id} className="collection-item">
            <div>
              {task.task}
              <div className="secondary-content">
                <Link to="/edit/:id">
                  <i className="material-icons">edit</i>
                </Link>
                <i
                  onClick={() => {
                    remove(task.id);
                  }}
                  className="material-icons"
                  style={{ cursor: "pointer" }}
                >
                  delete_forever
                </i>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;

// CHANNY'S! DO NOT COPY!
