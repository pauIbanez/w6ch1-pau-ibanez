import actionTypes from "./actionTypes";

export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const addTaskAction = (task) => ({
  type: actionTypes.addTask,
  task,
});

export const removeTaskAction = (id) => ({
  type: actionTypes.removeTask,
  id,
});

export const toggleTaskAction = (id) => ({
  type: actionTypes.toggleTask,
  id,
});
