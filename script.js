// On sélectionne les éléments
const homeView = document.getElementById('home-view');
const menuView = document.getElementById('menu-view');
const exploreBtn = document.getElementById('btn-explore');
const backBtn = document.querySelector('.back-btn');

// Fonction pour basculer les vues
exploreBtn.addEventListener('click', () => {
    homeView.classList.add('hidden'); // Cache l'accueil
    menuView.classList.remove('hidden'); // Affiche le menu
});

backBtn.addEventListener('click', () => {
    menuView.classList.add('hidden'); // Cache le menu
    homeView.classList.remove('hidden'); // Affiche l'accueil
});