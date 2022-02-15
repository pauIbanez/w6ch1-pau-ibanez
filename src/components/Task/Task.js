import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const padding = 50;

const ListItem = styled.li`
  height: 50px;
  position: relative;

  ${(props) => (props.compleated ? "color: #202020;" : "color: #5a5a5a;")}

  border-bottom: 1px solid #5a5a5a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${padding}px;
  user-select: none;
  cursor: pointer;

  &:hover {
    color: #202020;
    background-color: #f5f1eb;
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
  width: ${padding}px;
  display: flex;
  justify-content: center;
  color: #93b2e6;
  visibility: hidden;
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: 30px;

  &:hover {
    color: #ff6666;
  }
`;

const CompleteIcon = styled.div`
  position: absolute;
  left: 0;
  width: ${padding}px;
  display: flex;
  justify-content: center;
  ${(props) => (props.compleated ? "color: #BDE6AD;" : "display: none;")}
  font-size: 30px;
`;

const Task = ({ task }) => {
  return (
    <ListItem compleated={task.compleated}>
      <CompleteIcon compleated={task.compleated}>
        <FontAwesomeIcon icon={faCircleCheck} />
      </CompleteIcon>
      <TaskName>{task.text}</TaskName>
      <DeleteButton>
        <FontAwesomeIcon icon={faTrashCan} />
      </DeleteButton>
    </ListItem>
  );
};

export default Task;
