import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { FaPrint, FaDownload } from 'react-icons/fa';
import resumePdf from '../assets/Ganga_Resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Ganga_Acharya_Resume.pdf';
    link.click();
  };

  const handlePrint = () => {
    const iframe = document.createElement('iframe');
    iframe.src = resumePdf;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  };

  const getPdfWidth = () => {
    if (window.innerWidth < 640) return window.innerWidth * 0.87; // Small screens
    if (window.innerWidth < 1024) return window.innerWidth * 0.77; // Medium screens
    return window.innerWidth * 0.67; // Large screens
  };

  return (
    <section id="resume" className="bg-light dark:bg-dark px-2 sm:px-12 w-full py-16 flex-grow flex flex-col">
      <div className="container mx-auto max-w-screen-lg flex-grow flex flex-col">
        <div className="flex justify-end space-x-4 mt-12 sm:mt-16 lg:mt-28">
          <button onClick={handlePrint} className="text-primary border border-primary py-2 px-4 rounded hover:bg-primary hover:text-white transition flex items-center space-x-2">
            <FaPrint />
          </button>
          <button onClick={handleDownload} className="text-primary border border-primary py-2 px-4 rounded hover:bg-primary hover:text-white transition flex items-center space-x-2">
            <FaDownload />
          </button>
        </div>
        <div className="pdf-container flex-grow mt-6 flex justify-center items-center">
          <div className="rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full p-4 border border-gray-300 dark:border-gray-600">
            <Document
              file={resumePdf}
              onLoadSuccess={({ numPages }) => console.log(`Loaded ${numPages} page(s)`)}
              className="w-full h-full flex justify-center items-center"
            >
              <Page pageNumber={1} width={getPdfWidth()} />
            </Document>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
