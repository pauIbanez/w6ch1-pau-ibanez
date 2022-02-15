import { useSelector } from "react-redux";
import styled from "styled-components";
import Task from "../Task/Task";

const TaskListUl = styled.ul`
  list-styling: none;
  margin: 0;
  padding: 0;
`;

const TaskList = () => {
  const { tasks } = useSelector((state) => state);

  return (
    <TaskListUl>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </TaskListUl>
  );
};

export default TaskList;
