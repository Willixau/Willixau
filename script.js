const wrapper = document.getElementById('views-wrapper');
const exploreBtn = document.getElementById('home-view');
const backBtn = document.querySelector('.back-btn');
const heroSection = document.querySelector('.hero');

exploreBtn.addEventListener('click', () => {
    wrapper.classList.add('show-menu'); 
    heroSection.classList.add('hero-tall');
    
    // NOUVEAU : Ajoute #menu à l'URL
    window.location.hash = "Menu";
});

backBtn.addEventListener('click', (event) => {
    // Empêche le clic de déclencher aussi l'événement du home-view qui est en dessous
    event.stopPropagation(); 
    
    wrapper.classList.remove('show-menu'); 
    heroSection.classList.remove('hero-tall');
    
    // NOUVEAU : Nettoie l'URL pour enlever le #menu
    history.replaceState(null, null, ' ');
});


window.addEventListener('load', () => {
    // Si l'URL contient #menu, on déclenche l'animation directement
    if (window.location.hash === "#Menu") {
        wrapper.classList.add('show-menu');
        heroSection.classList.add('hero-tall');
    }
});

window.addEventListener('hashchange', () => {
    if (window.location.hash === "#Menu") {
        // Si l'URL devient #menu, on ouvre le panneau
        wrapper.classList.add('show-menu');
        heroSection.classList.add('hero-tall');
    } else {
        // Si l'URL perd le #menu (ex: tu l'effaces ou tu cliques sur "Précédent"), on ferme le panneau
        wrapper.classList.remove('show-menu');
        heroSection.classList.remove('hero-tall');
    }
});