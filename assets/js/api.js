
const portfolioApi = {};
const url = 'https://raw.githubusercontent.com/Gabriel-Cabeceira/portfolio/master/data/profile.json';
portfolioApi.data = null;


// Function that gets the profile picture
function getProfilePic(picture){
    const profilePicture = document.getElementById('profile-image');
    profilePicture.src = picture;
}

// Function that gets the name
function getName(apiName) {
    const htmlName = document.getElementById('name');
    htmlName.innerText = apiName;
}

// Function that gets information
function getInformation(apiJob, apiLocation, apiPhone, apiEmail) {
    const htmljob = document.getElementById('job');
    const htmlLocation = document.getElementById('location');
    const htmlPhone = document.getElementById('phone-number');
    const htmlEmail = document.getElementById('mail');

    htmljob.innerText = apiJob;
    htmlLocation.innerText = apiLocation;
    htmlPhone.innerText = apiPhone;
    htmlEmail.innerText = apiEmail;
}

// Function that gets Hard Skills
function getHardSkills(apiHardSkills) {
    const htmlHardSkills = document.getElementById('list-hard-skills');
    htmlHardSkills.innerHTML = '';

    apiHardSkills.map((e) => {
        htmlHardSkills.innerHTML += `<li><img src="${e.logo}" alt="${e.name}"></li>`
    })
}

// Function that gets Soft Skills
function getSoftSkills(apiSoftSkills) {
    const htmlSoftSkills = document.getElementById('list-soft-skills');
    htmlSoftSkills.innerHTML = '';

    apiSoftSkills.map((e) => {
        htmlSoftSkills.innerHTML += `<li>${e}</li>`
    })
}

// Function that gets portfolio
function getPortfolio(apiPortfolio) {
    const htmlPortfolio = document.getElementById('list-portfolio');
    htmlPortfolio.innerHTML = '';

    apiPortfolio.map((e) => {
        htmlPortfolio.innerHTML += `
        <li>
            <h3 class="title">${e.name}</h3>
                <span class="sub-title">Pages</span>
                <a target="_blank" href="${e['url-pages']}">${e['url-pages']}</a>
                <span class="sub-title">Repositório</span>
                <a target="_blank" href="${e['url-rep']}">${e['url-rep']}</a>
        </li>
        `
    })
}

// Function that gets certificates
function getCertifications(apiCertifications) {
    const htmlCertifications = document.getElementById('slide');
    htmlCertifications.innerHTML = '';

    apiCertifications.map((e) => {
        htmlCertifications.innerHTML += `<li><img class="certificates" src="${e.certificate}" alt="${e.name}"></li>`
    })
}

// Function that gets qualification
function getCourses(apiCourses) {
    const htmlCourses = document.getElementById('list-courses');
    htmlCourses.innerHTML = '';

    apiCourses.map((e) => {
        htmlCourses.innerHTML += `                        
        <li>
            <h3 class="title-course">${e.name}</h3>
            <span class="date">${e.period}</span>
            <p id="teaching-unit">${e.description}</p>
        </li>`
    })
}

// Function that gets Languages
function getlanguages(apiLanguages) {
    const htmlLanguages = document.getElementById('list-languages');
    htmlLanguages.innerHTML = '';

    apiLanguages.map((e) => {
        htmlLanguages.innerHTML += `<li>${e}</li>`
    })
}

// Function that gets Professional Experience
function getExperience(apiExperience) {
    const htmlExperience = document.getElementById('list-job-xp');
    htmlExperience.innerHTML = '';

    apiExperience.map((e) => {
        htmlExperience.innerHTML += `                        
        <li>
            <h3 class="title-job">${e.name}</h3>
            <span class="date">${e.period}</span>
            <p class="paragraph">${e.description}</p>
        </li>`
    })
}


// Get data from API
portfolioApi.fetchData = () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            portfolioApi.data = data;
            // Puts name
            getName(portfolioApi.data.name);

            // Puts profile image
            getProfilePic(portfolioApi.data.photo)

            // Puts information
            const apiJob = portfolioApi.data.job;
            const apiLocation = portfolioApi.data.location;
            const apiPhone = portfolioApi.data.phone;
            const apiEmail = portfolioApi.data.email;

            getInformation(apiJob, apiLocation, apiPhone, apiEmail);

            // Puts Hard Skills
            const apiHardSkills = portfolioApi.data.skills.hardSkills;
            getHardSkills(apiHardSkills);

            // Puts Soft Skills
            const apiSoftSkills = portfolioApi.data.skills.softSkills;
            getSoftSkills(apiSoftSkills);

            // Puts Portfolio
            const apiPortfolio = portfolioApi.data.portfolio;
            getPortfolio(apiPortfolio);

            // Puts Certifications
            const apiCertifications = portfolioApi.data.certifications;
            getCertifications(apiCertifications);

            // Puts qualifications
            const apiCourses = portfolioApi.data.qualifications;
            getCourses(apiCourses);

            // Puts Languages
            const apiLanguages = portfolioApi.data.languages;
            getlanguages(apiLanguages);

            // Puts Professional Experience
            const apiExperience = portfolioApi.data.professionalExperience;
            getExperience(apiExperience);
        })
        .catch((error) => console.error('Error: ', error));
}
portfolioApi.fetchData();
