import React, { useState, useEffect } from "react";

// Sample data for states
const states = [
  { name: "India", pending: 12, status: "Pending", progress: 25 },
  { name: "Canada", pending: 5, status: "Partially Completed", progress: 65 },
  { name: "Australia", pending: 0, status: "Completed", progress: 100 },
];

// Function to render buttons based on status
const StatusButton = ({ status }) => {
  let className = "btn ";
  if (status === "Completed") {
    className += "btn-success";
  } else if (status === "Partially Completed") {
    className += "btn-warning";
  } else {
    className += "btn-danger";
  }
  return <button className={className}>{status}</button>;
};

// Component for each row
const StateRow = ({ name, pending, status, progress }) => (
  <tr>
    <td>{name}</td>
    <td>
      <StatusButton status={status} />
    </td>
    <td>{pending}</td>
    <td>
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress}%
        </div>
      </div>
    </td>
  </tr>
);

// Main table component
const SLtrack = () => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const stateLetterData = localStorage.getItem("progressData");
    if (stateLetterData) {
      setDetail(JSON.parse(stateLetterData)); // Assuming it's stored as JSON
    }
  }, []); // This useEffect will only run once when the component mounts

  useEffect(() => {
    console.log("locLSTORAGE DAYA ", detail);
  }, [detail]); // Log detail whenever it changes

  return (
    <div className="container mt-5">
      <h3>State Progress Overview</h3>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>State Name</th>
            <th>Status</th>
            <th>Pending</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {states.map((state, idx) => (
            <StateRow key={idx} {...state} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SLtrack;
