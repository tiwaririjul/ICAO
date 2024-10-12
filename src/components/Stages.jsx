import React, { useState } from "react";
import { annexes } from "../utils/data";
import ProvisionList from "./ProvisionList";

import SelectAnnexes from "./stages/SelectAnnexes";
import UploadStateLetter from "./stages/UploadStateLetter";

const Stages = ({ stage }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  switch (stage) {
    case 1:
      return <SelectAnnexes />;
    case 2:
      return <ProvisionList type="annexes" />;
    case 3:
      return <UploadStateLetter />;

    case 4:
      return <ProvisionList type="Chapters" />;

    case 5:
      return <ProvisionList type="Provision" />;

    default:
      return (
        <div className="container">No content available for this stage</div>
      );
  }
};

export default Stages;
