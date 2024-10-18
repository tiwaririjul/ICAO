import React, { useState, useEffect } from "react";
import { annexes } from "../utils/data";
import ProvisionList from "./ProvisionList";

import SelectAnnexes from "./stages/SelectAnnexes";
import UploadStateLetter from "./stages/UploadStateLetter";
import Confirm from "./stages/Confirm";

const Stages = ({ stage }) => {
  // const [progressDetail, setProgressDetail] = useState({});
  const [selectedAnnexPan, setSelectedAnnexPan] = useState(null);
  const [selectedAnnexes, setSelectedAnnexes] = useState([]);
  const [stateLetterInfo, setStateLetterInfo] = useState({
    title: "",
    document: "",
    language: "",
    stateLetterUploadDate: "",
    edition: "",
    filePath: "",
  });
  const [chapters, setChapters] = useState([]);

  const isDataComplete = () => {
    console.log("checking if data is complete or not");

    console.log(
      selectedAnnexPan &&
        selectedAnnexes.length > 0 &&
        stateLetterInfo.title &&
        stateLetterInfo.language &&
        stateLetterInfo.stateLetterUploadDate &&
        stateLetterInfo.edition &&
        stateLetterInfo.filePath &&
        chapters.length > 0
    );
    return (
      selectedAnnexPan &&
      selectedAnnexes.length > 0 &&
      stateLetterInfo.title &&
      stateLetterInfo.language &&
      stateLetterInfo.stateLetterUploadDate &&
      stateLetterInfo.edition &&
      stateLetterInfo.filePath &&
      chapters.length > 0
    );
  };

  useEffect(() => {
    if (isDataComplete()) {
      const storedData = {
        selectedAnnexPan,
        selectedAnnexes,
        stateLetterInfo,
        chapters,
      };

      localStorage.setItem("progressData", JSON.stringify(storedData));
      // alert("stored");
    }
  }, [selectedAnnexPan, selectedAnnexes, stateLetterInfo, chapters]);

  useEffect(() => {
    console.log(stateLetterInfo);
  }, [stateLetterInfo]);

  switch (stage) {
    case 1:
      return (
        <SelectAnnexes
          selectedAnnexPan={selectedAnnexPan}
          setSelectedAnnexPan={setSelectedAnnexPan}
        />
      );
    case 2:
      return (
        <ProvisionList
          type="annexes"
          selectedAnnexes={selectedAnnexes}
          setSelectedAnnexes={setSelectedAnnexes}
        />
      );
    case 3:
      return (
        <UploadStateLetter
          setStateLetterInfo={setStateLetterInfo}
          stateLetterInfo={stateLetterInfo}
        />
      );

    case 4:
      return (
        <ProvisionList
          type="Chapters"
          selectedAnnexes={chapters}
          setSelectedAnnexes={setChapters}
        />
      );

    case 5:
      return <ProvisionList type="Provision" />;

    case 6:
      return <Confirm />;

    case 7:
      return <div>Final</div>;

    default:
      return (
        <div className="container">No content available for this stage</div>
      );
  }
};

export default Stages;
