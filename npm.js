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
            // school informations
            schoolStudentNumber: (schoolStudentNumber = localStorage.getItem('schoolStudentNumber')) ? schoolStudentNumber : '',
            schoolFailure: (schoolFailure = localStorage.getItem('schoolFailure')) ? schoolFailure : '',
            school1: (school1 = localStorage.getItem('school1')) ? school1 : '',
            schoolLocation1: (schoolLocation1 = localStorage.getItem('schoolLocation1')) ? schoolLocation1 : '',
            schoolStart1: (schoolStart1 = localStorage.getItem('schoolStart1')) ? schoolStart1 : '',
            schoolEnd1: (schoolEnd1 = localStorage.getItem('schoolEnd1')) ? schoolEnd1 : '',
            schoolDiploma1: (schoolDiploma1 = localStorage.getItem('schoolDiploma1')) ? schoolDiploma1 : '',
            schoolDiplomaYear1: (schoolDiplomaYear1 = localStorage.getItem('schoolDiplomaYear1')) ? schoolDiplomaYear1 : '',
            school2: (school2 = localStorage.getItem('school2')) ? school2 : '',
            schoolLocation2: (schoolLocation2 = localStorage.getItem('schoolLocation2')) ? schoolLocation2 : '',
            schoolStart2: (schoolStart2 = localStorage.getItem('schoolStart2')) ? schoolStart2 : '',
            schoolEnd2: (schoolEnd2 = localStorage.getItem('schoolEnd2')) ? schoolEnd2 : '',
            schoolDiploma2: (schoolDiploma2 = localStorage.getItem('schoolDiploma2')) ? schoolDiploma2 : '',
            schoolDiplomaYear2: (schoolDiplomaYear2 = localStorage.getItem('schoolDiplomaYear2')) ? schoolDiplomaYear2 : '',
            school3: (school3 = localStorage.getItem('school3')) ? school3 : '',
            schoolLocation3: (schoolLocation3 = localStorage.getItem('schoolLocation3')) ? schoolLocation3 : '',
            schoolStart3: (schoolStart3 = localStorage.getItem('schoolStart3')) ? schoolStart3 : '',
            schoolEnd3: (schoolEnd3 = localStorage.getItem('schoolEnd3')) ? schoolEnd3 : '',
            schoolDiploma3: (schoolDiploma3 = localStorage.getItem('schoolDiploma3')) ? schoolDiploma3 : '',
            schoolDiplomaYear3: (schoolDiplomaYear3 = localStorage.getItem('schoolDiplomaYear3')) ? schoolDiplomaYear3 : '',
            school4: (school4 = localStorage.getItem('school4')) ? school4 : '',
            schoolLocation4: (schoolLocation4 = localStorage.getItem('schoolLocation4')) ? schoolLocation4 : '',
            schoolStart4: (schoolStart4 = localStorage.getItem('schoolStart4')) ? schoolStart4 : '',
            schoolEnd4: (schoolEnd4 = localStorage.getItem('schoolEnd4')) ? schoolEnd4 : '',
            schoolDiploma4: (schoolDiploma4 = localStorage.getItem('schoolDiploma4')) ? schoolDiploma4 : '',
            schoolDiplomaYear4: (schoolDiplomaYear4 = localStorage.getItem('schoolDiplomaYear4')) ? schoolDiplomaYear4 : '',
            // job informations
            job1: (job1 = localStorage.getItem('job1')) ? job1 : '',
            jobLocation1: (jobLocation1 = localStorage.getItem('jobLocation1')) ? jobLocation1 : '',
            jobStart1: (jobStart1 = localStorage.getItem('jobStart1')) ? jobStart1 : '',
            jobEnd1: (jobEnd1 = localStorage.getItem('jobEnd1')) ? jobEnd1 : '',
            jobDuration1: (jobDuration1 = localStorage.getItem('jobDuration1')) ? jobDuration1 : '',
            job2: (job2 = localStorage.getItem('job2')) ? job2 : '',
            jobLocation2: (jobLocation2 = localStorage.getItem('jobLocation2')) ? jobLocation2 : '',
            jobStart2: (jobStart2 = localStorage.getItem('jobStart2')) ? jobStart2 : '',
            jobEnd2: (jobEnd2 = localStorage.getItem('jobEnd2')) ? jobEnd2 : '',
            jobDuration2: (jobDuration2 = localStorage.getItem('jobDuration2')) ? jobDuration2 : '',
            job3: (job3 = localStorage.getItem('job3')) ? job3 : '',
            jobLocation3: (jobLocation3 = localStorage.getItem('jobLocation3')) ? jobLocation3 : '',
            jobStart3: (jobStart3 = localStorage.getItem('jobStart3')) ? jobStart3 : '',
            jobEnd3: (jobEnd3 = localStorage.getItem('jobEnd3')) ? jobEnd3 : '',
            jobDuration3: (jobDuration3 = localStorage.getItem('jobDuration3')) ? jobDuration3 : '',
            job4: (job4 = localStorage.getItem('job4')) ? job4 : '',
            jobLocation4: (jobLocation4 = localStorage.getItem('jobLocation4')) ? jobLocation4 : '',
            jobStart4: (jobStart4 = localStorage.getItem('jobStart4')) ? jobStart4 : '',
            jobEnd4: (jobEnd4 = localStorage.getItem('jobEnd4')) ? jobEnd4 : '',
            jobDuration4: (jobDuration4 = localStorage.getItem('jobDuration4')) ? jobDuration4 : '',
            // faculty informations
            unigeFaculty: (unigeFaculty = localStorage.getItem('unigeFaculty')) ? unigeFaculty : '',
            unigeTargetDiploma: (unigeTargetDiploma = localStorage.getItem('unigeTargetDiploma')) ? unigeTargetDiploma : '',
            unigeArtFacultyA: (unigeArtFacultyA = localStorage.getItem('unigeArtFacultyA')) ? unigeArtFacultyA : '',
            unigeArtFacultyB: (unigeArtFacultyB = localStorage.getItem('unigeArtFacultyB')) ? unigeArtFacultyB : '',
            unigeTifFacultyA: (unigeTifFacultyA = localStorage.getItem('unigeTifFacultyA')) ? unigeTifFacultyA : '',
            unigeTifFacultyB: (unigeTifFacultyB = localStorage.getItem('unigeTifFacultyB')) ? unigeTifFacultyB : '',
            unigeTifFacultyC: (unigeTifFacultyC = localStorage.getItem('unigeTifFacultyC')) ? unigeTifFacultyC : '',
            unigeLawFacultyForeignLanguageExam: (unigeLawFacultyForeignLanguageExam = localStorage.getItem('unigeLawFacultyForeignLanguageExam')) ? unigeLawFacultyForeignLanguageExam : '',
            unigeLawFacultyThemeExam: (unigeLawFacultyThemeExam = localStorage.getItem('unigeLawFacultyThemeExam')) ? unigeLawFacultyThemeExam : '',

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
                                text: 'Université de Genève',
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
        // school informations
        schoolStudentNumber: function () {localStorage.setItem('schoolStudentNumber', this.schoolStudentNumber)},
        schoolFailure: function () {localStorage.setItem('schoolFailure', this.schoolFailure)},
        school1: function () {localStorage.setItem('school1', this.school1)},
        schoolLocation1: function () {localStorage.setItem('schoolLocation1', this.schoolLocation1)},
        schoolStart1: function () {localStorage.setItem('schoolStart1', this.schoolStart1)},
        schoolEnd1: function () {localStorage.setItem('schoolEnd1', this.schoolEnd1)},
        schoolDiploma1: function () {localStorage.setItem('schoolDiploma1', this.schoolDiploma1)},
        schoolDiplomaYear1: function () {localStorage.setItem('schoolDiplomaYear1', this.schoolDiplomaYear1)},
        school2: function () {localStorage.setItem('school2', this.school2)},
        schoolLocation2: function () {localStorage.setItem('schoolLocation2', this.schoolLocation2)},
        schoolStart2: function () {localStorage.setItem('schoolStart2', this.schoolStart2)},
        schoolEnd2: function () {localStorage.setItem('schoolEnd2', this.schoolEnd2)},
        schoolDiploma2: function () {localStorage.setItem('schoolDiploma2', this.schoolDiploma2)},
        schoolDiplomaYear2: function () {localStorage.setItem('schoolDiplomaYear2', this.schoolDiplomaYear2)},
        school3: function () {localStorage.setItem('school3', this.school3)},
        schoolLocation3: function () {localStorage.setItem('schoolLocation3', this.schoolLocation3)},
        schoolStart3: function () {localStorage.setItem('schoolStart3', this.schoolStart3)},
        schoolEnd3: function () {localStorage.setItem('schoolEnd3', this.schoolEnd3)},
        schoolDiploma3: function () {localStorage.setItem('schoolDiploma3', this.schoolDiploma3)},
        schoolDiplomaYear3: function () {localStorage.setItem('schoolDiplomaYear3', this.schoolDiplomaYear3)},
        school4: function () {localStorage.setItem('school4', this.school4)},
        schoolLocation4: function () {localStorage.setItem('schoolLocation4', this.schoolLocation4)},
        schoolStart4: function () {localStorage.setItem('schoolStart4', this.schoolStart4)},
        schoolEnd4: function () {localStorage.setItem('schoolEnd4', this.schoolEnd4)},
        schoolDiploma4: function () {localStorage.setItem('schoolDiploma4', this.schoolDiploma4)},
        schoolDiplomaYear4: function () {localStorage.setItem('schoolDiplomaYear4', this.schoolDiplomaYear4)},
        // job informations
        job1: function () {localStorage.setItem('job1', this.job1)},
        jobLocation1: function () {localStorage.setItem('jobLocation1', this.jobLocation1)},
        jobStart1: function () {localStorage.setItem('jobStart1', this.jobStart1)},
        jobEnd1: function () {localStorage.setItem('jobEnd1', this.jobEnd1)},
        jobDuration1: function () {localStorage.setItem('jobDuration1', this.jobDuration1)},
        job2: function () {localStorage.setItem('job2', this.job2)},
        jobLocation2: function () {localStorage.setItem('jobLocation2', this.jobLocation2)},
        jobStart2: function () {localStorage.setItem('jobStart2', this.jobStart2)},
        jobEnd2: function () {localStorage.setItem('jobEnd2', this.jobEnd2)},
        jobDuration2: function () {localStorage.setItem('jobDuration2', this.jobDuration2)},
        job3: function () {localStorage.setItem('job3', this.job3)},
        jobLocation3: function () {localStorage.setItem('jobLocation3', this.jobLocation3)},
        jobStart3: function () {localStorage.setItem('jobStart3', this.jobStart3)},
        jobEnd3: function () {localStorage.setItem('jobEnd3', this.jobEnd3)},
        jobDuration3: function () {localStorage.setItem('jobDuration3', this.jobDuration3)},
        job4: function () {localStorage.setItem('job4', this.job4)},
        jobLocation4: function () {localStorage.setItem('jobLocation4', this.jobLocation4)},
        jobStart4: function () {localStorage.setItem('jobStart4', this.jobStart4)},
        jobEnd4: function () {localStorage.setItem('jobEnd4', this.jobEnd4)},
        jobDuration4: function () {localStorage.setItem('jobDuration4', this.jobDuration4)},
            // faculty informations
        unigeFaculty: function () {localStorage.setItem('unigeFaculty', this.unigeFaculty)},
        unigeTargetDiploma: function () {localStorage.setItem('unigeTargetDiploma', this.unigeTargetDiploma)},
        unigeArtFacultyA: function () {localStorage.setItem('unigeArtFacultyA', this.unigeArtFacultyA)},
        unigeArtFacultyB: function () {localStorage.setItem('unigeArtFacultyB', this.unigeArtFacultyB)},
        unigeTifFacultyA: function () {localStorage.setItem('unigeTifFacultyA', this.unigeTifFacultyA)},
        unigeTifFacultyB: function () {localStorage.setItem('unigeTifFacultyB', this.unigeTifFacultyB)},
        unigeTifFacultyC: function () {localStorage.setItem('unigeTifFacultyC', this.unigeTifFacultyC)},
        unigeLawFacultyForeignLanguageExam: function () {localStorage.setItem('unigeLawFacultyForeignLanguageExam', this.unigeLawFacultyForeignLanguageExam)},
        unigeLawFacultyThemeExam: function () {localStorage.setItem('unigeLawFacultyThemeExam', this.unigeLawFacultyThemeExam)},
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
