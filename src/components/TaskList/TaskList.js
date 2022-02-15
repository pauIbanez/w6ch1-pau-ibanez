import { useSelector } from "react-redux";
import styled from "styled-components";
import Task from "../Task/Task";

const TaskListUl = styled.ul`
  list-styling: none;
  border-top: 1px solid #5a5a5a;
  margin: 0;
  padding: 0;
  flex: 2;
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
