import React, { useState, useEffect } from "react";
import { annexData } from "../utils/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SLtrack = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetailsc, setShowDetailsc] = useState(false);
  const [indCount, setIndCount] = useState(0);
  const [ukCount, setUkCount] = useState(0);
  const [ausCount, setAusCount] = useState(0);
  const [percentages, setPercentages] = useState({
    indPercentage: 0,
    ukPercentage: 0,
    ausPercentage: 0,
  });
  const [overallProgress, setOverAllProgress] = useState();

  const [daysRemaining, setDaysRemaining] = useState();
  const [creationDate, setCreationDate] = useState("");
  useEffect(() => {
    let daysRemain = JSON.parse(localStorage.getItem("daysRemaining"));
    let creationDate = localStorage.getItem("creationDate");
    setDaysRemaining(daysRemain);
    setCreationDate(creationDate);

    let storedKey = JSON.parse(localStorage.getItem("storedKeysArray"));

    if (storedKey && Array.isArray(storedKey)) {
      let indCountTemp = 0;
      let ukCountTemp = 0;
      let ausCountTemp = 0;

      storedKey.forEach((key) => {
        let value = JSON.parse(localStorage.getItem(key));

        if (key.startsWith("IND")) {
          indCountTemp++;
        } else if (key.startsWith("UK")) {
          ukCountTemp++;
        } else if (key.startsWith("Aus")) {
          ausCountTemp++;
        }
      });

      const totalCount = indCountTemp + ukCountTemp + ausCountTemp;

      setIndCount(indCountTemp);
      setUkCount(ukCountTemp);
      setAusCount(ausCountTemp);

      const totalKeys = 15;

      // alert(`${totalCount} ${totalKeys}`);

      const overallPercentage = (totalCount / 45) * 100;

      setOverAllProgress(overallPercentage);

      setPercentages({
        indPercentage: (indCountTemp / totalKeys) * 100,
        ukPercentage: (ukCountTemp / totalKeys) * 100,
        ausPercentage: (ausCountTemp / totalKeys) * 100,
      });
    }
  }, []);

  const countryData = [
    {
      name: "India",
      percentage: percentages.indPercentage,
      pending: 15 - indCount,
    },
    {
      name: "UK",
      percentage: percentages.ukPercentage,
      pending: 15 - ukCount,
    },
    {
      name: "Australia",
      percentage: percentages.ausPercentage,
      pending: 15 - ausCount,
    },
  ];

  const notify = (country) => {
    alert("i am getting clikced");
    toast.success(`Notify has been sent to ${country}`);
  };

  return (
    <div className="container mt-4" style={{ marginLeft: "300px" }}>
      <div className="d-flex all approval-container ">
        <div
          className="status-badge-green"
          onClick={() => {
            setShowDetails(!showDetails);
            setShowDetailsc(false);
          }} // Toggle details on click
          style={{
            cursor: "pointer",
            clipPath: "polygon(0,0, 95% 0, 100% 50%, 95% 100%, 0 100%)", // camelCased clip-path
          }}
        >
          <i className="fas fa-check"></i> State letter Upload and Parse
        </div>

        <div
          className="status-badge-blue"
          onClick={() => {
            setShowDetailsc(!showDetailsc);
            setShowDetails(false);
          }}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-history"></i> State Comments
        </div>
        <div className="status-badge-gray">
          <i className="fas fa-lock"></i> State Comment Analysis
        </div>
      </div>

      {showDetails && (
        <div className="col-md-6" style={{ marginTop: 40 }}>
          <p>Created: {creationDate}</p>
          <p>Sent: {creationDate}</p>
        </div>
      )}

      {showDetailsc && (
        <div className="col-md-6" style={{ marginTop: 40 }}>
          <p>Date count Down: {daysRemaining} days left</p>
          <p>Total Provision: 15</p>

          <table className="table table-bordered mt-3">
            <thead className="thead-light">
              <tr>
                <th scope="col">Country ID</th>
                <th scope="col">% Complete</th>
                <th scope="col">Pending</th>
                <th scope="col">Notify </th>
              </tr>
            </thead>
            <tbody>
              {countryData.map((elem) => (
                <tr>
                  <td>{elem.name}</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: `${elem.percentage}%` }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {elem.percentage}%
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: "15px" }}>
                      <p>{`${elem.pending}`}/15</p>
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary ms-auto"
                      onClick={() => notify(elem.name)}
                    >
                      Notify
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <h3>Over all Progress</h3>
          </div>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: `${overallProgress}%` }}
            >
              {overallProgress}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SLtrack;
