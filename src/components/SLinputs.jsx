import React, { useState, useEffect } from "react";
import SLComment from "./SLcomment";
import { useParams } from "react-router-dom";
import SLtrack from "./SLtrack";
import { annexData } from "../utils/data";

// Sample annex data structure

const SLinputs = () => {
  const { type } = useParams();

  const [selectedAnnexId, setSelectedAnnexId] = useState(annexData[0].annexId);
  const [selectedChapterId, setSelectedChapterId] = useState(
    annexData[0].chapters[0].chapterId
  );
  const [selectedProvision, setSelectedProvision] = useState(
    annexData[0].chapters[0].provisions[0]
  );

  const [stateComment, setStateComment] = useState();

  const handleAnnexChange = (event) => {
    const annexId = parseInt(event.target.value);
    setSelectedAnnexId(annexId);
    const firstChapter = annexData.find((annex) => annex.annexId === annexId)
      .chapters[0];
    setSelectedChapterId(firstChapter.chapterId);
    setSelectedProvision(firstChapter.provisions[0]);
  };

  const handleChapterChange = (event) => {
    const chapterId = parseInt(event.target.value);
    setSelectedChapterId(chapterId);
    const selectedChapter = annexData
      .find((annex) => annex.annexId === selectedAnnexId)
      .chapters.find((chapter) => chapter.chapterId === chapterId);
    setSelectedProvision(selectedChapter.provisions[0]);
  };

  const handleProvisionChange = (event) => {
    const provisionId = parseInt(event.target.value);
    const selectedChapter = annexData
      .find((annex) => annex.annexId === selectedAnnexId)
      .chapters.find((chapter) => chapter.chapterId === selectedChapterId);
    const selectedProvision = selectedChapter.provisions.find(
      (provision) => provision.provisionId === provisionId
    );
    setSelectedProvision(selectedProvision);
  };

  const handlePdfChange = (event) => {
    const selectedProvisionId = parseInt(event.target.value);
    const selectedChapter = annexData
      .find((annex) => annex.annexId === selectedAnnexId)
      .chapters.find((chapter) => chapter.chapterId === selectedChapterId);
    const selectedProvision = selectedChapter.provisions.find(
      (provision) => provision.provisionId === selectedProvisionId
    );
    setSelectedProvision(selectedProvision);
  };

  useEffect(() => {
    const selectedChapter = annexData
      .find((annex) => annex.annexId === selectedAnnexId)
      .chapters.find((chapter) => chapter.chapterId === selectedChapterId);
    setSelectedProvision(selectedChapter.provisions[0]);
  }, [selectedChapterId, selectedAnnexId]);

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="documentType">Document Type</label>
              <select className="form-control" id="documentType">
                <option value="annex">Annex</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="document">Annex</label>
              <select
                className="form-control"
                id="document"
                onChange={handleAnnexChange}
              >
                {annexData.map((annex) => (
                  <option key={annex.annexId} value={annex.annexId}>
                    {annex.annexName}
                  </option>
                ))}
              </select>
            </div>

            {/* Chapter dropdown */}
            <div className="col-md-3">
              <label htmlFor="documentVersion">Chapter</label>
              <select
                className="form-control"
                id="documentVersion"
                onChange={handleChapterChange}
              >
                {annexData
                  .find((annex) => annex.annexId === selectedAnnexId)
                  .chapters.map((chapter) => (
                    <option key={chapter.chapterId} value={chapter.chapterId}>
                      {chapter.chapterName}
                    </option>
                  ))}
              </select>
            </div>

            {/* Provision dropdown */}
            <div className="col-md-3">
              <label htmlFor="documentSection">Provision</label>
              <select
                className="form-control"
                id="documentSection"
                onChange={handleProvisionChange}
              >
                {annexData
                  .find((annex) => annex.annexId === selectedAnnexId)
                  .chapters.find(
                    (chapter) => chapter.chapterId === selectedChapterId
                  )
                  .provisions.map((provision) => (
                    <option
                      key={provision.provisionId}
                      value={provision.provisionId}
                    >
                      {provision.provisionName}
                    </option>
                  ))}
              </select>
            </div>
            {/* <div className="col-md-3">
              <label htmlFor="status">Provision ID</label>
              <select
                className="btn btn-light"
                id="status"
                onChange={handlePdfChange} // Handle change on dropdown selection
              >
                llll
              </select>
            </div> */}

            <div className="col-md-6 offset-md-4 d-flex justify-content-around mt-5">
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
                  {annexData
                    .find((annex) => annex.annexId === selectedAnnexId)
                    .chapters.find(
                      (chapter) => chapter.chapterId === selectedChapterId
                    )
                    .provisions.map((provision) => (
                      <option
                        key={provision.provisionId}
                        value={provision.provisionId}
                      >
                        {provision.provisionId}
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
          </div>
        </div>
      </div>

      {/* {annexData
                  .find((annex) => annex.annexId === selectedAnnexId)
                  .chapters.find(
                    (chapter) => chapter.chapterId === selectedChapterId
                  )
                  .provisions.map((provision) => (
                    <option
                      key={provision.provisionId}
                      value={provision.provisionId}
                    >
                      {provision.provisionId}
                    </option>
                  ))} */}

      {/* PDF viewer or content display */}
      {/* <div style={{ margin: "20px" }}>
        <h5>Selected Provision PDF Path: {selectedProvision.pdfPath}</h5>
      </div> */}

      {/* Show comments and track based on provision */}
      {type === "secretriat" && (
        <div style={{ margin: "70px 50px" }}>
          <SLtrack />
        </div>
      )}

      {console.log(selectedProvision)}

      {/* Render SLComment component and pass the selected provision */}
      <SLComment
        selectedPdf={selectedProvision}
        selectedAnnexId={selectedAnnexId}
        selectedChapterId={selectedChapterId}
        selectedProvision={selectedProvision}
      />
    </>
  );
};

export default SLinputs;
