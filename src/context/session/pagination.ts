import { atom } from "recoil";

export interface SessionPaginationProps {
  page: number;
  per_page: number;
}

export const sessionPaginationState = atom<SessionPaginationProps>({
  key: "sessionPagination",
  default: {
    page: 1,
    per_page: 2,
  },
});
