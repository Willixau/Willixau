const wrapper = document.getElementById('views-wrapper');
const exploreBtn = document.getElementById('home-view');
const backBtn = document.querySelector('.back-btn');
const heroSection = document.querySelector('.hero');

// Buttons Menu
const SocialTrigger = document.querySelector("#SocialTrigger");
const RobloxTrigger = document.querySelector("#RobloxTrigger");
const RobloxProfileTrigger = document.querySelector("#RobloxProfileTrigger")

RobloxProfileTrigger.addEventListener('click', () => {
    window.open('https://www.roblox.com/users/1218746629/profile', '_blank');
})

// 1. Gestionnaire d'état du bouton Retour
function updateBackBtnState() {
    // Le bouton s'active si on est sur n'importe quelle vue autre que l'accueil
    const isMenuVisible = wrapper.classList.contains('show-menu') || 
                          wrapper.classList.contains('show-social') || 
                          wrapper.classList.contains('show-roblox');
    backBtn.classList.toggle('disabled', !isMenuVisible);
}

// 2. Navigation vers l'avant (Changement d'URL)
exploreBtn.addEventListener('click', () => {
    window.location.hash = "Menu"; 
});

SocialTrigger.addEventListener('click', () => {
    window.location.hash = "Social"; 
});

RobloxTrigger.addEventListener('click', () => {
    window.location.hash = "Roblox"; 
});

// 3. Navigation vers l'arrière (Historique en cascade)
backBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    
    if (window.location.hash === "#Roblox") {
        window.location.hash = "Social"; // Recule vers les réseaux
    } 
    else if (window.location.hash === "#Social") {
        window.location.hash = "Menu"; // Recule vers le menu principal
    } 
    else {
        // Recule vers l'accueil et nettoie l'URL
        history.replaceState(null, null, ' '); 
        updateInterfaceBasedOnHash();
    }
});

// 4. Mise à jour de l'interface globale selon l'URL
function updateInterfaceBasedOnHash() {
    // A. Nettoyage complet (Important pour éviter les conflits à 25 vues !)
    wrapper.classList.remove('show-menu', 'show-social', 'show-roblox');
    heroSection.classList.remove('hero-tall', 'social-tall', 'roblox-tall');

    // B. Activation de la vue demandée
    if (window.location.hash === "#Menu") {
        wrapper.classList.add('show-menu');
        heroSection.classList.add('hero-tall');
    } else if (window.location.hash === "#Social") {
        wrapper.classList.add('show-social');
        heroSection.classList.add('social-tall');
    } else if (window.location.hash === "#Roblox") {
        wrapper.classList.add('show-roblox');
        heroSection.classList.add('roblox-tall');
    }
    
    // C. Rafraîchissement du bouton retour
    updateBackBtnState();

    // D. Remise à zéro du défilement après la transition (0.35s)
    setTimeout(() => {
        const allViews = document.querySelectorAll('.view');
        allViews.forEach(view => {
            view.scrollTop = 0; 
        });
    }, 350); 
}

// 5. Écouteurs d'événements de chargement
window.addEventListener('load', updateInterfaceBasedOnHash);
window.addEventListener('hashchange', updateInterfaceBasedOnHash);