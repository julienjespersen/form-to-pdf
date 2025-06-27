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
                  creationDate: new Date(),
                  modDate: new Date()
                },
        
                pageSize: 'A4',
                pageOrientation: 'portrait',
                pageMargins: [20, 60, 20, 60],
                header: {
                    columns: [
                        {
                            // if you specify width, svg will scale proportionally
                            svg: `<?xml version="1.0" encoding="utf-8"?>
                                <!-- Generator: Adobe Illustrator 17.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="163.7px" height="47.2px" viewBox="0 0 163.7 47.2" enable-background="new 0 0 163.7 47.2" xml:space="preserve">
                                <g>
                                    <g>
                                        <path fill="#000000" d="M10.4,11.1l1,1.3l0.7-0.6l-1.7-2.1l-0.6,0.5c0.2,0.4-0.1,0.8-0.5,1.1l0.3,0.4L10.4,11.1z"/>
                                        <path fill="#000000" d="M13.1,9.9c0.1-0.2,0.2-0.3,0.4-0.4c0.3-0.2,0.6-0.1,0.7,0.1c0.1,0.2,0,0.5-0.3,0.7c-0.2,0.1-0.6,0.2-0.7,0
                                            l-0.8,0.4c0.3,0.6,1,0.5,1.7,0.1c0.8-0.4,1.2-1,0.9-1.6c-0.3-0.5-0.8-0.6-1.5-0.2C13.2,9,13,9.2,12.9,9.4l0,0l-0.1-0.5l1.4-0.7
                                            L14,7.7L12,8.7l0.4,1.5L13.1,9.9z"/>
                                        <path fill="#000000" d="M30.3,9c-0.2-0.1-0.5-0.2-0.7-0.1l0,0l0.3-0.4l1.4,0.7l0.3-0.5l-2.1-1l-1,1.2l0.7,0.4
                                            c0.2-0.1,0.4,0,0.6,0.1c0.3,0.2,0.4,0.4,0.3,0.7c-0.1,0.2-0.4,0.3-0.7,0.1C29.2,10,29,9.8,29.1,9.6l-0.8-0.4
                                            c-0.2,0.6,0.2,1.1,0.9,1.4C30,11,30.7,11,31,10.4C31.2,9.9,31,9.4,30.3,9z"/>
                                        <path fill="#000000" d="M33.6,10.1C33,9.6,32.2,9.5,31.9,10c-0.3,0.4-0.2,1,0.4,1.5c0.2,0.2,0.6,0.3,0.8,0.3l0,0
                                            c-0.2,0.3-0.6,0.4-1,0.1c-0.1-0.1-0.2-0.2-0.2-0.2c0-0.1-0.1-0.2,0-0.3l-0.7-0.5c-0.2,0.5,0,1,0.6,1.4c0.9,0.7,1.7,0.4,2.2-0.2
                                            C34.4,11.5,34.4,10.7,33.6,10.1z M33.5,11.2c-0.1,0.2-0.5,0.2-0.8,0c-0.3-0.2-0.3-0.5-0.2-0.7c0.1-0.2,0.5-0.2,0.7,0
                                            C33.6,10.8,33.6,11,33.5,11.2z"/>
                                        <path fill="#000000" d="M3.6,21.2c0.5,0.2,0.8-0.3,1.1-0.8c0.3-0.5,0.5-1,0.7-0.9c0.2,0.1,0.1,0.3,0.1,0.5
                                            c-0.1,0.3-0.3,0.6-0.5,0.5l-0.3,0.9C5.3,21.6,5.8,21,6,20.3c0.2-0.7,0.3-1.5-0.3-1.7c-0.5-0.2-0.8,0.3-1.1,0.8
                                            c-0.3,0.5-0.5,1-0.7,0.9c-0.2-0.1-0.2-0.4-0.1-0.7c0.1-0.4,0.3-0.6,0.6-0.5l0.3-0.9c-0.7-0.2-1.2,0.4-1.5,1.2
                                            C3,20.1,2.9,21,3.6,21.2z"/>
                                        <path fill="#000000" d="M3.3,25.9l0.1-1c-0.3-0.1-0.5-0.3-0.5-0.8c0-0.6,0.5-0.8,0.9-0.8c0.4,0,0.8,0.3,0.8,0.9
                                            c0,0.4-0.2,0.7-0.5,0.7l-0.1,1c0.7,0,1.1-0.8,1.2-1.6c0.1-1.1-0.5-1.9-1.3-2c-0.8-0.1-1.5,0.6-1.6,1.8C2.2,25,2.6,25.8,3.3,25.9z"
                                            />
                                        <polygon fill="#000000" points="5.5,29 4.5,29.2 4.2,27.9 5.2,27.7 5.1,26.8 2.3,27.3 2.5,28.2 3.6,28 3.8,29.3 2.7,29.5 
                                            2.9,30.4 5.6,30 		"/>
                                        <path fill="#000000" d="M6.6,32.3c-0.5-1.1-1.3-1.4-2.1-1.1c-0.7,0.3-1,1.2-0.6,2.3c0.5,1.1,1.3,1.4,2.1,1.1
                                            C6.8,34.3,7.1,33.4,6.6,32.3z M5.6,33.7c-0.4,0.2-0.9,0.1-1.1-0.5c-0.3-0.6,0-1,0.4-1.1C5.3,32,5.8,32,6,32.6
                                            C6.3,33.2,6,33.5,5.6,33.7z"/>
                                        <polygon fill="#000000" points="8.3,35.4 7.7,34.6 5.5,36.3 7.2,38.5 7.7,38.1 6.6,36.7 		"/>
                                        <path fill="#000000" d="M7.7,39.1l0.8,0.7L9,39.5l1,0.9l-0.1,0.5l0.8,0.7l0.7-3l-0.8-0.6L7.7,39.1z M10.1,39.8l-0.6-0.6l1-0.5l0,0
                                            L10.1,39.8z"/>
                                        <path fill="#000000" d="M18.3,42.4c0.4,0.1,0.7,0.3,0.6,0.5l1,0.2c0.1-0.7-0.7-1.2-1.5-1.3c-1.1-0.2-2,0.2-2.1,1
                                            c-0.2,0.8,0.4,1.6,1.5,1.8c0.3,0.1,0.8,0.1,1.1-0.1l0,0.3l0.6,0.1l0.3-1.5l-1.5-0.3l-0.1,0.5l0.7,0.1c-0.1,0.2-0.5,0.3-0.9,0.2
                                            c-0.6-0.1-0.8-0.6-0.7-1C17.4,42.7,17.7,42.3,18.3,42.4z"/>
                                        <polygon fill="#000000" points="22.3,44.4 22.3,43.9 24.1,43.8 24.1,43.2 22.3,43.3 22.3,42.8 24.3,42.7 24.2,42.1 21.2,42.3 
                                            21.4,45.1 24.4,44.9 24.4,44.3 		"/>
                                        <polygon fill="#000000" points="27.5,41.3 28,42.9 28,42.9 26.2,41.7 25.3,42 26.1,44.6 27,44.3 26.5,42.7 26.5,42.7 28.2,44 
                                            29.2,43.7 28.4,41 		"/>
                                        <polygon fill="#000000" points="31.3,41.8 31.1,41.4 32.6,40.4 32.3,39.9 30.8,40.9 30.5,40.5 32.2,39.4 31.9,38.9 29.4,40.5 
                                            30.8,42.9 33.4,41.3 33.1,40.8 		"/>
                                        <polygon fill="#000000" points="34.3,36.8 35.2,38.7 35.2,38.7 33.2,37.8 32.5,38.5 35.3,39.7 36.1,38.9 35,36 		"/>
                                        <polygon fill="#000000" points="37.8,35.7 37.3,35.4 38.3,33.8 37.8,33.6 36.8,35.1 36.4,34.9 37.5,33.2 37,32.9 35.4,35.4 
                                            37.8,36.9 39.4,34.3 38.8,33.9 		"/>
                                        <polygon fill="#000000" points="38.1,29.7 39.7,30.2 39.7,30.2 37.7,30.9 37.4,31.9 40.1,32.7 40.3,31.8 38.7,31.3 38.7,31.3 
                                            40.7,30.5 41,29.6 38.3,28.8 		"/>
                                        <path fill="#000000" d="M40.5,24.7c-0.5,0-0.7,0.5-0.8,1.1c-0.1,0.5-0.2,1.1-0.4,1.1c-0.2,0-0.2-0.3-0.2-0.5
                                            c0-0.3,0.1-0.6,0.4-0.6l0-1c-0.6,0-0.9,0.7-1,1.5c0,0.7,0.2,1.5,0.8,1.6c0.5,0,0.7-0.5,0.8-1.1c0.1-0.5,0.2-1.1,0.5-1.1
                                            c0.2,0,0.3,0.3,0.3,0.6c0,0.4-0.1,0.7-0.5,0.7l0,1c0.7,0,1-0.7,1.1-1.6C41.4,25.5,41.2,24.7,40.5,24.7z"/>
                                        
                                            <rect x="38.4" y="22.4" transform="matrix(-0.9898 0.1427 -0.1427 -0.9898 82.4371 39.8587)" fill="#000000" width="2.8" height="1"/>
                                        <path fill="#000000" d="M38.9,21.2c0.5-0.2,0.5-0.8,0.4-1.3c-0.1-0.5-0.2-1.1,0-1.1c0.2-0.1,0.4,0.2,0.5,0.5
                                            c0.1,0.4,0.1,0.7-0.2,0.8L40,21c0.7-0.2,0.7-1,0.4-1.9c-0.3-0.8-0.7-1.5-1.4-1.2c-0.5,0.2-0.5,0.7-0.4,1.3c0.1,0.6,0.2,1.1,0,1.1
                                            c-0.2,0.1-0.3-0.2-0.4-0.4c-0.1-0.3-0.1-0.6,0.1-0.7L38,18.4c-0.6,0.2-0.6,1-0.4,1.7C37.9,20.7,38.3,21.4,38.9,21.2z"/>
                                        <circle fill="#000000" cx="13.6" cy="41.9" r="0.7"/>
                                        <circle fill="#000000" cx="7.1" cy="14.7" r="0.7"/>
                                        <circle fill="#000000" cx="36.4" cy="14.7" r="0.7"/>
                                        <polygon fill="#000000" points="23.4,7 22.9,7.9 24.2,7.9 24.2,7.5 23.7,7.5 24,7 23.7,6.6 24.2,6.6 24.2,6.2 22.9,6.2 		"/>
                                        <polygon fill="#000000" points="20.6,7.5 20.3,7.5 20.3,6.6 20.6,6.6 20.6,6.2 19.5,6.2 19.5,6.6 19.8,6.6 19.8,7.5 19.5,7.5 
                                            19.5,7.9 20.6,7.9 		"/>
                                        <polygon fill="#000000" points="22.1,6.8 21.4,6.8 21.4,6.2 20.9,6.2 20.9,7.9 21.4,7.9 21.4,7.2 22.1,7.2 22.1,7.9 22.6,7.9 
                                            22.6,6.2 22.1,6.2 		"/>
                                        <path fill="#000000" d="M21.6,5.2c0-0.1,0.1-0.2,0.2-0.2C21.9,5,22,5.1,22,5.2l0,0.6h0.9V5.3h-0.6l0-0.1c0-0.4-0.2-0.6-0.6-0.6
                                            c-0.3,0-0.5,0.2-0.6,0.5c0,0.1,0,0.1,0,0.2v0.1h-0.6l0,0.5h0.9L21.6,5.2z"/>
                                        <circle fill="#000000" cx="21.8" cy="8.6" r="0.3"/>
                                        <path fill="#000000" d="M26.4,4.3l0.4-0.5l-2.6,0.4l0.4-2.6l-2,1.7l-0.9-2.5l-0.9,2.5l-2-1.7l0.4,2.6l-2.6-0.4L17,4.3
                                            C7.3,6.4,0,15.1,0,25.5c0,12,9.8,21.7,21.7,21.7s21.7-9.8,21.7-21.7C43.5,15.1,36.2,6.4,26.4,4.3z M21.8,3.7c1.6,0,3,1.3,3,3
                                            c0,1.6-1.3,3-3,3c-1.6,0-3-1.3-3-3C18.8,5.1,20.1,3.7,21.8,3.7z M24.5,10.5c3.2,0.6,6.1,2.2,8.3,4.5h-1.4v1h-1.3v-1h-1.7v1.4h-1
                                            c0,0,0-2.2,0-2.2c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,11.6,0,11.6l-1.8,1.6v0.9c-0.8,0.1-1.4,0.6-1.8,1.3V11.9
                                            l0.6-1.7l2,1.6L24.5,10.5z M25.4,35.5c-0.4,0.2-0.8,0.6-0.8,1.1c0,0.7,0.5,1.2,1.2,1.2h1.5c0.7,0,1.2-0.5,1.2-1.2
                                            c0-0.5-0.3-0.9-0.8-1.1c2-0.7,3.5-2.6,3.5-4.9c0-1.2-0.9-2.1-2-2.3v-0.9l-1.8-1.6v-3.4h1v1.4h1.7v-1.1h1.3v1.1h1.7V20h-1.7V21
                                            h-1.3V20h-1.4v-1.2h1.4v-0.9h1.3v0.9h1.7v-3.5c2.4,2.7,3.9,6.2,3.9,10.1c0,8.3-6.7,15.1-14.9,15.3v-8.6
                                            C22.6,33.7,23.8,35,25.4,35.5z M23.1,30.6c0-0.6,0.4-1,0.9-1.1c0,0.7,0.6,1.2,1.3,1.2h2.5c0.7,0,1.2-0.5,1.3-1.2
                                            c0.5,0.1,0.9,0.6,0.9,1.1c0,2.1-1.5,3.4-3.5,3.9C24.5,34.1,23.1,32.8,23.1,30.6z M11.5,19.3c-0.1,0.1-0.1,0.2-0.1,0.4
                                            c0,0.1,0,0.2,0.1,0.3l-4,0c0.2-0.4,0.4-0.9,0.6-1.3L11.5,19.3z M9,17c0.4-0.7,0.9-1.3,1.5-1.9c0.3,1,0.9,1.8,1.7,2.5
                                            c-0.1,0.1-0.2,0.2-0.3,0.3c0,0.1,0,0.2,0,0.2L9,17z M7.6,22.1c0,0,1.9-0.4,3.9-0.7c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.1,0.1,0.2
                                            l-3.9,1.5c-0.5,0.3-0.7,1-0.4,1.5c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.1,0.6,0,0.8-0.1l3.4-2.1c0,0.1,0.1,0.2,0.1,0.3
                                            c0.1,0.1,0.1,0.1,0.2,0.1l-3.1,2.8c-0.4,0.5-0.3,1.2,0.2,1.5c0.5,0.4,1.2,0.3,1.5-0.2l2.5-3.2c0.1,0.1,0.1,0.2,0.2,0.2
                                            c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0l-1.7,3.4c-0.2,0.6,0.1,1.2,0.7,1.3c0.6,0.2,1.1-0.2,1.3-0.7l1-3.4c0.4,0.1,0.9,0.2,1.3,0.2
                                            c0.4,0,0.6,0,1-0.1c0,0.6,0,1.2,0,1.3c-0.1,0.1-3.1,3.4-3.1,3.4c-0.5,0.4-0.7,0.5-1.1,0.1l-0.1-0.1l-1,0.7l0.1,0.1
                                            c0.4,0.4,0.7,0.6,1.2,0.7c-0.7,0.3-1.2,0.6-1.3,0.7c-0.1-0.1-0.6-0.6-0.9-0.9c0-0.7-0.6-1.2-1.3-1.2c-0.7,0-1.3,0.6-1.3,1.3v0.1
                                            l0.5,0.5v-0.4c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.3-0.1,0.5,0c0,0,0.4,0.4,0.6,0.7l0,0l0.1,0.1c0.1,0.1,0.1,0.1,0.1,0.1l0,0l0.3,0.3
                                            l-0.4,0c-0.2-0.2-0.6-0.3-0.9-0.3c-0.3,0-0.7,0.2-0.9,0.4c-0.2,0.2-0.3,0.4-0.3,0.7c-1.4-2.3-2.3-5.1-2.3-8c0-1.2,0.1-2.4,0.4-3.6
                                            C7.1,22.1,7.3,22.2,7.6,22.1z M9.4,34.2c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1l0.9,0c-0.5,0.1-0.9,0.4-1.1,0.8
                                            C9.5,34.4,9.4,34.2,9.4,34.2C9.4,34.2,9.4,34.2,9.4,34.2z M10.6,35.5c0-0.1,0.1-0.2,0.1-0.2l2-1.1l0.5,0.6l0,0l0.1,0.1l0.1,0.1
                                            l0,0l0.7,0.6c0.1,0.1,0.1,0.3,0,0.5c-0.1,0.1-0.1,0.1-0.2,0.1h-0.4l0.5,0.5h0.1c0.3,0,0.7-0.1,0.9-0.4c0.2-0.2,0.4-0.6,0.4-0.9
                                            c0-0.7-0.5-1.2-1.2-1.3c-0.2-0.2-0.4-0.4-0.5-0.5c0.3-0.2,5.7-3.6,6.2-3.9c-0.2,1.9-1.8,4.1-3.3,5.4c-0.7,0.7-1,1.5-1,2.2
                                            c0,0.6,0.2,1.1,0.5,1.4c0.3,0.3,0.7,0.4,1,0.2l0.2-0.1l-0.2-0.2c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.7,0.2-1.1,0.5-1.4
                                            c0.1,0.1,0.2,0.2,0.4,0.4c-0.1,0.4-0.2,0.8-0.2,1.2c0,0.8,0.3,1.5,0.7,1.9c0.1,0.1,1.1,0.9,1.5,0.8l0.3-0.1l-0.3-0.2
                                            c-0.1-0.1-0.6-0.6-0.8-1c-0.1-0.3-0.2-0.6-0.2-0.9c0-0.5,0.2-1.2,0.7-1.7c0,0,1.1-2.7,1.7-4c0,0,0,0.3,0,0.3c0,0.3,0,0.6,0,0.9
                                            c0,1.5-0.1,2.9-0.8,3.6C20,37.7,19.2,38,19.2,38l0.2,0.2c0,0,0.3,0.5,0.9,0.5c0.1,0,0.2-0.1,0.3-0.1c0,1.2,0.3,1.7,0.7,2.1
                                            c-4.1-0.1-7.7-1.8-10.4-4.5l-0.3-0.5C10.6,35.7,10.5,35.7,10.6,35.5C10.5,35.6,10.6,35.5,10.6,35.5z M18.7,13.8l0.4-0.6h-1.5
                                            l0.2-0.6c0-0.3-0.3-0.6-0.6-0.6c-0.1,0-0.1,0-0.2,0c0-0.1,0-0.1,0-0.2c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4c0,0,0,0.1,0,0.2
                                            c-0.1,0-0.1,0-0.2,0c-0.3,0-0.6,0.3-0.6,0.6l0.2,0.6h-0.4c-0.3,0-0.5,0.2-0.6,0.5c-0.1,0-0.2,0-0.3,0c-0.5,0-0.9,0.4-0.9,0.9
                                            c0,0.2,0,0.3,0.1,0.4c0.2-0.3,0.5-0.5,0.8-0.5c0.3,0,0.6,0.2,0.8,0.4c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.2,0.1,0.3h-1.9
                                            c-0.5,0-0.9-0.4-0.9-0.9v0.2v0.2v0.2c0,0.5,0.4,0.9,0.9,0.9h1.8c-0.2,0.3-0.5,0.5-0.8,0.5c0,0,0,0-0.1,0c0.2,0.2,0.4,0.4,0.8,0.4
                                            c0.4,0,0.7-0.3,0.9-0.6h2.5c0.5,0,0.9,0.4,0.9,0.9c0,0.2,0,0.6-0.2,0.8L19,18.3l-1.6,2.5c-0.3,0.4-0.9,0.5-1.3,0.2
                                            c-0.4-0.3-0.5-0.9-0.2-1.3c0.4-0.2,0.5-0.6,0.4-1.1c-0.1-0.5-0.6-0.9-1.1-0.9l-0.3,0c-2,0-3.5-1.3-3.7-3.3c2.1-2,4.8-3.4,7.8-4
                                            l-0.2,1.4l2-1.6l0.7,1.8v2.7L18.7,13.8z M21.7,45.9c-11.3,0-20.5-9.2-20.5-20.5c0-10,7.2-18.3,16.6-20.1l0.3,0.4l-2.5,0.9l2.5,0.9
                                            l-1.7,2l2.6-0.4l-0.1,0.5c-7.5,1.3-13.3,7.8-13.3,15.7c0,8.8,7.1,15.9,15.9,15.9s15.9-7.1,15.9-15.9c0-7.9-5.7-14.4-13.2-15.7
                                            l-0.1-0.5l2.5,0.4l-1.6-2.1l2.4-0.9l-2.4-1l0.3-0.3C35,7.2,42.2,15.5,42.2,25.5C42.2,36.8,33,45.9,21.7,45.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#000000" d="M57.1,21.3c-4.7,0-5.8-2.7-5.8-5.7V5.3h2.9v10.1c0,2,0.6,3.4,3.1,3.4c2.2,0,3.1-1,3.1-3.7V5.3h2.9v9.6
                                            C63.3,19.2,61,21.3,57.1,21.3z"/>
                                        <path fill="#000000" d="M74.8,21c0,0-5.6-10.3-6.1-11.3c0.1,1.4,0.1,3.8,0.1,5.7V21h-2.8V5.3h3.7c0,0,5.5,10,6.1,11.2
                                            c-0.1-1.6-0.2-4.4-0.2-6.3V5.3h2.8V21H74.8z"/>
                                        <path fill="#000000" d="M81.9,21V5.3h2.9V21H81.9z"/>
                                        <path fill="#000000" d="M95.1,21h-3.3L86.6,5.3h3.1l2.9,9.2c0.3,0.9,0.6,1.9,0.9,3.1h0c0.2-1.1,0.5-1.9,0.9-3.3l2.9-9h2.9L95.1,21
                                            z"/>
                                        <path fill="#000000" d="M102.3,21V5.3h8.2v2.5h-5.3v3.9h5v2.5h-5v4.3h5.3V21H102.3z"/>
                                        <path fill="#000000" d="M120.7,21l-4.2-6.5h-0.1V21h-2.9V5.3c1.2-0.1,2.6-0.1,4.3-0.1c3.3,0,5.4,1.2,5.4,4.4c0,2.3-1.5,4-3.8,4.4
                                            c0.4,0.6,0.8,1.2,1.2,1.7l3.6,5.3H120.7z M117.6,7.7c-0.4,0-0.8,0-1.1,0.1v4.5c0.2,0,0.6,0,1,0c1.7,0,2.8-0.9,2.8-2.4
                                            C120.3,8.4,119.4,7.7,117.6,7.7z"/>
                                        <path fill="#000000" d="M129.2,21.3c-1.1,0-2.1-0.1-3.1-0.4l0.2-2.8c0.8,0.3,2,0.6,3.1,0.6c1.5,0,2.6-0.6,2.6-2.1
                                            c0-3-6.3-1.6-6.3-6.8c0-2.8,2.1-4.7,5.7-4.7c0.8,0,1.8,0.1,2.7,0.3L134,8c-0.8-0.3-1.8-0.4-2.7-0.4c-1.7,0-2.5,0.8-2.5,1.9
                                            c0,2.8,6.3,1.8,6.3,6.7C135.1,19.1,132.8,21.3,129.2,21.3z"/>
                                        <path fill="#000000" d="M137.4,21V5.3h2.9V21H137.4z"/>
                                        <path fill="#000000" d="M149,7.9V21h-2.9V7.9h-3.9V5.3h10.6v2.6H149z"/>
                                        <path fill="#000000" d="M155.1,21V5.3h8.5v2.5h-5.5v3.9h5.2v2.5h-5.2v4.3h5.5V21H155.1z M158.3,4.3l-1-1.7l4.1-2.6l1.2,2
                                            L158.3,4.3z"/>
                                        <path fill="#000000" d="M55.8,46.2c-1.6,0-3.1-0.1-4.4-0.1V30.4c1.2,0,3.1-0.1,5.1-0.1c4.9,0,8,2.2,8,7.7
                                            C64.4,43.4,60.9,46.2,55.8,46.2z M56.2,32.8c-0.7,0-1.4,0-1.8,0.1v10.6c0.4,0.1,1,0.1,1.7,0.1c3,0,5.1-1.7,5.1-5.4
                                            C61.2,34.8,59.8,32.8,56.2,32.8z"/>
                                        <path fill="#000000" d="M66.5,46.1V30.4H75v2.5h-5.5v3.9h5.2v2.5h-5.2v4.3H75v2.6H66.5z"/>
                                        <path fill="#000000" d="M96.7,33.6c-1.3-0.5-2.7-0.8-4.2-0.8c-3.1,0-5.3,2-5.3,5.5c0,3.3,1.8,5.3,5,5.3c0.7,0,1.4-0.1,2-0.3v-5.5
                                            h3v7.5c-1.6,0.6-3.5,1-5.4,1c-5,0-7.9-2.9-7.9-7.7c0-4.9,3.4-8.5,8.8-8.5c1.6,0,3.1,0.3,4.4,0.7L96.7,33.6z"/>
                                        <path fill="#000000" d="M100.5,46.1V30.4h8.5v2.5h-5.5v3.9h5.2v2.5h-5.2v4.3h5.5v2.6H100.5z"/>
                                        <path fill="#000000" d="M121.3,46.1c0,0-5.9-10.3-6.4-11.3c0.1,1.4,0.1,3.8,0.1,5.7v5.6h-2.9V30.4h3.9c0,0,5.8,10,6.4,11.2
                                            c-0.1-1.6-0.2-4.4-0.2-6.3v-4.9h2.9v15.7H121.3z"/>
                                        <path fill="#000000" d="M128.3,46.1V30.4h8.5v2.5h-5.5v3.9h5.2v2.5h-5.2v4.3h5.5v2.6H128.3z M133.5,29.4l-4.3-2.2l1.3-2.1l4.1,2.6
                                            L133.5,29.4z"/>
                                        <path fill="#000000" d="M147.7,46.1h-3.5l-5.5-15.7h3.3l3.1,9.2c0.3,0.9,0.7,1.9,0.9,3.1h0c0.2-1.1,0.5-1.9,0.9-3.3l3.1-9h3.1
                                            L147.7,46.1z"/>
                                        <path fill="#000000" d="M155.2,46.1V30.4h8.5v2.5h-5.5v3.9h5.2v2.5h-5.2v4.3h5.5v2.6H155.2z"/>
                                    </g>
                                </g>
                            </svg>`,
                            width: 150,
                            margin: [20, 0, 0, 10]
                        },
                        {
                            text: 'Demande d’immatriculation pour non titulaire d’un certificat de maturité',
                            fontSize: 12,
                            alignment: 'right',
                            margin: [0, 20, 0, 0]
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
                                text: 'Demande d’immatriculation pour non titulaire d’un certificat de maturité',
                                fontSize: 7.5,
                                alignment: 'center',
                                margin: [0, 2, 0, 20]
                            },
                            {
                                text: 'NPM ' + personLastName + ' ' + currentPage.toString() + ' / ' + pageCount.toString(),
                                alignment: 'right',
                                margin: [0, 2, 20, 20],
                            }
                        ]
                        // fontSize: 7.5,
                        // margin: [20, 2, 2, 20]
                    }
                },
                defaultStyle: {
                    font: "Roboto",
                    fontSize: 8,
                    lineHeight: 1.5,
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
        citizenOriginCanton: function () {localStorage.setItem('originCanton', this.originCanton)},
        citizenAuthorisation: function () {localStorage.setItem('authorisation', this.authorisation)},
        // contact informations
        contactEmail: function () {localStorage.setItem('email', this.email)},
        contactPhone: function () {localStorage.setItem('phone', this.phone)},
        contactResidency: function () {localStorage.setItem('residency', this.residency)},
        contactAddress: function () {localStorage.setItem('address', this.address)},
        contactPostalCode: function () {localStorage.setItem('postalCode', this.postalCode)},
        contactCity: function () {localStorage.setItem('city', this.city)},
        contactCountry: function () {localStorage.setItem('country', this.country)},
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
            document.querySelector('form').addEventListener("reset", (event) => { 
                confirm("Êtes-vous sûr de vouloir effacer toutes les informations et les supprimer du navigateur?") ? localStorage.clear() : event.preventDefault();
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
            document.querySelectorAll('#app form input, #app form select').forEach((input) => {

                    if (input.id.substring(0, 6) === 'person'
                    ||  input.id.substring(0, 7) === 'citizen'
                    ||  input.id.substring(0, 7) === 'contact') {
                        if (input.value == '') {
                            this.docDefinition.content[0].columns[0].push({text: [{ text: input.previousElementSibling.innerText, style: 'entry' }, {text: ': '}, { text: this.blankLine, fontSize: 13, bold: true }],})

                        } else {

                            this.docDefinition.content[0].columns[0].push({text: [{ text: input.previousElementSibling.innerText, style: 'entry' }, {text: ': '}, { text: input.value, fontSize: 13, bold: true }],})
                        }
                    } else {
                        if (input.value == '') {
                            this.docDefinition.content[0].columns[1].push({text: [{ text: input.previousElementSibling.innerText, style: 'entry' }, {text: ': '}, { text: this.blankLine, fontSize: 13, bold: true }],})

                        } else {

                            this.docDefinition.content[0].columns[1].push({text: [{ text: input.previousElementSibling.innerText, style: 'entry' }, {text: ': '}, { text: input.value, fontSize: 13, bold: true }],})
                        }
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
                a.download = 'UNIGE_NPM_' + this.lastName + '.pdf';
                a.click();
              
            });        
        }
        
    },
    mounted() {
        this.blankLine = this.createBlankLine(20)
        // let recaptchaScript = document.createElement('script')
        // recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
        // document.head.appendChild(recaptchaScript)        
    }
}
Vue.createApp(app).mount("#app");

