import * as React from "react";

import PageWrapper from "../components/PageWrapper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { redirect, useNavigate } from "react-router-dom";

const StudyCreate = () => {
  const navigation = useNavigate();

  const handleCreateStudySubmit = (event) => {
    event.preventDefault();
    console.log("스터디 생성");

    navigation("/");
  };

  const handleAddParticipants = (event) => {
    console.log("참가자 추가 ");
  };

  return (
    <PageWrapper>
      <h1 className="tw-mb-20 tw-border-b-1 tw-pb-20">스터디 만들기</h1>
      <form
        onSubmit={handleCreateStudySubmit}
        className="tw-flex tw-flex-col tw-gap-20"
      >
        <TextField
          className=""
          id="study-name"
          label="Study Name"
          variant="outlined"
          required
        />
        <TextField
          className=""
          id="study-repo"
          label="Repository URL"
          variant="outlined"
          required
        />
        <div>
          <p>참가자</p>
          <Button
            onClick={handleAddParticipants}
            className="tw-h-25 tw-w-40"
            variant="text"
          >
            추가
          </Button>
        </div>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </PageWrapper>
  );
};

export default StudyCreate;
