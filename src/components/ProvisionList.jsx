import React, { useState } from "react";
import { annexes, Chapters, Provisions } from "../utils/data";

const ProvisionList = ({ type }) => {
  const [arrayType, setArrayType] = useState([]);
  // isProvision
  //   ? setArrayType(Provisions)
  //   : type == "annexes"
  //   ? setArrayType(annexes)
  //   : setArrayType(Chapters);

  type == "annexes"
    ? setArrayType(annexes)
    : type == "Chapters"
    ? setArrayType(Chapters)
    : setArrayType(Provisions);

  return (
    <div className="container mt-4">
      <h3>Select {type}</h3>
      {arrayType.map((elem, index) => (
        <div key={index} className="form-check mb-3">
          {type != "Provision" && (
            <input
              type="checkbox"
              className="form-check-input"
              id={`annex-${index}`}
            />
          )}

          <label className="form-check-label">
            {elem.replace("Annex", type)}
          </label>

          <button>View</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProvisionList;
