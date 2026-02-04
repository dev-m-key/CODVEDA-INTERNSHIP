import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api/";

export const getTasks = () => axios.get(API_URL + "tasks/");
export const createTask = (task) => axios.post(API_URL + "tasks/", task);
export const updateTask = (id, task) => axios.put(API_URL + `tasks/${id}/`, task);
export const deleteTaskAPI = (id) => axios.delete(API_URL + `tasks/${id}/`);
