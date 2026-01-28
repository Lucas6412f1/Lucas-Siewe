// Language translations
const translations = {
    nl: {
        nav: {
            home: "Home",
            about: "Over",
            skills: "Vaardigheden",
            projects: "Projecten",
            contact: "Contact"
        },
        common: {
            title: "Lucas Siewe",
            profession: "Professionele titel: Nog niks",
            copyright: "© 2026 Lucas Siewe. All rights reserved."
        },
        index: {
            welcome: "Welkom op mijn Portfolio",
            description: "Ontdek mijn projecten en neem gerust contact met me op!",
            button: "Neem Contact Op"
        },
        about: {
            heading: "Over Mij",
            text: "Hallo! Ik ben Lucas Siewe, 13 jaar oud gebaseerd in Lelystad, Flevoland. Ik ben begonnen met coderen toen ik 12 was.<br>Mijn droom is om te werken bij ProRail of de NS, omdat ik een enorme fan ben van Treinen en de techniek erachter."
        },
        skills: {
            heading: "Vaardigheden",
            items: ["HTML & CSS", "JavaScript", "Python", "React", "Node.js"]
        },
        projects: {
            heading: "Projecten",
            project1Title: "Portfolio Website",
            project1Desc: "Een responsive portfolio website gebouwd met HTML, CSS en JavaScript om mijn werk te tonen.",
            project1Link: "Bekijk Project",
            project2Title: "Web App voor Taakbeheer",
            project2Desc: "Een eenvoudige taakbeheer applicatie ontwikkeld met React en Node.js voor efficiënt werkbeheer.",
            project2Link: "Bekijk Project"
        },
        contact: {
            heading: "Contact",
            description: "Heb je vragen? Stuur me een email!",
            button: "Email: Lucas6412f1@gmail.com"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        common: {
            title: "Lucas Siewe",
            profession: "Professional title: None yet",
            copyright: "© 2026 Lucas Siewe. All rights reserved."
        },
        index: {
            welcome: "Welcome to My Portfolio",
            description: "Discover my projects and feel free to contact me!",
            button: "Get in Touch"
        },
        about: {
            heading: "About Me",
            text: "Hello! I'm Lucas Siewe, 13 years old based in Lelystad, Flevoland. I started coding when I was 12.<br>My dream is to work at ProRail or NS, because I'm a huge fan of trains and the technology behind them."
        },
        skills: {
            heading: "Skills",
            items: ["HTML & CSS", "JavaScript", "Python", "React", "Node.js"]
        },
        projects: {
            heading: "Projects",
            project1Title: "Portfolio Website",
            project1Desc: "A responsive portfolio website built with HTML, CSS, and JavaScript to showcase my work.",
            project1Link: "View Project",
            project2Title: "Task Management Web App",
            project2Desc: "A simple task management application developed with React and Node.js for efficient work management.",
            project2Link: "View Project"
        },
        contact: {
            heading: "Contact",
            description: "Have any questions? Send me an email!",
            button: "Email: Lucas6412f1@gmail.com"
        }
    }
};

// Language toggle function
let currentLanguage = localStorage.getItem('language') || 'nl';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
}

function getTranslation(path) {
    const keys = path.split('.');
    let value = translations[currentLanguage];
    for (let key of keys) {
        value = value[key];
    }
    return value;
}

function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getTranslation(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
            element.value = value;
        } else {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        const value = getTranslation(key);
        element.innerHTML = value;
    });

    // Update language button text
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'nl' ? 'English' : 'Nederlands';
    }

    // Update html lang attribute
    document.documentElement.lang = currentLanguage;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updatePageLanguage);
