var test =             document.querySelector('#ttt').value;

const App = {
  
  data() {
    
    return {
        message,
      
      docDefinition: { 
        // Document Meta Data (Visible in document properties)
        info: {
          title: "Title of Document",
          author: "Author Name",
          subject: "Subject of Document",
          keywords: "Keywords for Document",
          creator: "XYZ Solutions Inc.",
          producer: "pdfmake-0.2.6",
          creationDate: new Date(),
          modDate: new Date()
        },

        // Document Page Settings (Affects all pages!)
        pageSize: "A4",
        pageOrientation: "portrait",
        // left, top, right, bottom
        pageMargins: [10, 10, 10, 10],

        // Background Layer (Prints on all pages!)

        // Document Default Styles (Takes precendence until locally overwritten!)
        defaultStyle: {
          font: "Roboto",
          fontSize: 12,
          color: "#404040",
          normal: true,
          bold: false,
          italics: false,
          bolditalics: false
        },
        
        // Document Custom Styles (Optionally applied locally!)
        styles: {
          "text-left": {
            alignment: "left"
          },
          "text-center": {
            alignment: "center"
          },
          "text-right": {
            alignment: "right"
          },
        },
        
        header: {
          columns: [
            // STACK 1
            {
              stack: [
                {
                  text: "header-left",
                  // left, top, right, bottom
                  margin: [41, 27, 0, 0],
                  font: "Roboto",
                  fontSize: 7.5,
                  color: "#404040",
                  normal: true,
                  bold: true,
                  italics: false,
                  bolditalics: false
                }
              ],
              width: "*",
              style: "text-left"
            },
            // STACK 2
            {
              stack: [
                {
                  text: "header-center",
                  // left, top, right, bottom
                  margin: [0, 27, 0, 0],
                  font: "Roboto",
                  fontSize: 7.5,
                  color: "#404040",
                  normal: true,
                  bold: true,
                  italics: false,
                  bolditalics: false
                }
              ],
              width: "*",
              style: "text-center"
            },
            // STACK 3
            {
              stack: [
                {
                  text: "header-right",
                  // left, top, right, bottom
                  margin: [0, 27, 41, 0],
                  font: "Roboto",
                  fontSize: 7.5,
                  color: "#404040",
                  normal: true,
                  bold: true,
                  italics: false,
                  bolditalics: false
                }
              ],
              width: "*",
              style: "text-right"
            }
          ]
        },
     
        content: [
          this.message,
            // Simple text example
          "This is a simple text line.",
          // Rich text example
          {
            text: [
              // Simple text part...
              "text",
              // Rich text part...
              {
                text: "formatted in bold",
                // left, top, right, bottom
                margin: [0, 0, 0, 0],
                font: "Roboto",
                fontSize: 12,
                color: "#404040",
                normal: true,
                bold: true,
                italics: false,
                bolditalics: false
              },
            ],
          },
          
        ], // End content here.
        
        footer: function(currentPage, pageCount) {
        
          return {

            columns: [
              // STACK 1
              {
                stack: [
                  {
                    text: `Form F-1 © ${new Date().getFullYear()} - XYZ Solutions Inc.`,
                    // left, top, right, bottom
                    margin: [41, 21, 0, 0],
                    font: "Roboto",
                    fontSize: 7.5,
                    color: "#404040",
                    normal: true,
                    bold: true,
                    italics: false,
                    bolditalics: false
                  }
                ],
                width: "*",
                style: "text-left"
              },
              // STACK 2
              {
                stack: [
                  {
                    text: "footer-center",
                    // left, top, right, bottom
                    margin: [0, 21, 0, 0],
                    font: "Roboto",
                    fontSize: 7.5,
                    color: "#404040",
                    normal: true,
                    bold: true,
                    italics: false,
                    bolditalics: false
                  }
                ],
                width: "*",
                style: "text-center"
              },
              // STACK 3
              {
                stack: [
                  {
                    text: "PAGE " + currentPage.toString() + " of " + pageCount.toString(),
                    // left, top, right, bottom
                    margin: [0, 21, 41, 0],
                    font: "Roboto",
                    fontSize: 7.5,
                    color: "#404040",
                    normal: true,
                    bold: true,
                    italics: false,
                    bolditalics: false
                  }
                ],
                width: "*",
                style: "text-right"
              }
            ]
          }
        }
        
        /**
         * ##########################################################
         * ##########################################################
         * ##########################################################
         */
        
      } // End pdfmake docDefinition {}
    } // End VUE return {}
  }, // End VUE data {}
  watch: {
    message (newValue, oldValue) {
      console.log("this.message changed from " + newValue + " to " + oldValue);
    }
  },
  methods: {
    
    // VUE Method
    renderPdf: function (event) {

      const pdfDocument = pdfMake.createPdf(this.docDefinition);
      
      /**
       * 
       * pdfmake getDataUrl & render to iframe
       * 
       */
      pdfDocument.getDataUrl((dataUrl) => {
        document.querySelector("#iframePreviewPdf").src = dataUrl;
      });
      
    },
    
    // VUE Method
    downloadPdf: function (event) {
    
      const pdfDocument = pdfMake.createPdf(this.docDefinition);
      
      /***
       * 
       * Trigger a file download by saving a Blob with 
       * Content-Type set to "application/octet-stream",
       * then programatically creating an anchor with 
       * target attribute set to "_blank" and download
       * attribute set to "CustomFileName.pdf"
       * 
       */
      pdfDocument.getBlob((blob) => {
        
        const file = new Blob([blob], {type: "application/octet-stream"});
        
        const a = document.createElement("a");
        
        a.href = URL.createObjectURL(file);
        a.target = "_blank";
        a.download = "CustomFileName.pdf";
        a.click();
      
      });
    
    }
    
  }, // END VUE methods
  
};
Vue.createApp(App).mount("#app");
