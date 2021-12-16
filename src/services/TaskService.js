import http from "../http-common";

const getAll = () => {
  return http.get(`/tasks`);
};

const remove = (id) => {
  return http.delete(`/tasks/${id}`);
};

const create = (data) => {
  return http.post(`/tasks`, data);
};

const TaskService = {
  getAll,
  remove,
  create,
};

export default TaskService;

// CHANNY'S! DO NOT COPY!
