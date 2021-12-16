import { GET_TASKS, POST_TASK, DELETE_TASK } from "./actionTypes";
import TaskService from "../../services/TaskService";

export const getTasks = () => async (dispatch) => {
  try {
    const res = await TaskService.getAll();

    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await TaskService.remove(id);

    dispatch({
      type: DELETE_TASK,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const res = await TaskService.create({ task });

    dispatch({
      type: POST_TASK,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

// CHANNY'S! DO NOT COPY!
