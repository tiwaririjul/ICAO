import React, { useState } from "react";
// import { ProgressBar } from "react-bootstrap";
import "../App.css";
import Stages from "./Stages";
import { ancProgresBarContents } from "../utils/data";

const Progress = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAnnexPan, setSelectedAnnexPan] = useState(null);

  // Handler for next step
  const handleNext = () => {
    if (currentStep === 1 && selectedAnnexPan === null) {
      alert("Please select an option before proceeding to the next stage.");
    } else {
      // Proceed to the next step if it's not the last step
      if (currentStep < ancProgresBarContents.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  // Handler for previous step
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div class="container">
      <div class="stepper">
        {ancProgresBarContents.map((ancProgresBarContent) => (
          <div
            className={`step  ${
              currentStep === ancProgresBarContent.index ? "active" : ""
            } ${currentStep > ancProgresBarContent.index ? "completed" : ""}`}
            key={ancProgresBarContent.index}
          >
            <div class="step-icon">
              <i class="fas fa-shopping-basket"></i>
            </div>
            <div class="step-text">
              {ancProgresBarContent.content}
              {currentStep > ancProgresBarContent.index && (
                <i class="fas fa-check-circle"></i>
              )}
            </div>
          </div>
        ))}
      </div>

      <Stages
        stage={currentStep}
        selectedAnnexPan={selectedAnnexPan}
        setSelectedAnnexPan={setSelectedAnnexPan}
      />

      <div className="navigation-buttons">
        <button onClick={handlePrev} disabled={currentStep === 1}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === ancProgresBarContents.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Progress;
