import { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDFPopup = ({ pdfUrl, onClose }) => {
  const [pdfDocument, setPdfDocument] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1); // Default scale for zoom

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      setPdfDocument(pdf);
    };

    loadPdf();
  }, [pdfUrl]);

  const renderPage = async (pageNum) => {
    const page = await pdfDocument.getPage(pageNum);
    const viewport = page.getViewport({ scale });

    const canvas = document.getElementById("pdf-canvas");
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    page.render(renderContext);
  };

  useEffect(() => {
    if (pdfDocument) {
      renderPage(currentPage);
    }
  }, [pdfDocument, currentPage, scale]); // Re-render on scale change

  return (
    <div className="fixed inset-0 bg-gray-800 rounded-md bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-black p-4 rounded shadow-lg max-w-3xl  max-h-96 h-full overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">PDF Viewer</h2>
          <button className="text-white font-bold" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="overflow-auto" style={{ height: "250px" }}>
          <canvas id="pdf-canvas" className="border bg-white border-gray-300" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-4 py-2 bg-white text-black rounded"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span>
            Page {currentPage} of {pdfDocument?.numPages || 0}
          </span>
          <button
            className="px-4 py-2 bg-white text-black rounded"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pdfDocument.numPages))
            }
            disabled={currentPage === pdfDocument?.numPages}
          >
            Next Page
          </button>
          <div className="flex space-x-2 ml-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => setScale((prev) => Math.min(prev + 0.2, 3))} // Zoom in
            >
              +
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.5))} // Zoom out
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFPopup;
