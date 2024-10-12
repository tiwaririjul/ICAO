import "./App.css";
import NavBar from "./components/NavBar";
import PdfViewer from "./components/PdfViewer";
import Progress from "./components/Progress";
import SLinputs from "./components/SLinputs";
import { Worker } from "@react-pdf-viewer/core"; // Import the main component
import { Viewer } from "@react-pdf-viewer/core";
import ticketPdf from "./assests/SL.2024.31.en.pdf";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

function App() {
  // const pdfUrl = "./assests/ticket.pdf";

  return (
    <>
      {/* <NavBar />
      <Progress /> */}
      {/* <SLinputs /> */}

      {/* <PdfViewer pdfUrl={pdfUrl} /> */}

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        {/* <Viewer fileUrl={ticketPdf} />; */}
        <NavBar />
        <SLinputs />
        <PdfViewer pdfUrl={ticketPdf} />
      </Worker>
    </>
  );
}

export default App;
