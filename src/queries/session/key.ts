interface Pagination {
  page: number;
  per_page: number;
}

const sessionQueryKey = {
  all: ["session"] as const,
  keyword: ({
    keyword,
    page,
    per_page,
  }: { keyword: string | null } & Pagination) =>
    [...sessionQueryKey.all, keyword, page, per_page] as const,
};

export { sessionQueryKey };
