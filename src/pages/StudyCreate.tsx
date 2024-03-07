import * as React from "react";

import { useNavigate } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";

const StudyCreate: React.FC = () => {
  const navigation = useNavigate();

  const handleCreateStudySubmit = (event) => {
    event.preventDefault();
    console.log("스터디 생성");

    navigation("/");
  };

  const handleAddParticipants = (event) => {
    console.log("참가자 추가");
  };

  return (
    <PageWrapper>
      <h1 className="tw-border-b-1 tw-mb-20 tw-pb-20">스터디 만들기</h1>
      <form
        onSubmit={handleCreateStudySubmit}
        className="tw-flex tw-flex-col tw-gap-20"
      >
        <input className="" id="study-name" required />
        <input className="" id="study-repo" required />
        <div className="tw-flex tw-gap-10">
          <p>참가자</p>
          <button></button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </PageWrapper>
  );
};

export default StudyCreate;
