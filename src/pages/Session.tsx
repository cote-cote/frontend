import { Container } from "@mui/material";
import SessionList from "../components/session/SessionList";
import SessionPagination from "../components/session/SessionPagination";
import SessionSearchBar from "../components/session/SessionSearchBar.component";
import SessionUpperArea from "../components/session/SessionUpperArea";

const Session: React.FC = () => {
  return (
    <>
      <Container>
        <SessionUpperArea />
        <SessionList />
        <SessionPagination />
        <SessionSearchBar />
      </Container>
    </>
  );
};

export default Session;
