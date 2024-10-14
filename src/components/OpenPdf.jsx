import React from "react";
import PdfViewer from "./PdfViewer";
import p2 from "../assests/p2.pdf";

const OpenPdf = ({ OpenPdf, setOpenPdf }) => {
  return (
    <div>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">PDF Viewer</h5>
            </div>
            <div className="modal-body">
              <PdfViewer pdfUrl={p2} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setOpenPdf(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPdf;
