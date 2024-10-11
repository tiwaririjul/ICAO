import React, { useState } from "react";

const Stages = ({ stage }) => {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Handler for radio button changes
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const annexes = [
    "Annex 1 PERSONNEL LICENSING",
    "Annex 2 RULES OF THE AIR",
    "Annex 3 METEOROLOGICAL SERVICE FOR INTERNATIONAL AIR NAVIGATION PART I - CORE SARPs",
    "Annex 4 AERONAUTICAL CHARTS",
    "Annex 5 UNITS OF MEASUREMENT TO BE USED IN AIR AND GROUND OPERATIONS",
    "Annex 6 OPERATION OF AIRCRAFT PART I INTERNATIONAL COMMERICIAL AIR TRANSPORT - AEROPLANES",
    "Annex 6 OPERATION OF AIRCRAFT PART II INTERNATIONAL GENERAL AVIATION - AEROPLANES",
    "Annex 6 OPERATION OF AIRCRAFT PART III INTERNATIONAL OPERATIONS - HELICOPTERS",
    "Annex 6 OPERATION OF AIRCRAFT PART IV - International Operations - Remotely Piloted Aircraft Systems",
    "Annex 7 AIRCRAFT NATIONALITY AND REGISTRATION MARKS",
    "Annex 8 AIRWORTHINESS OF AIRCRAFT",
    "Annex 9 FACILITATION",
    "Annex 10 AERONAUTICAL TELECOMMUNICATIONS VOLUME I RADIO NAVIGATION AIDS",
    "Annex 10 AERONAUTICAL TELECOMMUNICATIONS VOLUME II COMMUNICATION PROCEDURES INCLUDING THOSE WITH PANS STATUS",
    "Annex 10 AERONAUTICAL TELECOMMUNICATIONS VOLUME III PART I - DIGITAL DATA COMMUNICATION SYSTEMS; PART II - VOICE COMMUNICATION SYSTEMS",
    "Annex 10 AERONAUTICAL TELECOMMUNICATIONS VOLUME IV SURVEILLANCE RADAR AND COLLISION AVOIDANCE SYSTEMS",
    "Annex 10 AERONAUTICAL TELECOMMUNICATIONS VOLUME V AERONAUTICAL RADIO FREQUENCY SPECTRUM UTILIZATION",
  ];

  switch (stage) {
    case 1:
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card border-primary">
                <div className="card-body">
                  <h5 className="card-title text-primary">ANNEXES</h5>
                  <p className="card-text">
                    The establishment and maintenance of international Standards
                    and Recommended Practices (SARPs).
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="annexRadio"
                      name="selection"
                      value="annex"
                      checked={selectedOption === "annex"}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="annexRadio">
                      Select Annexes
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card border-secondary">
                <div className="card-body">
                  <h5 className="card-title text-secondary">PANS</h5>
                  <p className="card-text">
                    The establishment and maintenance of international Standards
                    and Recommended Practices (PANS).
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="pansRadio"
                      name="selection"
                      value="pans"
                      checked={selectedOption === "pans"}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="pansRadio">
                      Select PANS
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="container mt-4">
          <h3>Select Annexes</h3>
          {annexes.map((annex, index) => (
            <div key={index} className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id={`annex-${index}`}
              />
              <label className="form-check-label" htmlFor={`annex-${index}`}>
                {annex}
              </label>
              <hr />
            </div>
          ))}
        </div>
      );
    default:
      return (
        <div className="container">No content available for this stage</div>
      );
  }
};

export default Stages;
