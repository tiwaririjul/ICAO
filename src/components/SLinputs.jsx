import React, { useState, useEffect } from "react";
import SLComment from "./SLcomment";
import { pdfContent } from "../utils/data";

const SLinputs = () => {
  // Initialize state with the first PDF in the array
  const [selectedPdf, setSelectedPdf] = useState(pdfContent[0].content);
  const [selectedIndex, setSelectedIndex] = useState(pdfContent[0].index);

  // Function to handle dropdown change
  const handlePdfChange = (event) => {
    const selectedIndex = parseFloat(event.target.value);
    setSelectedIndex(selectedIndex); // Update the selected index
  };

  // useEffect to re-render the component when selectedIndex changes
  useEffect(() => {
    const selectedPdfObject = pdfContent.find(
      (elem) => elem.index === selectedIndex
    );
    if (selectedPdfObject) {
      setSelectedPdf(selectedPdfObject); // Set the selected PDF content based on the index
    }
  }, [selectedIndex]); // Dependency on selectedIndex

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="documentType">Document Type</label>
              <select className="form-control" id="documentType">
                <option value="annex">Annex</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="document">Document</label>
              <select className="form-control" id="document">
                <option value="1">Annex 1 - PERSONNEL LICENSING</option>
                <option value="2">Annex 2 - PERSONNEL LICENSING</option>
                <option value="3">Annex 3 - PERSONNEL LICENSING</option>
                <option value="4">Annex 4 - PERSONNEL LICENSING</option>
                <option value="5">Annex 5 - PERSONNEL LICENSING</option>
                <option value="6">Annex 6 - PERSONNEL LICENSING</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="documentVersion">Document Version</label>
              <select className="form-control" id="documentVersion">
                <option value="amendment178[178]">Amendment 178 [178]</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="documentSection">Document Section</label>
              <select className="form-control" id="documentSection">
                <option value="abbreviations">ABBREVIATIONS</option>
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3">
              <label htmlFor="status">Status</label>
              <select className="form-control" id="status">
                <option value="allstatus">--- All Status ---</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 offset-md-4 d-flex justify-content-around">
        <div className="btn-group">
          <button className="btn btn-light">
            <i className="fas fa-angle-double-left"></i>
          </button>
          <button className="btn btn-light">
            <i className="fas fa-angle-left"></i>
          </button>
          <select
            className="btn btn-light"
            id="status"
            onChange={handlePdfChange} // Handle change on dropdown selection
          >
            {pdfContent.map((elem) => (
              <option key={elem.index} value={elem.index}>
                {elem.index}
              </option>
            ))}
          </select>

          <button className="btn btn-light">
            <i className="fas fa-angle-right"></i>
          </button>
          <button className="btn btn-light">
            <i className="fas fa-angle-double-right"></i>
          </button>
        </div>
        <div></div>
      </div>

      {/* Render the SLComment component and pass the selectedPdf content */}
      <SLComment selectedPdf={selectedPdf} />
    </>
  );
};

export default SLinputs;
