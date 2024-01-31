import * as React from "react";
import { IStudy } from "../pages/Main";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AddIcon from "@mui/icons-material/Add";
import yellow from "@mui/material/colors/yellow";

const StudyInfoCard = ({ name, hasCrown }: IStudy) => {
  const renderStudyCard = () => {
    if (!name) {
      return (
        <p className="tw-text-24">
          <AddIcon fontSize="large" /> Study
        </p>
      );
    }

    return (
      <>
        {hasCrown && (
          <Brightness7Icon sx={{ color: yellow[500] }} fontSize="small" />
        )}
        <p className="">{name}</p>
      </>
    );
  };

  return (
    <div className="tw-h-200 tw-w-200 tw-cursor-pointer tw-rounded-10 tw-border-1 tw-p-10 tw-shadow-sm hover:tw-shadow-lg">
      {renderStudyCard()}
    </div>
  );
};

export default StudyInfoCard;
