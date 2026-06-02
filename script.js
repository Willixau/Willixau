const wrapper = document.getElementById('views-wrapper');
const exploreBtn = document.getElementById('btn-explore');
const backBtn = document.querySelector('.back-btn');

exploreBtn.addEventListener('click', () => {
    wrapper.classList.add('show-menu'); // Glisse à gauche
});

backBtn.addEventListener('click', () => {
    wrapper.classList.remove('show-menu'); // Revient à droite
});