import React, { useState, useEffect } from "react";
import { annexes, Chapters, Provisions } from "../utils/data";
import p1 from "../assests/p2.pdf";
import p2 from "../assests/p4.pdf";
import PdfViewer from "./PdfViewer";
import OpenPdf from "./OpenPdf";

const ProvisionList = ({ type, selectedAnnexes, setSelectedAnnexes }) => {
  const [arrayType, setArrayType] = useState([]);
  const [openPdf, setOpenPdf] = useState(false);

  useEffect(() => {
    if (type === "annexes") {
      setArrayType(annexes);
    } else if (type === "Chapters") {
      setArrayType(Chapters);
    } else {
      setArrayType(Provisions);
    }
  }, [type]);

  const handleCheckboxChange = (elem) => {
    if (selectedAnnexes.includes(elem)) {
      setSelectedAnnexes(selectedAnnexes.filter((item) => item !== elem));
    } else {
      setSelectedAnnexes([...selectedAnnexes, elem]);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Select {type}</h3>
      {arrayType.map((elem, index) => (
        <div key={index} className="form-check mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {type !== "Provision" && (
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`annex-${index}`}
                  checked={selectedAnnexes.includes(elem)} // Check if it's selected
                  onChange={() => handleCheckboxChange(elem)} // Handle checkbox change
                />
              )}

              <label className="form-check-label" htmlFor={`annex-${index}`}>
                {elem}
              </label>
            </div>

            {type === "Provision" && (
              <button
                className="btn btn-primary ms-auto"
                onClick={() => setOpenPdf(true)}
              >
                View
              </button>
            )}
          </div>
          <hr />
        </div>
      ))}

      {openPdf && <OpenPdf openPdf={openPdf} setOpenPdf={setOpenPdf} />}
    </div>
  );
};

export default ProvisionList;
