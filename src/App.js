import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import InfoContainer from "./components/InfoContainer/InfoContainer";
import TaskList from "./components/TaskList/TaskList";
import { loadTasksThunk } from "./redux/thunks/thunks";

const PageTitle = styled.h1`
  margin: 0;
  padding: 50px;
`;

const ListContainer = styled.div`
  display: flex;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);

  return (
    <>
      <PageTitle> Task List </PageTitle>
      <ListContainer>
        <InfoContainer />
        <TaskList />
      </ListContainer>
    </>
  );
}

export default App;
