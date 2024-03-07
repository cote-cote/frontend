import { Box, Pagination } from "@mui/material";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { sessionKeywordState } from "../../context/session/keyword";
import useSessionQuery from "../../queries/session";
import {
  SessionPaginationProps,
  sessionPaginationState,
} from "../../context/session/pagination";

const SessionPagination: React.FC = () => {
  const [sessionKeyword] = useRecoilState<string | null>(sessionKeywordState);
  const [{ page, per_page }, setPagination] =
    useRecoilState<SessionPaginationProps>(sessionPaginationState);

  const { data, isFetched } = useSessionQuery({
    keyword: sessionKeyword,
    page,
    per_page,
  });

  const handleChange = useCallback(
    (_: React.ChangeEvent<unknown>, selected_page: number) =>
      setPagination({ page: selected_page, per_page }),
    [per_page, setPagination]
  );

  return (
    <Box display="flex" justifyContent="center" marginY="16px">
      <Pagination
        count={isFetched ? data.total_pages : 1}
        onChange={handleChange}
        variant="outlined"
        color="primary"
      />
    </Box>
  );
};

export default SessionPagination;
