import React, { useState } from "react";
import { annexes } from "../utils/data";
import ProvisionList from "./ProvisionList";

const Stages = ({ stage }) => {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Handler for radio button changes
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
      return <ProvisionList type="annexes" />;
    case 3:
      return (
        // <div className="container mt-4">
        //   <h3>Select Annexes</h3>
        //   {annexes.map((annex, index) => (
        //     <div key={index} className="form-check mb-3">
        //       <input
        //         type="checkbox"
        //         className="form-check-input"
        //         id={`annex-${index}`}
        //       />
        //       <label className="form-check-label" htmlFor={`annex-${index}`}>
        //         {annex}
        //       </label>
        //       <hr />
        //     </div>
        //   ))}
        // </div>

        <>
          <div class="container mt-4">
            <div class="row">
              <div class="col-6">
                <div class="mb-3">
                  <label for="input1" class="form-label">
                    Title
                  </label>
                  <input type="text" class="form-control" id="input1" />
                </div>
                {/* <div class="mb-3">
                  <label for="input2" class="form-label">
                    Language
                  </label>
                  <input type="text" class="form-control" id="input2" />
                </div> */}

                <div class="mb-3">
                  <label for="document">Document</label>
                  <select class="form-control" id="document">
                    <option value="1">Language</option>
                    <option value="2">French</option>
                    <option value="3">English</option>
                    <option value="4">Espanol</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="input3" class="form-label">
                    Edition
                  </label>
                  <input type="text" class="form-control" id="input3" />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label for="document">Document</label>
                  <select class="form-control" id="document">
                    <option value="1">version 178[178]</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="input5" class="form-label">
                    State letter Date
                  </label>
                  <input type="date" class="form-control" id="input5" />
                </div>
              </div>
              <div class="mb-3 col-md-4">
                <label for="input6" class="form-label">
                  Upload file
                </label>
                <input type="file" class="form-control" id="input6" />
              </div>
            </div>
          </div>
        </>
      );

    case 4:
      return <ProvisionList type="Chapters" />;

    case 5:
      return <ProvisionList type="Provision" />;
    default:
      return (
        <div className="container">No content available for this stage</div>
      );
  }
};

export default Stages;
