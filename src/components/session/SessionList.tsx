import { List } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { sessionKeywordState } from "../../context/session/keyword";
import {
  SessionPaginationProps,
  sessionPaginationState,
} from "../../context/session/pagination";
import useSessionQuery from "../../queries/session";
import SessionListItem from "./SessionListItem";

const SessionList: React.FC = () => {
  const [sessionKeyword] = useRecoilState<string>(sessionKeywordState);
  const [{ page, per_page }] = useRecoilState<SessionPaginationProps>(
    sessionPaginationState
  );

  const { data, isFetched } = useSessionQuery({
    keyword: sessionKeyword,
    page,
    per_page,
  });

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      aria-label="contacts"
    >
      {isFetched &&
        data.sessions.map((item, index) => {
          return (
            <SessionListItem
              key={index}
              title={item.title}
              date={item.date}
              isPrivate={item.isPrivate}
              isOngoing={item.isOngoing}
            />
          );
        })}
    </List>
  );
};

export default SessionList;
