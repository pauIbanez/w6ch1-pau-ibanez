import { loadTasksAction } from "../actions/actionCreators";

const loadTasksThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const downloadedTasks = await response.json();

  dispatch(loadTasksAction(downloadedTasks));
};
