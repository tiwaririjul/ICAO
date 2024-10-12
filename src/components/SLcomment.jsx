// import React from "react";
// import PdfViewer from "./PdfViewer";
// import pdfUrl from "../assests/ticket.pdf";

// const SLComment = () => {
//   return (
//     <>
//       <PdfViewer pdfUrl={pdfUrl} />

//       <div className="container mt-4 col-md-4">
//         <form>
//           {/* Radio Buttons for Compliance */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Compliance Options</label>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="compliance"
//                 id="noDifference"
//                 value="noDifference"
//               />
//               <label className="form-check-label" htmlFor="noDifference">
//                 No difference
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="compliance"
//                 id="significantDifference"
//                 value="significantDifference"
//               />
//               <label
//                 className="form-check-label"
//                 htmlFor="significantDifference"
//               >
//                 Significant Difference
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="compliance"
//                 id="optionA"
//                 value="optionA"
//               />
//               <label className="form-check-label" htmlFor="optionA">
//                 A. More exacting or exceeds
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="compliance"
//                 id="optionB"
//                 value="optionB"
//               />
//               <label className="form-check-label" htmlFor="optionB">
//                 B. Different in character or other means of compliance
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="compliance"
//                 id="optionC"
//                 value="optionC"
//               />
//               <label className="form-check-label" htmlFor="optionC">
//                 C. Less protective or partially implemented or not implemented
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="compliance"
//                 id="notApplicable"
//                 value="notApplicable"
//               />
//               <label className="form-check-label" htmlFor="notApplicable">
//                 Not applicable
//               </label>
//             </div>
//           </div>

//           {/* State Reference Text Area */}
//           <div className="mb-3">
//             <label htmlFor="stateReference" className="form-label">
//               State Reference
//             </label>
//             <textarea
//               className="form-control"
//               id="stateReference"
//               rows="2"
//               placeholder="Enter state reference here"
//             ></textarea>
//           </div>

//           {/* Details of Difference Text Area */}
//           <div className="mb-3">
//             <label htmlFor="detailsOfDifference" className="form-label">
//               Details of Difference
//             </label>
//             <textarea
//               className="form-control"
//               id="detailsOfDifference"
//               rows="2"
//               placeholder="Please describe the difference clearly and concisely"
//             ></textarea>
//           </div>

//           {/* Remarks Text Area */}
//           <div className="mb-3">
//             <label htmlFor="remarks" className="form-label">
//               Remarks
//             </label>
//             <textarea
//               className="form-control"
//               id="remarks"
//               rows="2"
//               placeholder="Please indicate reasons for the difference and any planned date for implementation"
//             ></textarea>
//           </div>

//           {/* Save Button */}
//           <button type="submit" className="btn btn-primary w-100">
//             SAVE ENTRY
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default SLComment;
import React from "react";
import PdfViewer from "./PdfViewer";
import pdfUrl from "../assests/ticket.pdf";
// ../assests/ticket.pdf

const SLComment = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* PdfViewer Column */}
        <div className="col-md-6 mb-4">
          <div className="pdf-container border rounded p-3">
            <PdfViewer pdfUrl={pdfUrl} />
          </div>
        </div>

        {/* SLComment Form Column */}
        <div className="col-md-6">
          <form>
            {/* Radio Buttons for Compliance */}
            <div className="mb-3">
              <label className="form-label fw-bold">Compliance Options</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="compliance"
                  id="noDifference"
                  value="noDifference"
                />
                <label className="form-check-label" htmlFor="noDifference">
                  No difference
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="compliance"
                  id="significantDifference"
                  value="significantDifference"
                />
                <label
                  className="form-check-label"
                  htmlFor="significantDifference"
                >
                  Significant Difference
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="compliance"
                  id="optionA"
                  value="optionA"
                />
                <label className="form-check-label" htmlFor="optionA">
                  A. More exacting or exceeds
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="compliance"
                  id="optionB"
                  value="optionB"
                />
                <label className="form-check-label" htmlFor="optionB">
                  B. Different in character or other means of compliance
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="compliance"
                  id="optionC"
                  value="optionC"
                />
                <label className="form-check-label" htmlFor="optionC">
                  C. Less protective or partially implemented or not implemented
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="compliance"
                  id="notApplicable"
                  value="notApplicable"
                />
                <label className="form-check-label" htmlFor="notApplicable">
                  Not applicable
                </label>
              </div>
            </div>

            {/* State Reference Text Area */}
            <div className="mb-3">
              <label htmlFor="stateReference" className="form-label">
                State Reference
              </label>
              <textarea
                className="form-control"
                id="stateReference"
                rows="2"
                placeholder="Enter state reference here"
              ></textarea>
            </div>

            {/* Details of Difference Text Area */}
            <div className="mb-3">
              <label htmlFor="detailsOfDifference" className="form-label">
                Details of Difference
              </label>
              <textarea
                className="form-control"
                id="detailsOfDifference"
                rows="2"
                placeholder="Please describe the difference clearly and concisely"
              ></textarea>
            </div>

            {/* Remarks Text Area */}
            <div className="mb-3">
              <label htmlFor="remarks" className="form-label">
                Remarks
              </label>
              <textarea
                className="form-control"
                id="remarks"
                rows="2"
                placeholder="Please indicate reasons for the difference and any planned date for implementation"
              ></textarea>
            </div>

            {/* Save Button */}
            <button type="submit" className="btn btn-primary w-100">
              SAVE ENTRY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SLComment;
