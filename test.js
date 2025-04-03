const app = {
    data() {
        return {
            blankLine : "_____________________________________________",
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
        
                pageSize: "A4",
                pageOrientation: "portrait",
                pageMargins: [10, 10, 10, 10],
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
                    'bold': {
                      bold: true
                    },
                  },
          
                content: [
                    "This is a simple text line.",
                ],
            },
        }
    },
    methods: {
        populateDocDefinition() {
            this.docDefinition.content = []
            document.querySelectorAll("#app form input[type='text']").forEach((input) => {
                console.log(input.value)
                this.docDefinition.content.push(
                    {
                        text: input.id,
                        style: 'bold'
                    }
                )
                this.docDefinition.content.push(
                    {
                        text: (input.value ? input.value : this.blankLine),
                    }
                )
            }
            )
            
        },
        printOut() {
            this.populateDocDefinition()
            const pdfDocument = pdfMake.createPdf(this.docDefinition)
            pdfDocument.getDataUrl((dataUrl) => {
                document.querySelector("#iframePreviewPdf").src = dataUrl;
              });
        },
        downloadPdf() {
            this.populateDocDefinition()
            const pdfDocument = pdfMake.createPdf(this.docDefinition)

            pdfDocument.getBlob((blob) => {
        
                const file = new Blob([blob], {type: "application/octet-stream"});
                
                const a = document.createElement("a");
                
                a.href = URL.createObjectURL(file);
                a.target = "_blank";
                a.download = "CustomFileName.pdf";
                a.click();
              
              });        
            }
    }
}

Vue.createApp(app).mount("#app");
