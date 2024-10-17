import React, { useEffect, useState } from "react";

const Confirm = () => {
  const [progressData, setProgressData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("progressData");
    if (data) {
      setProgressData(JSON.parse(data));
    }

    console.log(" data ", JSON.parse(data));
  }, []);

  if (!progressData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px 20px" }}>
      <div style={{ marginBottom: "40px" }}>
        <h3>Document Type</h3>
        <div className="col-md-3 mb-3 mt-3" style={{ marginLeft: 20 }}>
          <div className="card border-primary">
            <div className="card-body">
              <h5 className="card-title text-primary">
                {progressData.selectedAnnexPan == "annex" ? "ANNEX" : "PANS"}
              </h5>
              <p className="card-text">
                The establishment and maintenance of international Standards and
                Recommended Practices (SARPs).
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  checked="true"
                  type="radio"
                  id="annexRadio"
                  name="selection"
                  value={progressData.selectedAnnexPan}
                  readOnly
                />
                <label className="form-check-label" htmlFor="annexRadio">
                  {progressData.selectedAnnexPan == "annex" ? "ANNEX" : "PANS"}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h3>Selected Annex</h3>
        <div
          className="form-check"
          style={{ marginLeft: 20, height: 50, marginTop: 30 }}
        >
          <input
            type="radio"
            className="form-check-input"
            id="Sannex"
            name="annex"
            checked="true"
            readOnly
          />
          <label className="form-check-label" htmlFor="annexRadio">
            {progressData.selectedAnnexes}
          </label>
          <hr />
        </div>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h3>Annex Version</h3>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={progressData.stateLetterInfo.title}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="language">Language</label>
                <select
                  className="form-control"
                  id="language"
                  value={progressData.stateLetterInfo.language}
                  readOnly
                >
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Espanol">Espanol</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="edition" className="form-label">
                  Edition
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edition"
                  value={progressData.stateLetterInfo.edition}
                  readOnly
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="document">Document</label>
                <select className="form-control" id="document">
                  <option value="1">
                    {progressData.stateLetterInfo.document || "No Document"}
                  </option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="stateLetterUploadDate" className="form-label">
                  State Letter Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="stateLetterUploadDate"
                  value={progressData.stateLetterInfo.stateLetterUploadDate}
                  readOnly
                />
              </div>
            </div>

            <div className="mb-3 col-md-4">
              <label htmlFor="chosenFile" className="form-label">
                Chosen File
              </label>
              <input
                type="text"
                className="form-control"
                id="chosenFile"
                value={
                  progressData.stateLetterInfo.filePath || "No file selected"
                }
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <div>
          <h3>Selected Chapters</h3>
          <div
            className="form-check"
            style={{ marginLeft: 10, height: 50, marginTop: 30 }}
          >
            {progressData.chapters.map((chapter, index) => (
              <div key={index}>
                <label className="form-check-label" htmlFor={`chapter${index}`}>
                  {chapter}
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "green", marginLeft: 100 }}
                  ></i>
                </label>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 120, height: 50 }}>
        <h3>List of Provision</h3>
        <div style={{ marginLeft: 20, height: 50 }}>
          <ul>
            <li>
              <label className="form-check-label" htmlFor="provision1">
                Title 1.0 | ABBREVIATIONS (used in this Annex) AFIS Aerodrome
                flight information service
              </label>
            </li>
            <li>
              <label className="form-check-label" htmlFor="provision2">
                Title 1.0 | ABBREVIATIONS (used in this Annex) AFIS Aerodrome
                flight information service
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
