const wrapper = document.getElementById('views-wrapper');
const exploreBtn = document.getElementById('home-view');
const backBtn = document.querySelector('.back-btn');
const heroSection = document.querySelector('.hero');

function updateBackBtnState() {
    const isMenuVisible = wrapper.classList.contains('show-menu');
    // Si isMenuVisible est vrai, on enlève 'disabled' (bouton actif).
    // Si isMenuVisible est faux, on ajoute 'disabled' (bouton grisé).
    backBtn.classList.toggle('disabled', !isMenuVisible);
}

updateBackBtnState();

exploreBtn.addEventListener('click', () => {
    wrapper.classList.add('show-menu'); 
    heroSection.classList.add('hero-tall');
    window.location.hash = "Menu";
    updateBackBtnState();
});

backBtn.addEventListener('click', (event) => {
    // Empêche le clic de déclencher aussi l'événement du home-view qui est en dessous
    event.stopPropagation(); 
    
    wrapper.classList.remove('show-menu'); 
    heroSection.classList.remove('hero-tall');
    
    // NOUVEAU : Nettoie l'URL pour enlever le #Menu
    history.replaceState(null, null, ' ');
    updateBackBtnState();
});


window.addEventListener('load', () => {
    // Si l'URL contient #menu, on déclenche l'animation directement
    if (window.location.hash === "#Menu") {
        wrapper.classList.add('show-menu');
        heroSection.classList.add('hero-tall');
    }
    updateBackBtnState();
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
    updateBackBtnState();
});