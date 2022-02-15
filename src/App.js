import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TaskList from "./components/TaskList/TaskList";
import { loadTasksThunk } from "./redux/thunks/thunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);

  return <TaskList />;
}

export default App;
