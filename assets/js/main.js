// Auxiliary function that create an animation at the acordeon
function acordeonAnimation(section) {
    const sectionStyle = window.getComputedStyle(section);
    const sectionHeight = parseInt(sectionStyle.height);
    const sectionMaxHeight = parseInt(sectionStyle.maxHeight);
    const duration = 200;

    if (sectionHeight > 0 && sectionMaxHeight > 0) {
        // Seção está visível, animar seu fechamento
        section.style.height = sectionHeight + 'px'; // Definir a altura atual como a altura da seção
        section.style.maxHeight = sectionMaxHeight + 'px'; // Definir a altura máxima
        section.style.overflow = 'hidden'; // Esconder conteúdo que ultrapassa a altura máxima
        section.animate(
            { height: '0' }, // Animar para uma altura de 0
            { duration: duration, fill: 'both' } // Duração da animação e mantendo o estado final da animação (fill: 'both')
        ).onfinish = () => {
            section.classList.remove('show'); // Remover a classe 'show' após a animação de fechamento ser concluída
            section.style.display = 'none'; // Esconder o elemento após a animação de fechamento ser concluída
            section.style.height = ''; // Limpar a altura para redefinir para o valor padrão
            section.style.maxHeight = ''; // Limpar a altura máxima para redefinir para o valor padrão
            section.style.overflow = ''; // Limpar a propriedade overflow para redefinir para o valor padrão
        };
    } else {
        // Seção está oculta, animar sua abertura
        section.style.display = 'block'; // Mostrar o elemento para que a animação seja visível
        section.style.height = '0'; // Definir a altura inicial como 0
        section.style.maxHeight = '0'; // Definir a altura máxima como 0
        section.style.overflow = 'hidden'; // Esconder conteúdo que ultrapassa a altura máxima
        section.animate(
            { height: section.scrollHeight + 'px', maxHeight: section.scrollHeight + 'px' }, // Animar para a altura total
            { duration: duration, fill: 'both' } // Duração da animação e mantendo o estado final da animação (fill: 'both')
        ).onfinish = () => {
            section.classList.add('show'); // Adicionar a classe 'show' após a animação de abertura ser concluída
            section.style.height = ''; // Limpar a altura para redefinir para o valor padrão
            section.style.maxHeight = ''; // Limpar a altura máxima para redefinir para o valor padrão
            section.style.overflow = ''; // Limpar a propriedade overflow para redefinir para o valor padrão
        };
    }
}

// function that controls the scroll of the carousel
function scrollCarousel() {
    const carousel = document.getElementById("carousel");
    const images = document.querySelectorAll("#slide li");
    const slideWidth = images[0].clientWidth;
    const gap = 16;
    let setMarginLeft = 0;
    const next = document.getElementById('next-button');
    const prev = document.getElementById('prev-button');
    let index = 0;

    const divButtons = document.getElementById('btn-distance-config');
    const elementCount = images.length
    const buttonWidth = 100 / elementCount;

    divButtons.style.width = `${buttonWidth}%`;

    function updateButtons() {
        next.disabled = index == images.length - 1;
        prev.disabled = index == 0;
    }

    next.addEventListener('click', () => {
        index++;
        if (index > images.length - 1) {
            index = images.length - 1;
        } else {
            setMarginLeft += (slideWidth + gap);
        }
        updateButtons();

        divButtons.style.marginLeft = `${setMarginLeft}px`;

        carousel.style.transform = `translateX(${(-slideWidth * index - gap * index)}px)`;
    });

    prev.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = 0;
            setMarginLeft = 0;
        } else {
            setMarginLeft -= (slideWidth + gap);
        }
        updateButtons();

        divButtons.style.marginLeft = `${setMarginLeft}px`;

        carousel.style.transform = `translateX(${(-slideWidth * index - gap * index)}px)`;
    });

    updateButtons();
}





