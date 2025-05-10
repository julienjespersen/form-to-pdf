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
            // school informations
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
            faculty: (faculty = localStorage.getItem('faculty')) ? faculty : '',
            targetDiploma: (targetDiploma = localStorage.getItem('targetDiploma')) ? targetDiploma : '',
            artFacultyA: (artFacultyA = localStorage.getItem('artFacultyA')) ? artFacultyA : '',
            artFacultyB: (artFacultyB = localStorage.getItem('artFacultyB')) ? artFacultyB : '',
            tifFacultyA: (tifFacultyA = localStorage.getItem('tifFacultyA')) ? tifFacultyA : '',
            tifFacultyB: (tifFacultyB = localStorage.getItem('tifFacultyB')) ? tifFacultyB : '',
            tifFacultyC: (tifFacultyC = localStorage.getItem('tifFacultyC')) ? tifFacultyC : '',
            lawFacultyForeignLanguageExam: (lawFacultyForeignLanguageExam = localStorage.getItem('lawFacultyForeignLanguageExam')) ? lawFacultyForeignLanguageExam : '',
            lawFacultyThemeExam: (lawFacultyThemeExam = localStorage.getItem('lawFacultyThemeExam')) ? lawFacultyThemeExam : '',

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
        // school informations
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
        faculty: function () {localStorage.setItem('faculty', this.faculty)},
        targetDiploma: function () {localStorage.setItem('targetDiploma', this.targetDiploma)},
        artFacultyA: function () {localStorage.setItem('artFacultyA', this.artFacultyA)},
        artFacultyB: function () {localStorage.setItem('artFacultyB', this.artFacultyB)},
        tifFacultyA: function () {localStorage.setItem('tifFacultyA', this.tifFacultyA)},
        tifFacultyB: function () {localStorage.setItem('tifFacultyB', this.tifFacultyB)},
        tifFacultyC: function () {localStorage.setItem('tifFacultyC', this.tifFacultyC)},
        lawFacultyForeignLanguageExam: function () {localStorage.setItem('lawFacultyForeignLanguageExam', this.lawFacultyForeignLanguageExam)},
        lawFacultyThemeExam: function () {localStorage.setItem('lawFacultyThemeExam', this.lawFacultyThemeExam)},
    },    
    methods: {
        reset(event) {
            document.querySelector('form').addEventListener("reset", (event) => { 
                confirm("Êtes-vous sûr de vouloir effacer toutes les informations et les supprimer du navigateur ?") ? localStorage.clear() : event.preventDefault();
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
            document.querySelectorAll('#app form input, #app form select').forEach((input) => {
            this.docDefinition.content.push( 
            
                {
                    text: [{ text: input.previousElementSibling.innerText, style: 'entry' }, {text: ': '}, { text: input.value, fontSize: 15, bold: true }],
                },
                )
            })





            /*
            this.docDefinition.content = []
            document.querySelectorAll('#app form input, #app form select').forEach((input) => {
                // console.log(input.value)
                if (input.value !== '') {
                    this.docDefinition.content.push(
                        {
                            text: input.previousElementSibling.innerText,
                            style: 'entry'
                        },
                        {
                            text: input.value,
                            style: 'value',
                            marginLeft: 10,
                            marginBottom: 10
                        }
                    )
    
                } else {
                    this.docDefinition.content.push(
                        {
                        text: input.previousElementSibling.innerText,
                        style: 'entry'
                    },
                    {
                        text: this.blankLine,
                        style: 'underline',
                        marginLeft: 10,
                        unbreakable: true,
                        // marginBottom: 10
                    }
                )

                }
            })
            */
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

