import React, { useState, useEffect } from "react";
import SLComment from "./SLcomment";
import { useParams } from "react-router-dom";
import SLtrack from "./SLtrack";
import { annexData } from "../utils/data";
import STable from "./STable";

const SLinputs = () => {
  const { type } = useParams();
  const [daysLeft, setDaysLeft] = useState(null);
  const [stateLetterUploadDate, setStateLetterUploadDate] = useState(null);
  const [selectedAnnexId, setSelectedAnnexId] = useState(annexData[0].annexId);
  const [selectedChapterId, setSelectedChapterId] = useState(
    annexData[0].chapters[0].chapterId
  );
  const [selectedProvision, setSelectedProvision] = useState(
    annexData[0].chapters[0].provisions[0]
  );
  const [provisionIndex, setProvisionIndex] = useState(0);

  const handleAnnexChange = (event) => {
    const annexId = parseInt(event.target.value);
    setSelectedAnnexId(annexId);
    const firstChapter = annexData.find((annex) => annex.annexId === annexId)
      .chapters[0];
    setSelectedChapterId(firstChapter.chapterId);
    setSelectedProvision(firstChapter.provisions[0]);
    setProvisionIndex(0);
  };

  const handleChapterChange = (event) => {
    const chapterId = parseInt(event.target.value);
    setSelectedChapterId(chapterId);
    const selectedChapter = annexData
      .find((annex) => annex.annexId === selectedAnnexId)
      .chapters.find((chapter) => chapter.chapterId === chapterId);
    setSelectedProvision(selectedChapter.provisions[0]);
    setProvisionIndex(0);
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
    const newIndex = selectedChapter.provisions.findIndex(
      (provision) => provision.provisionId === provisionId
    );
    setProvisionIndex(newIndex);
  };

  const handleArrowClick = (direction) => {
    const selectedChapter = annexData
      .find((annex) => annex.annexId === selectedAnnexId)
      .chapters.find((chapter) => chapter.chapterId === selectedChapterId);
    const provisions = selectedChapter.provisions;

    let newIndex = provisionIndex;

    if (direction === "left" && provisionIndex > 0) {
      newIndex = provisionIndex - 1;
    } else if (
      direction === "right" &&
      provisionIndex < provisions.length - 1
    ) {
      newIndex = provisionIndex + 1;
    }

    setProvisionIndex(newIndex);
    setSelectedProvision(provisions[newIndex]);
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
    setProvisionIndex(0);
  };

  useEffect(() => {
    const selectedChapter = annexData
      .find((annex) => annex.annexId === selectedAnnexId)
      .chapters.find((chapter) => chapter.chapterId === selectedChapterId);
    setSelectedProvision(selectedChapter.provisions[0]);
  }, [selectedChapterId, selectedAnnexId]);

  const fetchProgressData = () => {
    const progressData = JSON.parse(localStorage.getItem("progressData"));
    if (progressData && progressData.stateLetterInfo) {
      setStateLetterUploadDate(
        progressData.stateLetterInfo.stateLetterUploadDate
      );
    }
  };

  useEffect(() => {
    if (stateLetterUploadDate) {
      const uploadDate = new Date(stateLetterUploadDate);
      const dueDate = new Date(uploadDate);
      dueDate.setDate(uploadDate.getDate() + 90);

      const currentDate = new Date();
      const timeDifference = dueDate - currentDate;
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      setDaysLeft(daysRemaining);
    }
  }, [stateLetterUploadDate]);

  useEffect(() => {
    fetchProgressData();
  }, []);

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

            {type !== "secretriat" && type != "anc" && (
              <div className="col-md-12 d-flex justify-content-end">
                <div
                  style={{
                    backgroundColor: "#ffefc1",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#d9534f",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    marginTop: "20px",
                  }}
                >
                  Days Left: {daysLeft !== null ? daysLeft : "Calculating..."}
                </div>
              </div>
            )}

            <div className="col-md-6 offset-md-4 d-flex justify-content-around mt-5">
              <div className="btn-group">
                <button
                  className="btn btn-light"
                  onClick={() => handleArrowClick("left")}
                >
                  <i className="fas fa-angle-double-left"></i>
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => handleArrowClick("left")}
                >
                  <i className="fas fa-angle-left"></i>
                </button>
                <select
                  className="btn btn-light"
                  id="status"
                  onChange={handlePdfChange}
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

                <button
                  className="btn btn-light"
                  onClick={() => handleArrowClick("right")}
                >
                  <i className="fas fa-angle-right"></i>
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => handleArrowClick("right")}
                >
                  <i className="fas fa-angle-double-right"></i>
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {type === "secretriat" && type !== "slview" && (
        <div style={{ margin: "70px 50px" }}>
          <STable provsionId={selectedProvision.provisionId} />
        </div>
      )}

      {console.log(selectedProvision)}
      <SLComment
        selectedPdf={selectedProvision}
        selectedAnnexId={selectedAnnexId}
        selectedChapterId={selectedChapterId}
        selectedProvision={selectedProvision}
        userType={type}
      />
    </>
  );
};

export default SLinputs;
