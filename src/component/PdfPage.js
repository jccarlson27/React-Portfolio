import React, {Component} from 'react';
import { Page } from 'react-pdf';
import { Document, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js";

    class PDFLink extends Component {
        state = {
          numPages: null,
          pageNumber: 1,
        }
       
        onDocumentLoadSuccess = ({ numPages }) => {
          this.setState({ numPages });
        }
       
        render() {
          const { pageNumber, numPages } = this.state;
       
          return (
            <div>
              <Document
                file="JCCarlsonPortfolioResume.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>Page {pageNumber} of {numPages}</p>
            </div>
          );
        }
      }

    

    export default PDFLink;