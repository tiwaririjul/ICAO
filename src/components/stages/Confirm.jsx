import React from "react";

const Confirm = () => {
  return (
    <div style={{ padding: "20px 20px" }}>
      <div style={{ marginBottom: "40px" }}>
        <h3>Document Type</h3>
        <div className="col-md-3 mb-3 mt-3" style={{ marginLeft: 20 }}>
          <div className="card border-primary">
            <div className="card-body">
              <h5 className="card-title text-primary">ANNEXES</h5>
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
                  value="annex"
                />
                <label className="form-check-label" htmlFor="annexRadio">
                  Selected Annexes
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
          />
          <label className="form-check-label" htmlFor="annexRadio">
            This is Selected Annex
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
                  value="sampleTitle"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="language">Language</label>
                <select className="form-control" id="language" value="English">
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
                  value="sample edition"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="document">Document</label>
                <select className="form-control" id="document">
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
                />
              </div>
            </div>

            <div className="mb-3 col-md-4">
              <label htmlFor="edition" className="form-label">
                Chosen File
              </label>
              <input
                type="text"
                className="form-control"
                id="edition"
                value="sample File"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ marginBottom: "40px" }}>
        <h3>Selected Chapters</h3>
        <div className="form-check" style={{ marginLeft: 20, height: 50 }}>

          <label className="form-check-label" htmlFor="annexRadio">
            This is Selected Chapters1
          </label>
          <hr />
          <label className="form-check-label" htmlFor="annexRadio">
            This is Selected Chapters2
          </label>
          <hr />
          <label className="form-check-label" htmlFor="annexRadio">
            This is Selected Chapters3
          </label>
        </div>
      </div> */}

      <div style={{ marginBottom: "40px" }}>
        {/* Other sections of the component remain unchanged */}

        <div>
          <h3>Selected Chapters</h3>
          <div
            className="form-check"
            style={{ marginLeft: 10, height: 50, marginTop: 30 }}
          >
            <label className="form-check-label" htmlFor="chapter1">
              This is Selected Chapter 1
              <i
                className="fa fa-check-circle"
                style={{ color: "green", marginLeft: 100 }}
              ></i>
            </label>
            <hr />
            <label className="form-check-label" htmlFor="chapter2">
              This is Selected Chapter 2
              <i
                className="fa fa-check-circle"
                style={{ color: "green", marginLeft: 100 }}
              ></i>
            </label>
            <hr />
            <label className="form-check-label" htmlFor="chapter3">
              This is Selected Chapter 3
            </label>
          </div>
        </div>

        {/* Other sections of the component remain unchanged */}
      </div>

      <div style={{ marginTop: 120, height: 50 }}>
        <h3>List of Provision</h3>
        <div style={{ marginLeft: 20, height: 50 }}>
          <ul>
            <li>
              <label className="form-check-label" htmlFor="annexRadio">
                This is Provision 1
              </label>
            </li>
            <li>
              <label className="" htmlFor="annexRadio">
                This is Provision 2
              </label>
            </li>
          </ul>
        </div>
      </div>

      <button
        type="button"
        class="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
        style={{ marginLeft: 1300 }}
      >
        CONFIRM
      </button>
    </div>
  );
};

export default Confirm;
