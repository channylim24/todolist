import { GET_TASKS, POST_TASK, DELETE_TASK } from "../actions/actionTypes";

const initialState = [];

const taskReducer = (states = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TASKS:
      return payload;
    case DELETE_TASK:
      return states.filter(({ id }) => id !== payload.id);
    case POST_TASK:
      return [...states, payload];
    default:
      return states;
  }
};

export default taskReducer;

// CHANNY'S! DO NOT COPY!
