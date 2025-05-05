const app = {
    data() {
        return {
            firstName: (firstName = localStorage.getItem('firstName')) ? firstName : "",
            lastName: (lastName = localStorage.getItem('lastName')) ? lastName : "",
            email: (email = localStorage.getItem('email')) ? email : "",
            blankLine: "_____________________________________________",
            docDefinition: { 
                // Document Meta Data (Visible in document properties)
                info: {
                  title: "Formulaire d’inscription à la VAE",
                  author: "Julien.Jespersen@unige.ch",
                  subject: "Subject of Document",
                  keywords: "Keywords for Document",
                  creator: "Université de Genève",
                  producer: "pdfmake-0.2.6",
                  creationDate: new Date(),
                  modDate: new Date()
                },
        
                pageSize: "A4",
                pageOrientation: "portrait",
                pageMargins: [20, 20, 20, 20],
                footer: function(currentPage, pageCount) {
                    return {
                        text: lastName + ' ' + currentPage.toString() + ' / ' + pageCount.toString(),
                        fontSize: 7.5,
                        margin: [20, 2, 2, 20]
                    }
                    //  return lastName + ' ' + currentPage.toString() + ' / ' + pageCount.toString()
                    },
                defaultStyle: {
                    font: "Roboto",
                    fontSize: 12,
                    color: "#000000",
                    normal: true,
                    bold: false,
                    italics: false,
                    bolditalics: false
                },
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
                    'entry': {
                      fontSize: 8,
                      bold: true,
                      color: '#555',
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
    watch: {
        firstName: function () {localStorage.setItem('firstName', this.firstName)},
        lastName: function () {localStorage.setItem('lastName', this.lastName)},
        email: function () {localStorage.setItem('email', this.email)},
    },    
    methods: {
        populateDocDefinition() {
            this.docDefinition.content = []
            document.querySelectorAll("#app form input[type='text']").forEach((input) => {
                console.log(input.value)
                this.docDefinition.content.push(
                    {
                        text: input.previousElementSibling.innerText,
                        style: 'entry'
                    }
                )
                this.docDefinition.content.push(
                    {
                        text: (input.value ? input.value : this.blankLine),
                        marginBottom: 10
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
