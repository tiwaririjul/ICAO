import React, { useState } from "react";
import { annexes, Provisions } from "../utils/data";

const ProvisionList = ({ type, isProvision }) => {
  const [arrayType, setArrayType] = useState([]);
  isProvision ? setArrayType(annexes) : setArrayType(Provisions);

  return (
    <div className="container mt-4">
      <h3>Select {type}</h3>
      {arrayType.map((annex, index) => (
            <div key={index} className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id={`annex-${index}`}
              />
              <label className="form-check-label" htmlFor={`annex-${index}`}>
                {annex.replace("Annex", type)}
              </label>
              <hr />
            </div>
          ))}
    </div>
  );
};

export default ProvisionList;
