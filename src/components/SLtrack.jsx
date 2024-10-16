import React, { useState } from "react";

const SLtrack = () => {
  // State to track if the details should be shown or not
  const [showDetails, setShowDetails] = useState(false);
  const [showDetailsc, setShowDetailsc] = useState(false);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <div className="approval-container">
          {/* Clickable div that toggles the date display */}
          <div
            className="approval-step approval-initiated status-Green"
            onClick={() => setShowDetails(!showDetails)} // Toggle details on click
            style={{ cursor: "pointer" }} // Add pointer to show it's clickable
          >
            <i className="fas fa-check"></i> State letter Upload and Parse
          </div>

          {/* Arrow and other steps */}
          <div className="arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
          <div
            className="approval-step history status-Blue"
            onClick={() => setShowDetailsc(!showDetailsc)} // Toggle details on click
            style={{ cursor: "pointer" }} // Add pointer to show it's clickable
          >
            <i className="fas fa-history"></i> State Comments
          </div>
          <div className="arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
          <div className="approval-step director-approval status-Gray">
            <i className="fas fa-lock"></i> State Comment Analysis
          </div>
        </div>
      </div>

      {/* Show the first set of details when State letter Upload and Parse is clicked */}
      {showDetails && (
        <div class="col-md-6" style={{ marginTop: 40 }}>
          <p>Created: 16-03-2019</p>
          <p>Sent: 17-03-2019</p>
        </div>
      )}

      {/* Show the second set of details and table when State Comments is clicked */}
      {showDetailsc && (
        <div class="col-md-6" style={{ marginTop: 40 }}>
          <p>Date count Down: 16-03-2019</p>
          <p>Total Provision: 12</p>

          {/* Table added below the paragraphs */}
          <table className="table table-bordered mt-3">
            <thead className="thead-light">
              <tr>
                <th scope="col">Country ID</th>
                <th scope="col">% Complete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IN</td>
                <td>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>US</td>
                <td>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      60%
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>FR</td>
                <td>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      85%
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>BR</td>
                <td>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      40%
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Additional Progress Bar */}
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width: "75%"}}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SLtrack;