// Function that toggle the skills at the acordeon
function toggleSkills() {
    const skills = document.getElementById('skills-trigger');
    const acordeonSkills = document.getElementById('skills');

    skills.addEventListener('click', () => {
        const sections = document.querySelectorAll('#acordeon-info-skills section');

        sections.forEach(section => {
            section.classList.toggle('show')
            acordeonAnimation(section)
        })
        skills.classList.toggle('active');

        if (acordeonSkills.style.backgroundColor === 'var(--secondary-color)') {
            acordeonSkills.style.backgroundColor = null
        } else {
            acordeonSkills.style.backgroundColor = 'var(--secondary-color)'
        }
        
    })
}
toggleSkills();


//Funtion the toggle the languages at the acordeon
function toggleLaguages() {
    const languages = document.getElementById('languages-trigger');
    const acordeonLanguages = document.getElementById('languages')

    languages.addEventListener('click', () => {
        const sections = document.querySelectorAll('#acordeon-info-languages section');

        sections.forEach(section => {
            section.classList.toggle('show')
            acordeonAnimation(section)
        })
        languages.classList.toggle('active');

        if (acordeonLanguages.style.backgroundColor === 'var(--secondary-color)') {
            acordeonLanguages.style.backgroundColor = null
        } else {
            acordeonLanguages.style.backgroundColor = 'var(--secondary-color)'
        }
    })
}
toggleLaguages();


//Funtion the toggle the portfolio at the acordeon
function togglePortfolio() {
    const portfolio = document.getElementById('portfolio-trigger');
    const acordeonPortfolio = document.getElementById('portfolio');

    portfolio.addEventListener('click', () => {
        const sections = document.querySelectorAll('#acordeon-info-portfolio section');

        sections.forEach(section => {
            section.classList.toggle('show')
            acordeonAnimation(section)
        })
        portfolio.classList.toggle('active');

        if (acordeonPortfolio.style.backgroundColor === 'var(--secondary-color)') {
            acordeonPortfolio.style.backgroundColor = null
        } else {
            acordeonPortfolio.style.backgroundColor = 'var(--secondary-color)'
        }
    })
}
togglePortfolio();


//Funtion the toggle the portfolio at the acordeon
function toggleJobXp() {
    const jobXp = document.getElementById('job-trigger');
    const acordeonJobXp = document.getElementById('job-xp');

    jobXp.addEventListener('click', () => {
        const sections = document.querySelectorAll('#acordeon-info-job-xp section');

        sections.forEach(section => {
            section.classList.toggle('show')
            acordeonAnimation(section)
        })
        jobXp.classList.toggle('active');

        if (acordeonJobXp.style.backgroundColor === 'var(--secondary-color)') {
            acordeonJobXp.style.backgroundColor = null
        } else {
            acordeonJobXp.style.backgroundColor = 'var(--secondary-color)'
        }
    })
}
toggleJobXp();


//Funtion the toggle the certificates at the acordeon
function toggleCertifications() {
    const certifications = document.getElementById('certifications-trigger');
    const acordeonCertifications = document.getElementById('certifications');

    certifications.addEventListener('click', () => {
        const sections = document.querySelectorAll('#acordeon-info-certifications section');

        sections.forEach(section => {
            section.classList.toggle('show')
            acordeonAnimation(section)
        })
        certifications.classList.toggle('active');

        if (acordeonCertifications.style.backgroundColor === 'var(--secondary-color)') {
            acordeonCertifications.style.backgroundColor = null
        } else {
            acordeonCertifications.style.backgroundColor = 'var(--secondary-color)'
        }
        scrollCarousel()
    })
}
toggleCertifications();


//Funtion the toggle the courses at the acordeon
function toggleCourses() {
    const courses = document.getElementById('courses-trigger');
    const acordeonCourses = document.getElementById('courses');

    courses.addEventListener('click', () => {
        const sections = document.querySelectorAll('#acordeon-info-courses section');

        sections.forEach(section => {
            section.classList.toggle('show')
            acordeonAnimation(section)
        })
        courses.classList.toggle('active');

        if (acordeonCourses.style.backgroundColor === 'var(--secondary-color)') {
            acordeonCourses.style.backgroundColor = null
        } else {
            acordeonCourses.style.backgroundColor = 'var(--secondary-color)'
        }
    })
}
toggleCourses();