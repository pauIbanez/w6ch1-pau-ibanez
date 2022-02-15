import styled from "styled-components";

const ListItem = styled.li`
  background-color: #fffcf7;
  height: 50px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
`;

const TaskName = styled.h2`
  margin: 0;
  font-weight: 100;
`;

const Task = ({ task }) => {
  return (
    <ListItem>
      <TaskName>{task.text}</TaskName>
    </ListItem>
  );
};

export default Task;
