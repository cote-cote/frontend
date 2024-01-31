import * as React from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import StudyInfoCard from "../components/StudyInfoCard";
import PageWrapper from "../components/PageWrapper";
import { useEffect } from "react";

export interface IStudy {
  name: string;
  hasCrown: boolean;
}

const tempStudyList: IStudy[] = [
  {
    name: "스터디1",
    hasCrown: true,
  },
  {
    name: "스터디2",
    hasCrown: false,
  },
  {
    name: "스터디1",
    hasCrown: true,
  },
  {
    name: "스터디2",
    hasCrown: false,
  },
  {
    name: "스터디1",
    hasCrown: true,
  },
  {
    name: "스터디2",
    hasCrown: false,
  },
  {
    name: "스터디1",
    hasCrown: true,
  },
  {
    name: "스터디2",
    hasCrown: false,
  },
];

function MainPage() {
  return (
    <PageWrapper>
      <section
        id=""
        className="tw-mt-20 tw-flex tw-justify-between tw-border-b-1"
      >
        <h1>Cote Study!</h1>
        <Button>
          <AddIcon fontSize="small" />
          Session
        </Button>
      </section>

      <section id="my-study-list" className="tw-my-20">
        <h2 className="tw-mb-10">My Study List</h2>
        <div className="tw-flex tw-flex-wrap tw-gap-10">
          {tempStudyList.map((study) => (
            <StudyInfoCard name={study.name} hasCrown={study.hasCrown} />
          ))}
          {tempStudyList.length < 10 && (
            <StudyInfoCard name="" hasCrown={false} />
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
