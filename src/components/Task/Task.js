import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ListItem = styled.li`
  background-color: #fffbf5;
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

const TaskControlls = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 30px;
`;

const ButtonIcon = styled.button`
  color: #93b2e6;
  ${(props) => (props.compleated ? "color: #BDE6AD;" : "visibility: hidden;")}
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

const DeleteButton = styled(ButtonIcon)`
  &:hover {
    color: #ff6666;
  }
`;

const CompleteButton = styled(ButtonIcon)`
  &:hover {
    color: #bde6ad;
  }
`;

const Task = ({ task }) => {
  return (
    <ListItem>
      <TaskName>{task.text}</TaskName>
      <TaskControlls>
        <DeleteButton>
          <FontAwesomeIcon icon={faTrashCan} size="2x" />
        </DeleteButton>
        <CompleteButton compleated={task.compleated}>
          <FontAwesomeIcon icon={faCircleCheck} size="2x" />
        </CompleteButton>
      </TaskControlls>
    </ListItem>
  );
};

export default Task;
