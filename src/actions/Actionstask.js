import {
  ADDTASK,
  DELETETASK,
  EDITTASK,
  CURRENTTASK,
  COMPLETEDTASK,
} from "./types";

export const addTask = (payload) => {
  return {
    type: ADDTASK,
    payload,
  };
};
export const editTask = (payload) => {
  return {
    type: EDITTASK,
    payload,
  };
};
export const deleteTask = (payload) => {
  return {
    type: DELETETASK,
    payload,
  };
};
export const CurrentTask = (payload) => {
  return {
    type: CURRENTTASK,
    payload,
  };
};

export const filterTasks = () => {};
export const CompletedTask = (payload) => {
  return {
    type: COMPLETEDTASK,
    payload,
  };
};
