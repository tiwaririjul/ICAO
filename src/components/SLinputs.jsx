import React, { useState, useEffect } from "react";
import SLComment from "./SLcomment";
import { pdfContent } from "../utils/data";
const SLinputs = () => {
  // Initialize state with the first PDF in the array
  const [selectedPdf, setSelectedPdf] = useState(pdfContent[0].content);

  // Function to handle dropdown change
  const handlePdfChange = (event) => {
    const selectedIndex = parseFloat(event.target.value); // Get the selected index from the dropdown
    const selectedPdfObject = pdfContent.find(
      (elem) => elem.index === selectedIndex // Match the selected index
    );

    // Update state with the selected PDF content
    if (selectedPdfObject) {
      // alert(selectedPdfObject.content);
      setSelectedPdf(selectedPdfObject.content);
    }
  };

  useEffect(() => {}, [selectedPdf]);

  return (
    <>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <label for="documentType">Document Type</label>
              <select class="form-control" id="documentType">
                <option value="annex">Annex</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="document">Document</label>
              <select class="form-control" id="document">
                <option value="1">Annex 1 - PERSONNEL LICENSING</option>
                <option value="2">Annex 2 - PERSONNEL LICENSING</option>
                <option value="3">Annex 3 - PERSONNEL LICENSING</option>
                <option value="4">Annex 4 - PERSONNEL LICENSING</option>
                <option value="5">Annex 5 - PERSONNEL LICENSING</option>
                <option value="6">Annex 6 - PERSONNEL LICENSING</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="documentVersion">Document Version</label>
              <select class="form-control" id="documentVersion">
                <option value="amendment178[178]">Amendment 178 [178]</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="documentSection">Document Section</label>
              <select class="form-control" id="documentSection">
                <option value="abbreviations">ABBREVIATIONS</option>
              </select>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-3">
              <label for="status">Status</label>
              <select class="form-control" id="status">
                <option value="allstatus">--- All Status ---</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 offset-md-4 d-flex justify-content-around">
        <div className="btn-group ">
          <button className="btn btn-light">
            <i className="fas fa-angle-double-left"></i>
          </button>
          <button className="btn btn-light">
            <i className="fas fa-angle-left"></i>
          </button>
          {/* <button className="btn btn-light">1.0</button> */}
          <select class="btn btn-light" id="status" onChange={handlePdfChange}>
            {/* <option value="allstatus">1.0</option>

            {pdfContent.map((elem) => (
              <option key={elem.index} value={elem.index}>
                {elem.index}
              </option>
            ))} */}
            <option value="allstatus1">1.0</option>
            <option value="allstatus2">2.0</option>
            <option value="allstatus3">3.0</option>
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
      <SLComment />
    </>
  );
};

export default SLinputs;
