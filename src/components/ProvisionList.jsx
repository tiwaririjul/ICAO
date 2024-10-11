import React from "react";
import { annexes } from "../utils/data";

const ProvisionList = ({ type }) => {
  return (
    <div className="container mt-4">
      <h3>Select {type}</h3>
      {annexes.map((annex, index) => (
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
