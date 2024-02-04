import * as React from "react";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import yellow from "@mui/material/colors/yellow";
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
        className="tw-relative tw-flex tw-h-200 tw-w-200 tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-10 tw-border-1 tw-p-10 tw-shadow-sm tw-transition tw-delay-100 tw-ease-in-out hover:tw-shadow-lg"
      >
        <AddIcon fontSize="large" />
      </Link>
    );
  }

  return (
    <div className="tw-relative tw-flex tw-h-200 tw-w-200 tw-items-center tw-justify-center tw-rounded-10 tw-border-1 tw-p-10 tw-shadow-sm tw-transition tw-delay-100 tw-ease-in-out hover:tw-shadow-lg">
      {hasCrown && (
        <>
          <Brightness7Icon
            className="tw-absolute tw-left-10 tw-top-10"
            sx={{ color: yellow[500] }}
            fontSize="small"
          />
          <Link
            to="/study/edit"
            className="tw-absolute tw-bottom-10 tw-right-10 tw-h-30 tw-w-30 tw-cursor-pointer tw-rounded-15 tw-text-center hover:tw-bg-gray-100"
          >
            <EditIcon fontSize="small" />
          </Link>
        </>
      )}
      <Link
        to={`/${id}`}
        className="tw-flex tw-h-50 tw-w-150 tw-cursor-pointer tw-items-center tw-justify-center"
      >
        {name}
      </Link>
    </div>
  );
};

export default StudyInfoCard;
