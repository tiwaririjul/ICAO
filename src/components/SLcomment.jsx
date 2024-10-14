import React, { useState, useEffect } from "react";
import PdfViewer from "./PdfViewer";
import { states } from "../utils/data";

const SLComment = ({ selectedPdf }) => {
  const [detail, setDetail] = useState({});
  const [selectedState, setSelectedState] = useState("");
  const [comments, setComments] = useState({
    compliance: "",
    stateReference: "",
    detailsOfDifference: "",
    remarks: "",
  });

  const handlePdfChange = (e) => {
    setSelectedState(e.target.value);
    console.log("state selected ", e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComments((prevComments) => ({
      ...prevComments,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = selectedPdf.index;
    const pdfContent = String(selectedPdf.content);

    const detailsToStore = {
      state: {
        state: selectedState,
        pdfContent: pdfContent,
        comments: comments,
        provisionNo: index,
      },
    };

    setDetail((prevDetails) => ({
      ...prevDetails,
      [index]: detailsToStore.state,
    }));

    localStorage.setItem(selectedState, JSON.stringify(detail));

    setSelectedState("");
    setComments({
      compliance: "",
      stateReference: "",
      detailsOfDifference: "",
      remarks: "",
    });
  };

  // useEffect(() => {
  //   if (Object.keys(detail).length > 0) {
  //     const lastIndex = Object.keys(detail).pop(); // Get the last index updated
  //     alert(`Saved entry for state: ${detail[lastIndex].state}`);
  //     console.log("Updated detail:", detail);
  //   }
  // }, [detail]);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* PdfViewer Column */}
        <div className="col-md-6 mb-4">
          <div className="pdf-container border rounded p-3">
            <PdfViewer pdfUrl={String(selectedPdf.content)} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="d-flex justify-content-end mb-3 pe-3">
            <select
              className="btn btn-light"
              id="status"
              value={selectedState}
              onChange={handlePdfChange}
            >
              <option value="">Select State</option>
              {states.map((elem) => (
                <option key={elem.index} value={elem.state}>
                  {elem.state}
                </option>
              ))}
            </select>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Radio Buttons for Compliance */}
            <div className="mb-3">
              <label className="form-label fw-bold">Compliance Options</label>
              {[
                "noDifference",
                "significantDifference",
                "optionA",
                "optionB",
                "optionC",
                "notApplicable",
              ].map((option) => (
                <div className="form-check" key={option}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="compliance"
                    id={option}
                    value={option}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor={option}>
                    {option}
                  </label>
                </div>
              ))}
            </div>

            {/* State Reference Text Area */}
            <div className="mb-3">
              <label htmlFor="stateReference" className="form-label">
                State Reference
              </label>
              <textarea
                className="form-control"
                id="stateReference"
                name="stateReference"
                rows="2"
                value={comments.stateReference}
                onChange={handleInputChange}
                placeholder="Enter state reference here"
              ></textarea>
            </div>

            {/* Details of Difference Text Area */}
            <div className="mb-3">
              <label htmlFor="detailsOfDifference" className="form-label">
                Details of Difference
              </label>
              <textarea
                className="form-control"
                id="detailsOfDifference"
                name="detailsOfDifference"
                rows="2"
                value={comments.detailsOfDifference}
                onChange={handleInputChange}
                placeholder="Please describe the difference clearly and concisely"
              ></textarea>
            </div>

            {/* Remarks Text Area */}
            <div className="mb-3">
              <label htmlFor="remarks" className="form-label">
                Remarks
              </label>
              <textarea
                className="form-control"
                id="remarks"
                name="remarks"
                rows="2"
                value={comments.remarks}
                onChange={handleInputChange}
                placeholder="Please indicate reasons for the difference and any planned date for implementation"
              ></textarea>
            </div>

            {/* Save Button */}
            <button type="submit" className="btn btn-primary w-100">
              SAVE ENTRY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SLComment;
