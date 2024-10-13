import "./App.css";
import NavBar from "./components/NavBar";
import PdfViewer from "./components/PdfViewer";
import Progress from "./components/Progress";
import SLinputs from "./components/SLinputs";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import ticketPdf from "./assests/SL.2024.31.en.pdf";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import SLComment from "./components/SLcomment";
import SLtrack from "./components/SLtrack";

function App() {
  // const pdfUrl = "./assests/ticket.pdf";

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/progress" element={<Progress />} />
            <Route path="/state-letter" element={<SLinputs />} />
            <Route path="/track" element={<SLtrack />} />
          </Routes>
        </Router>
        {/* <SLComment /> */}
      </Worker>
    </>
  );
}

export default App;
