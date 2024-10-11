import React, { useState } from "react";
// import { ProgressBar } from "react-bootstrap";
import "../App.css";
import Stages from "./Stages";

const Progress = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const ancProgresBarContents = [
    {
      index: 1,
      content: "Document Type",
    },
    {
      index: 2,
      content: "Select Annex",
    },
    {
      index: 3,
      content: "Annex Version",
    },
    {
      index: 4,
      content: "Document Type",
    },
    {
      index: 5,
      content: "Annex Section",
    },
    {
      index: 6,
      content: "Confirm",
    },
  ];

  // Handler for next step
  const handleNext = () => {
    if (currentStep < ancProgresBarContents.length) {
      setCurrentStep(currentStep + 1);
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
        {/* <div class="step active completed">
          <div class="step-icon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <div class="step-text">
            Document Type <i class="fas fa-check-circle"></i>
          </div>
        </div> */}

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

      <Stages stage={currentStep} />

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
