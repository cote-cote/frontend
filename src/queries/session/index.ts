import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  GetSessionOption,
  SessionResponse,
  getSessions,
} from "../../api/session";
import { sessionQueryKey } from "./key";

const useSessionQuery = (
  option: GetSessionOption
): UseQueryResult<SessionResponse, Error> => {
  const result = useQuery({
    queryKey: sessionQueryKey.keyword({
      keyword: option.keyword,
      page: option.page,
      per_page: option.per_page,
    }),
    queryFn: () => getSessions(option),
  });
  return result;
};

export default useSessionQuery;
