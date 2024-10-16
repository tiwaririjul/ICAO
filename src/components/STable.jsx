import React, { useEffect, useState } from "react";

const STable = ({ provsionId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!provsionId) return; // Only run if a valid provsionId is selected

    const storedDataForInd = JSON.parse(
      localStorage.getItem(`IND's'${provsionId}`)
    ); // For India
    const storedDataForAus = JSON.parse(
      localStorage.getItem(`Aus's'${provsionId}`)
    ); // For Australia
    const storedDataForUK = JSON.parse(
      localStorage.getItem(`UK's'${provsionId}`)
    ); // For the UK

    setData([storedDataForInd, storedDataForAus, storedDataForUK]);
  }, [provsionId]); // Add provsionId as a dependency

  return (
    <div className="">
      <table className="table table-hover table-bordered table-sm text-center">
        <thead>
          <tr>
            <th scope="col">State Name</th>
            <th scope="col">Compliance Options</th>
            <th scope="col">State Reference</th>
            <th scope="col">Details of Difference</th>
            <th scope="col">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 && data.some((entry) => entry) ? (
            data.map((entry, index) => (
              <tr key={index}>
                <td>{entry?.state}</td>
                <td>{entry?.comments?.compliance}</td>
                <td>{entry?.comments?.stateReference}</td>
                <td>{entry?.comments?.detailsOfDifference}</td>
                <td>{entry?.comments?.remarks}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available for the selected provision.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default STable;
