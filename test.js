const app = {
    data() {
        return {
            // personal informations 
            firstName: (firstName = localStorage.getItem('firstName')) ? firstName : '',
            lastName: (lastName = localStorage.getItem('lastName')) ? lastName : '',
            maidenName: (maidenName = localStorage.getItem('maidenName')) ? maidenName : '',
            birthDate: (birthDate = localStorage.getItem('birthDate')) ? birthDate : '',
            gender: (gender = localStorage.getItem('gender')) ? gender : '',
            nativeLanguage: (nativeLanguage = localStorage.getItem('nativeLanguage')) ? nativeLanguage : '',
            languages: (languages = localStorage.getItem('languages')) ? languages : '',
            maritalStatus: (maritalStatus = localStorage.getItem('maritalStatus')) ? maritalStatus : '',
            // citizenship informations
            nationality: (nationality = localStorage.getItem('nationality')) ? nationality : '',
            originCanton: (originCanton = localStorage.getItem('originCanton')) ? originCanton : '',
            authorisation: (authorisation = localStorage.getItem('authorisation')) ? authorisation : '',
            // contact informations
            email: (email = localStorage.getItem('email')) ? email : '',
            phone: (phone = localStorage.getItem('phone')) ? phone : '',
            residency: (residency = localStorage.getItem('residency')) ? residency : '',
            address: (address = localStorage.getItem('address')) ? address : '',
            postalCode: (postalCode = localStorage.getItem('postalCode')) ? postalCode : '',
            city: (city = localStorage.getItem('city')) ? city : '',
            country: (country = localStorage.getItem('country')) ? country : '',

            blankLine: '',
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
        
                pageSize: 'A4',
                pageOrientation: 'portrait',
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
                    bolditalics: false,
                    marginBottom: 10,

                },
                styles: {
                    "text-left": {
                      alignment: "left"
                    },
                    "text-center": {
                      alignment: "center"
                    },
                    'text-right': {
                      alignment: 'right'
                    },
                    'entry': {
                      fontSize: 8,
                      bold: true,
                      color: '#555',
                    },
                    'value': {
                      fontSize: 12,
                      color: '#000',
                      background: '#eff',
                      marginBottom: 10,

                    },
                    'bold': {
                      bold: true
                    },
                    'underline': {
                      color: '#777',
                      background: '#eff',

                    //   lineHeight: 2,
                        fontSize: 18,
                    //   decoration: 'underline',
                      marginBottom: 10,
                    },
                },
          
                content: [
                    "This is a simple text line.",
                ],
            },
        }
    },
    watch: {
        // personal informations 
        firstName: function () {localStorage.setItem('firstName', this.firstName)},
        lastName: function () {localStorage.setItem('lastName', this.lastName)},
        maidenName: function () {localStorage.setItem('maidenName', this.maidenName)},
        birthDate: function () {localStorage.setItem('birthDate', this.birthDate)},
        gender: function () {localStorage.setItem('gender', this.gender)},
        nativeLanguage: function () {localStorage.setItem('nativeLanguage', this.nativeLanguage)},
        languages: function () {localStorage.setItem('languages', this.languages)},
        maritalStatus: function () {localStorage.setItem('maritalStatus', this.maritalStatus)},
        // citizenship informations
        nationality: function () {localStorage.setItem('nationality', this.nationality)},
        originCanton: function () {localStorage.setItem('originCanton', this.originCanton)},
        authorisation: function () {localStorage.setItem('authorisation', this.authorisation)},
        // contact informations
        email: function () {localStorage.setItem('email', this.email)},
        phone: function () {localStorage.setItem('phone', this.phone)},
        residency: function () {localStorage.setItem('residency', this.residency)},
        address: function () {localStorage.setItem('address', this.address)},
        postalCode: function () {localStorage.setItem('postalCode', this.postalCode)},
        city: function () {localStorage.setItem('city', this.city)},
        country: function () {localStorage.setItem('country', this.country)},
    },    
    methods: {
        reset(event) {
            document.querySelector('form').addEventListener("reset", (event) => { 
                confirm("Are you sure you want to reset the form?") ? localStorage.clear() : event.preventDefault();
                // localStorage.clear();
            })
        },


        createBlankLine: function (chars) {
            let blankLine = ''
            for (let i = 0; i < chars; i++) {
                blankLine += '_'
            }
            return blankLine
        },
        populateDocDefinition() {
            this.docDefinition.content = []
            document.querySelectorAll('#app form input, #app form select').forEach((input) => {
                console.log(input.value)
                this.docDefinition.content.push(
                    {
                        text: input.previousElementSibling.innerText,
                        style: 'entry'
                    }
                )
            if (input.value !== '') {
                this.docDefinition.content.push(
                    {
                        text: input.value,
                        style: 'value',
                        marginBottom: 10
                    }
                )
            } else {
                    this.docDefinition.content.push(
                        {
                            text: this.blankLine,
                            style: 'underline',
                            // marginBottom: 10
                        }
                    )
                }
            })
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
        
    },
    mounted() {
        this.blankLine = this.createBlankLine(20)
    }
}

Vue.createApp(app).mount("#app");

