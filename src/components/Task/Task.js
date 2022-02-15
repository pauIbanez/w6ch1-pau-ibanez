import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ListItem = styled.li`
  background-color: #fffcf7;
  height: 50px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;

  &:hover {
    button {
      visibility: visible;
    }
  }
`;

const TaskName = styled.h2`
  margin: 0;
  font-weight: 100;
`;

const DeleteButton = styled.button`
  visibility: hidden;
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin-right: 30px;
`;

const Task = ({ task }) => {
  return (
    <ListItem>
      <TaskName>{task.text}</TaskName>
      <DeleteButton>
        <FontAwesomeIcon icon={faTrashCan} size="2x" />
      </DeleteButton>
    </ListItem>
  );
};

export default Task;
