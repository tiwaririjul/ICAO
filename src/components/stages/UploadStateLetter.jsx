import React from "react";

const UploadStateLetter = ({ setStateLetterInfo, stateLetterInfo }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setStateLetterInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setStateLetterInfo((prev) => ({
      ...prev,
      filePath: file,
    }));
  };

  return (
    <>
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
                value={stateLetterInfo.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="language">Language</label>
              <select
                className="form-control"
                id="language"
                value={stateLetterInfo.language}
                onChange={handleInputChange}
              >
                <option value="1">Language</option>
                <option value="French">French</option>
                <option value="English">English</option>
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
                value={stateLetterInfo.edition}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="document">Document</label>
              <select
                className="form-control"
                id="document"
                onChange={handleInputChange}
              >
                <option value="1">version 178[178]</option>
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
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-3 col-md-4">
            <label htmlFor="filePath" className="form-label">
              Upload file
            </label>
            <input
              type="file"
              className="form-control"
              id="filePath"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadStateLetter;
