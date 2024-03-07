import * as React from "react";

import { Link } from "react-router-dom";

interface IStudyInfoCardProps {
  name: string;
  hasCrown: boolean;
  id: string;
}

const StudyInfoCard = ({ name, hasCrown, id }: IStudyInfoCardProps) => {
  if (!id) {
    return (
      <Link
        to="/study/create"
        className="tw-h-200 tw-w-200 tw-rounded-10 tw-border-1 tw-relative tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-p-10 tw-shadow-sm tw-transition tw-delay-100 tw-ease-in-out hover:tw-shadow-lg"
      >
        +
      </Link>
    );
  }

  return (
    <div className="tw-h-200 tw-w-200 tw-rounded-10 tw-border-1 tw-relative tw-flex tw-items-center tw-justify-center tw-p-10 tw-shadow-sm tw-transition tw-delay-100 tw-ease-in-out hover:tw-shadow-lg">
      {hasCrown && (
        <>
          <div>왕관</div>
          <Link
            to="/study/edit"
            className="tw-h-30 tw-w-30 tw-rounded-15 tw-absolute tw-bottom-10 tw-right-10 tw-cursor-pointer tw-text-center hover:tw-bg-gray-100"
          >
            <div>수정</div>
          </Link>
        </>
      )}
      <Link
        to={`/${id}`}
        className="tw-h-50 tw-w-150 tw-flex tw-cursor-pointer tw-items-center tw-justify-center"
      >
        {name}
      </Link>
    </div>
  );
};

export default StudyInfoCard;
