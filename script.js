const wrapper = document.getElementById('views-wrapper');
const exploreBtn = document.getElementById('home-view');
const backBtn = document.querySelector('.back-btn');
const heroSection = document.querySelector('.hero');

// Buttons Menu
const SocialTrigger = document.querySelector("#SocialTrigger");
const RobloxTrigger = document.querySelector("#RobloxTrigger");
const YoutubeTrigger = document.querySelector("#YoutubeTrigger");
const DiscordTrigger = document.querySelector("#DiscordTrigger");
const InstagramTrigger = document.querySelector("#InstagramTrigger");

const RobloxProfileTrigger = document.querySelector("#RobloxProfileTrigger");
const RobloxCommunityTrigger = document.querySelector("#RobloxCommunityTrigger");
const RobloxGameTrigger = document.querySelector("#RobloxGameTrigger");
const YoutubeWillixauTrigger = document.querySelector("#YouTubeWillixauTrigger");
const YouTubeWillixauMusicTrigger = document.querySelector("#YouTubeWillixau-musicTrigger");
const YouTubeWillixauPersonalTrigger = document.querySelector("#YouTubeWillixau-personalTrigger");
const DiscordProfileTrigger = document.querySelector("#DiscordProfileTrigger");
const DiscordHomeTrigger = document.querySelector("#DiscordHomeTrigger");

RobloxProfileTrigger.addEventListener('click', () => {
    window.open('https://www.roblox.com/users/1218746629/profile', '_blank');
})

RobloxCommunityTrigger.addEventListener('click', () => {
    window.open('https://www.roblox.com/communities/12058982/Willixau-Development-Community#!/', '_blank');
})

RobloxGameTrigger.addEventListener('click', () => {
    window.open('https://www.roblox.com/games/101699826904489/Home', '_blank');
})

YoutubeWillixauTrigger.addEventListener('click', () => {
    window.open('https://www.youtube.com/@Willixau', '_blank');
})

YouTubeWillixauMusicTrigger.addEventListener('click', () => {
    window.open('https://www.youtube.com/@WillixauMusic', '_blank');
})

YouTubeWillixauPersonalTrigger.addEventListener('click', () => {
    window.open('https://www.youtube.com/@Willixau-personal', '_blank');
})

DiscordProfileTrigger.addEventListener('click', () => {
    window.open('https://discord.com/users/930971533579534336', '_blank');
})

DiscordHomeTrigger.addEventListener('click', () => {
    window.open('https://discord.com/invite/RS8cVSEZ', '_blank');
})

InstagramTrigger.addEventListener('click', () => {
    window.open('https://www.instagram.com/willixau/', '_blank');
})

// 1. Gestionnaire d'état du bouton Retour
function updateBackBtnState() {
    // Le bouton s'active si on est sur n'importe quelle vue autre que l'accueil
    const isMenuVisible = wrapper.classList.contains('show-menu') || 
                          wrapper.classList.contains('show-social') || 
                          wrapper.classList.contains('show-roblox') ||
                          wrapper.classList.contains('show-youtube') ||
                          wrapper.classList.contains('show-discord');
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

YoutubeTrigger.addEventListener('click', () => {
    window.location.hash = "YouTube"; 
});

DiscordTrigger.addEventListener('click', () => {
    window.location.hash = "Discord"; 
});

// 3. Navigation vers l'arrière (Historique en cascade)
backBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    
    if (window.location.hash === "#Roblox") {
        window.location.hash = "Social"; // Recule vers les réseaux
    } 
    else if (window.location.hash === "#YouTube") {
        window.location.hash = "Social";
    } 
    else if (window.location.hash === "#Discord") {
        window.location.hash = "Social";
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
    wrapper.classList.remove('show-menu', 'show-social', 'show-roblox', 'show-youtube', 'show-discord');
    heroSection.classList.remove('hero-tall', 'social-tall', 'roblox-tall', 'youtube-tall', 'discord-tall');

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
    } else if (window.location.hash === "#YouTube") {
        wrapper.classList.add('show-youtube');
        wrapper.classList.add('youtube-active-order'); // <-- 1. On ajoute la classe d'ordre ici
        heroSection.classList.add('youtube-tall');
    } else if (window.location.hash === "#Discord") {
        wrapper.classList.add('show-discord');
        wrapper.classList.add('discord-active-order'); // <-- 1. On ajoute la classe d'ordre ici
        heroSection.classList.add('discord-tall');
    }
    
    // C. Rafraîchissement du bouton retour
    updateBackBtnState();

    // D. Remise à zéro du défilement après la transition (0.35s)
    setTimeout(() => {
    if (window.location.hash !== "#YouTube") {
        wrapper.classList.remove('youtube-active-order');
    } 
    
    if (window.location.hash !== "#Discord") {
        wrapper.classList.remove('discord-active-order');
    }

    const allViews = document.querySelectorAll('.view');
    allViews.forEach(view => {
        view.scrollTop = 0; 
    });
}, 350);
}

// 5. Écouteurs d'événements de chargement
window.addEventListener('load', updateInterfaceBasedOnHash);
window.addEventListener('hashchange', updateInterfaceBasedOnHash);