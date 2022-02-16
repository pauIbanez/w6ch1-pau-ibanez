import {
  addTaskAction,
  loadTasksAction,
  removeTaskAction,
} from "../actions/actionCreators";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);

  if (response.ok) {
    const downloadedTasks = await response.json();
    dispatch(loadTasksAction(downloadedTasks));
  }
};

export const getAddTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (response.ok) {
    const taskWithId = await response.json();
    dispatch(addTaskAction(taskWithId));
  }
};

export const getRemoveTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(removeTaskAction(id));
  }
};
