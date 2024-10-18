import React, { useState, useEffect } from "react";
import { annexes, Chapters, Provisions } from "../utils/data";
import p1 from "../assests/p2.pdf";
import p2 from "../assests/p4.pdf";
import PdfViewer from "./PdfViewer";
import OpenPdf from "./OpenPdf";

const ProvisionList = ({ type, selectedAnnexes, setSelectedAnnexes }) => {
  const [arrayType, setArrayType] = useState([]);
  const [openPdf, setOpenPdf] = useState(false);
  const [selectedAnnex, setSelectedAnnex] = useState(null);

  useEffect(() => {
    if (type === "annexes") {
      setArrayType(annexes);
    } else if (type === "Chapters") {
      setArrayType(Chapters);
    } else {
      setArrayType(Provisions);
    }
  }, [type]);

  const handleRadioChange = (elem) => {
    setSelectedAnnex(elem);
    setSelectedAnnexes([elem]);
  };

  return (
    <div className="container mt-4">
      <h3>List of {type}</h3>
      {arrayType.map((elem, index) => (
        <div key={index} className="form-check mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {type !== "Provision" && (
                <input
                  type="radio"
                  className="form-check-input"
                  id={`annex-${index}`}
                  name="annex"
                  checked={selectedAnnex === elem}
                  onChange={() => handleRadioChange(elem)}
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
