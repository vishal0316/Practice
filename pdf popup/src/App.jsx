import { useState } from "react";
import PDFPopup from "./components/PDFPopup";

const MainComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const pdfUrl =
    "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"; // Replace this with the path or URL of your PDF file

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="px-6 py-2 bg-green-500 text-white font-semibold rounded"
        onClick={handleOpenPopup}
      >
        Open PDF in Popup
      </button>

      {isPopupOpen && <PDFPopup pdfUrl={pdfUrl} onClose={handleClosePopup} />}
    </div>
  );
};

export default MainComponent;
