const defaultDate = new Date()
const app = {
    data() {
        return {
            // personal informations 
            personFirstName: (personFirstName = localStorage.getItem('personFirstName')) ? personFirstName : '',
            personLastName: (personLastName = localStorage.getItem('personLastName')) ? personLastName : '',
            personMaidenName: (personMaidenName = localStorage.getItem('personMaidenName')) ? personMaidenName : '',
            personBirthDate: (personBirthDate = localStorage.getItem('personBirthDate')) ? personBirthDate : '',
            personGender: (personGender = localStorage.getItem('personGender')) ? personGender : '',
            personNativeLanguage: (personNativeLanguage = localStorage.getItem('personNativeLanguage')) ? personNativeLanguage : '',
            personLanguages: (personLanguages = localStorage.getItem('personLanguages')) ? personLanguages : '',
            personMaritalStatus: (personMaritalStatus = localStorage.getItem('personMaritalStatus')) ? personMaritalStatus : '',
            // citizenship informations
            citizenNationality: (citizenNationality = localStorage.getItem('citizenNationality')) ? citizenNationality : '',
            citizenOriginCanton: (citizenOriginCanton = localStorage.getItem('citizenOriginCanton')) ? citizenOriginCanton : '',
            citizenAuthorisation: (citizenAuthorisation = localStorage.getItem('citizenAuthorisation')) ? citizenAuthorisation : '',
            // contact informations
            contactEmail: (contactEmail = localStorage.getItem('contactEmail')) ? contactEmail : '',
            contactPhone: (contactPhone = localStorage.getItem('contactPhone')) ? contactPhone : '',
            contactResidency: (contactResidency = localStorage.getItem('contactResidency')) ? contactResidency : '',
            contactAddress: (contactAddress = localStorage.getItem('contactAddress')) ? contactAddress : '',
            contactPostalCode: (contactPostalCode = localStorage.getItem('contactPostalCode')) ? contactPostalCode : '',
            contactCity: (contactCity = localStorage.getItem('contactCity')) ? contactCity : '',
            contactCountry: (contactCountry = localStorage.getItem('contactCountry')) ? contactCountry : '',
            // faculty informations
            unigeTargetDiploma: (unigeTargetDiploma = localStorage.getItem('unigeTargetDiploma')) ? unigeTargetDiploma : '',
            // signature informations
            personSignatureDate: (personSignatureDate = localStorage.getItem('personSignatureDate')) ? personSignatureDate : '',
            personSignature: (personSignature = localStorage.getItem('personSignature')) ? personSignature : '',

            blankLine: '',
            docDefinition: { 
                // Document Meta Data (Visible in document properties)
                info: {
                  title: "Demande d’immatriculation à l’Université de Genève pour non titulaire d’un certificat de maturité",
                  author: "Julien.Jespersen@unige.ch",
                  subject: "Subject of Document",
                  keywords: "Keywords for Document",
                  creator: "Université de Genève",
                  producer: "pdfmake-0.2.6",
                  creationDate: defaultDate,
                  modDate: defaultDate
                },
        
                pageSize: 'A4',
                pageOrientation: 'portrait',
                pageMargins: [20, 70, 20, 60],
                header: {
                    columns: [
                        {
                            // if you specify width, svg will scale proportionally
                            // svg: logoUnigeSvg,
                            image: logoUnigePng,
                            width: 100,
                            margin: [20, 20, 0, 10]
                        },
                        {
                            text: 'Demande d’immatriculation \npour non titulaire d’un certificat de maturité',
                            fontSize: 16,
                            bold: true,
                            lineHeight: 0.9,
                            alignment: 'left',
                            margin: [80, 20, 20, 0]
                        }
                    ]
                },
                footer: function(currentPage, pageCount) {
                    return {
                        columns: [
                            {
                                text: 'Université de Genève \nService des non-porteurs de maturité \n24 rue du Général-Dufour \n1211 Genève 4',
                                fontSize: 7.5,
                                margin: [20, 2, 2, 20]
                            },
                            {
                                text: 'Demande d’immatriculation \npour non titulaire d’un certificat de maturité',
                                fontSize: 7.5,
                                alignment: 'center',
                                margin: [0, 2, 0, 20]
                            },
                            {
                                text: (personFirstName ? personFirstName : '') + ' ' + (personLastName ? personLastName : '') + ' \n' + defaultDate.toLocaleDateString('fr-CH') + ' ' + defaultDate.toLocaleTimeString('fr-CH') + '\u2003' + currentPage.toString() + ' / ' + pageCount.toString(),
                                alignment: 'right',
                                margin: [0, 2, 20, 20],
                            }
                        ]
                        // fontSize: 7.5,
                        // margin: [20, 2, 2, 20]
                    }
                },
                defaultStyle: {
                    font: 'Roboto',
                    fontSize: 8,
                    lineHeight: 1.5,
                    color: '#000000',
                    normal: true,
                    bold: false,
                    italics: false,
                    bolditalics: false,
                    marginBottom: 10,

                },
                styles: {
                    'text-left': {
                      alignment: 'left'
                    },
                    'text-center': {
                      alignment: 'center'
                    },
                    'text-right': {
                      alignment: 'right'
                    },
                    'section': {
                      fontSize: 14,
                      bold: true,
                      color: '#000',
                      marginTop: 20,
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
                        fontSize: 18,
                        marginBottom: 10,
                    },
                },
          
                content: [],
            },
        }
    },
    watch: {
        // personal informations 
        personFirstName: function () {localStorage.setItem('personFirstName', this.personFirstName)},
        personLastName: function () {localStorage.setItem('personLastName', this.personLastName)},
        personMaidenName: function () {localStorage.setItem('personMaidenName', this.personMaidenName)},
        personBirthDate: function () {localStorage.setItem('personBirthDate', this.personBirthDate)},
        personGender: function () {localStorage.setItem('personGender', this.personGender)},
        personNativeLanguage: function () {localStorage.setItem('personNativeLanguage', this.personNativeLanguage)},
        personLanguages: function () {localStorage.setItem('personLanguages', this.personLanguages)},
        personMaritalStatus: function () {localStorage.setItem('personMaritalStatus', this.personMaritalStatus)},
        // citizenship informations
        citizenNationality: function () {localStorage.setItem('citizenNationality', this.citizenNationality)},
        citizenOriginCanton: function () {localStorage.setItem('citizenOriginCanton', this.citizenOriginCanton)},
        citizenAuthorisation: function () {localStorage.setItem('citizenAuthorisation', this.citizenAuthorisation)},
        // contact informations
        contactEmail: function () {localStorage.setItem('contactEmail', this.contactEmail)},
        contactPhone: function () {localStorage.setItem('contactPhone', this.contactPhone)},
        contactResidency: function () {localStorage.setItem('contactResidency', this.contactResidency)},
        contactAddress: function () {localStorage.setItem('contactAddress', this.contactAddress)},
        contactPostalCode: function () {localStorage.setItem('contactPostalCode', this.contactPostalCode)},
        contactCity: function () {localStorage.setItem('contactCity', this.contactCity)},
        contactCountry: function () {localStorage.setItem('contactCountry', this.contactCountry)},
        // faculty informations
        unigeTargetDiploma: function () {localStorage.setItem('unigeTargetDiploma', this.unigeTargetDiploma)},
        // signature informations
        personSignatureDate: function () {localStorage.setItem('personSignatureDate', this.personSignatureDate)},
        personSignature: function () {localStorage.setItem('personSignature', this.personSignature)},
    },
    methods: {
        reset(event) {
            document.querySelector('form').addEventListener('reset', (event) => { 
                confirm('Êtes-vous sûr‑e de vouloir effacer toutes les informations et les supprimer du navigateur?') ? localStorage.clear() : event.preventDefault();
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
            this.docDefinition.content = [{
                columns: [
                    [],
                    []
                ]
            }]
            // this.docDefinition.content = []
            document.querySelectorAll('#app form fieldset').forEach((fieldset) => {
                let current_column = 1
                if (fieldset.getAttribute('id') === 'fieldset-person'
                ||  fieldset.getAttribute('id') === 'fieldset-citizen'
                ||  fieldset.getAttribute('id') === 'fieldset-contact') {
                    current_column = 0
                }
                this.docDefinition.content[0].columns[current_column].push({text: fieldset.querySelector('legend').innerText, style: 'section'})
            
                fieldset.querySelectorAll('#app form input, #app form select').forEach((input) => {
                    let prefix = ''
                    if (input.dataset.leadEntry) {
                        prefix = input.dataset.leadEntry
                    }
                    if (input.value == '') {
                        this.docDefinition.content[0].columns[current_column].push({text: [{text: prefix + ' ', fontSize: 13}, {text: input.previousElementSibling.innerText, style: 'entry' }, {text: ': '}, { text: this.blankLine, fontSize: 13, bold: true }],})
                    } else {
                        let inputTxt = input.value
                        if (input.type === 'date') {
                            const dateObj = new Date(input.value)
                            inputTxt = dateObj.toLocaleDateString('fr-CH')
                        }
                        this.docDefinition.content[0].columns[current_column].push({text: [{text: prefix + ' ', fontSize: 13}, {text: input.previousElementSibling.innerText, style: 'entry' }, {text: ': '}, { text: inputTxt, fontSize: 13, bold: true }],})
                    }
                })
            }),
            this.docDefinition.content[0].columns[1].push({text: 'Par ma signature je confirme avoir répondu de manière véridique et complète à toutes les questions posées dans le présent formulaire. Dans le cas contraire, mon immatriculation à l’Université de Genève peut être annulée ou mon exclusion prononcée.', marginTop: 20})
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
                a.download = 'UNIGE_NPM_' + (this.lastName ? this.lastName : 'sans_nom') + '.pdf';
                a.click();
              
            });        
        }
        
    },
    mounted() {
        this.blankLine = this.createBlankLine(20)
    }
}
Vue.createApp(app).mount('#app');
