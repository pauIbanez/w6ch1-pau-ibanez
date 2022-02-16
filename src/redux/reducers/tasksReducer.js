import actionTypes from "../actions/actionTypes";

const tasksReducer = (currentTasks = [], action = {}) => {
  let newTasks;

  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;

    case actionTypes.addTask:
      newTasks = [...currentTasks, action.task];
      break;

    case actionTypes.removeTask:
      newTasks = currentTasks.filter(({ id }) => id !== action.id);
      break;

    case actionTypes.toggleTask:
      newTasks = currentTasks.map((task) => ({
        ...task,
        compleated: !task.compleated,
      }));
      break;

    default:
      newTasks = [...currentTasks];
      break;
  }

  return newTasks;
};

export default tasksReducer;
