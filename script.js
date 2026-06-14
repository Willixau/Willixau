const wrapper = document.getElementById('views-wrapper');
const exploreBtn = document.getElementById('home-view');
const backBtn = document.querySelector('.back-btn');
const heroSection = document.querySelector('.hero');

// Buttons Menu
const SocialTrigger = document.querySelector("#SocialTrigger");
// Tu pourras ajouter les autres triggers ici plus tard

// 1. Vérifie si on n'est PAS sur l'accueil pour activer le bouton retour
function updateBackBtnState() {
    const isMenuVisible = wrapper.classList.contains('show-menu') || wrapper.classList.contains('show-social');
    backBtn.classList.toggle('disabled', !isMenuVisible);
}

// 2. Les clics pour avancer
exploreBtn.addEventListener('click', () => {
    window.location.hash = "Menu"; // Changer l'URL fait tout le travail !
});

SocialTrigger.addEventListener('click', () => {
    window.location.hash = "Social"; 
});

// 3. Le clic pour faire retour
backBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    
    // Si on est dans Social, on recule vers Menu
    if (window.location.hash === "#Social") {
        window.location.hash = "Menu";
    } 
    // Sinon (si on est dans Menu), on recule vers l'accueil
    else {
        history.replaceState(null, null, ' '); 
        // Force l'actualisation manuelle car replaceState ne déclenche pas hashchange
        updateInterfaceBasedOnHash();
    }
});

// 4. La fonction magique qui lit l'URL et affiche la bonne page
function updateInterfaceBasedOnHash() {
    // A. On nettoie TOUT (on ferme toutes les vues)
    wrapper.classList.remove('show-menu', 'show-social');
    heroSection.classList.remove('hero-tall', 'social-tall');

    // B. On ouvre la bonne vue selon le mot dans l'URL
    if (window.location.hash === "#Menu") {
        wrapper.classList.add('show-menu');
        heroSection.classList.add('hero-tall');
    } else if (window.location.hash === "#Social") {
        wrapper.classList.add('show-social');
        heroSection.classList.add('social-tall');
    }
    
    // C. On met à jour le bouton retour
    updateBackBtnState();
}

// 5. On écoute les changements d'URL
window.addEventListener('load', updateInterfaceBasedOnHash);
window.addEventListener('hashchange', updateInterfaceBasedOnHash);