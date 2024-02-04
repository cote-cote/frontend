import * as React from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import StudyInfoCard from "../components/StudyInfoCard";
import PageWrapper from "../components/PageWrapper";

export interface IStudy {
  name: string;
  hasCrown: boolean;
  id: string;
}

const tempStudyList: IStudy[] = [
  {
    name: "스터디1",
    hasCrown: true,
    id: "1",
  },
  {
    name: "스터디2",
    hasCrown: false,
    id: "2",
  },
  {
    name: "스터디1",
    hasCrown: true,
    id: "3",
  },
  {
    name: "스터디2",
    hasCrown: false,
    id: "4",
  },
];

function MainPage() {
  return (
    <PageWrapper>
      <section
        id=""
        className="tw-mt-20 tw-flex tw-justify-between tw-border-b-1 tw-pb-20"
      >
        <h1>Cote Study!</h1>
        <Button>
          <AddIcon fontSize="small" />
          Session
        </Button>
      </section>

      <section id="my-study-list" className="tw-my-20">
        <h2 className="tw-mb-10">My Study List</h2>
        {tempStudyList.length === 10 && (
          <p>스터디는 최대 10개 생성이 가능합니다.</p>
        )}
        <div className="tw-flex tw-flex-wrap tw-gap-10">
          {tempStudyList.map((study, idx) => (
            <StudyInfoCard
              key={idx}
              name={study.name}
              hasCrown={study.hasCrown}
              id={study.id}
            />
          ))}
          {tempStudyList.length < 10 && (
            <StudyInfoCard name="" hasCrown={false} id="" />
          )}
        </div>
      </section>

      <section id="hot-study-list" className="tw-mb-20">
        <h2 className="tw-mb-10">Hot Study!</h2>
      </section>
    </PageWrapper>
  );
}

export default MainPage;
