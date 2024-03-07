export interface Session {
  title: string;
  problemUrl: string;
  date: Date;
  isPrivate: boolean;
  isOngoing: boolean;
}

export interface SessionResponse {
  sessions: Session[];
  total_pages: number;
  page: number;
}

export interface GetSessionOption {
  keyword?: string;
  page?: number;
  per_page?: number;
}

const dummyItems: Session[] = [
  {
    title: "신나는 자바교실",
    problemUrl: "https://google.com/",
    date: new Date(),
    isPrivate: true,
    isOngoing: false,
  },
  {
    title: "CSS가 뽀개질까? 내 머리가 먼저 뽀개질까?",
    problemUrl: "https://naver.com/",
    date: new Date(),
    isPrivate: false,
    isOngoing: true,
  },
  {
    title: "콜백지옥과 함께 하는 즐거운 자바스크립트!",
    problemUrl: "https://leetcode.com/",
    date: new Date(),
    isPrivate: true,
    isOngoing: true,
  },
  {
    title: "원숭이도 할 수 있는 타입스크립트 교실!",
    problemUrl: "https://programmers.co.kr/",
    date: new Date(),
    isPrivate: false,
    isOngoing: false,
  },
];

const fetchSessions = async (
  option: GetSessionOption
): Promise<SessionResponse> => {
  let sessions = [...dummyItems];
  let total_pages = sessions.length;

  const keyword = option.keyword;
  const page = option.page;
  const per_page = option.per_page;

  if (keyword) {
    sessions = dummyItems.filter(
      (item) =>
        item.title.includes(keyword) || item.problemUrl.includes(keyword)
    );
  }

  if (page && per_page) {
    const offset = (page - 1) * per_page;
    total_pages = Math.ceil(sessions.length / per_page);
    sessions = sessions.slice(offset, offset + per_page);
  }

  return {
    sessions,
    total_pages,
    page,
  };
};

const getSessions = async (
  option: GetSessionOption
): Promise<SessionResponse> => {
  const result = await fetchSessions(option);
  return result;
};

export { getSessions };
