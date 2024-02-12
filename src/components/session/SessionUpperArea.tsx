import { Box } from "@mui/material";
import SessionAddButton from "./SessionAddButton.component";
import SessionTitle from "./SessionTitle";

const SessionUpperArea: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ paddingY: "16px" }}
    >
      <SessionTitle />
      <SessionAddButton />
    </Box>
  );
};

export default SessionUpperArea;
