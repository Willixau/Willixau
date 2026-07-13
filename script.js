const wrapper = document.getElementById('views-wrapper');
const exploreBtn = document.getElementById('home-view');
const backBtn = document.querySelector('.back-btn');
const heroSection = document.querySelector('.hero');

// Buttons Menu
const SocialTrigger = document.querySelector("#SocialTrigger");
const AboutTrigger = document.querySelector("#AboutTrigger")
const ProjectsTrigger = document.querySelector("#ProjectsTrigger")

const MozaikPlusTrigger = document.querySelector("#MozaikPlusTrigger");

const RobloxTrigger = document.querySelector("#RobloxTrigger");
const YoutubeTrigger = document.querySelector("#YoutubeTrigger");
const DiscordTrigger = document.querySelector("#DiscordTrigger");
const InstagramTrigger = document.querySelector("#InstagramTrigger");
const XTrigger = document.querySelector("#XTrigger");
const SpotifyTrigger = document.querySelector("#SpotifyTrigger");
const RedditTrigger = document.querySelector("#RedditTrigger");
const SteamTrigger = document.querySelector("#SteamTrigger");
const GDTrigger = document.querySelector("#GDTrigger");

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

XTrigger.addEventListener('click', () => {
    window.open('https://x.com/Willixau', '_blank');
})

SpotifyTrigger.addEventListener('click', () => {
    window.open('https://open.spotify.com/user/7x49lyu6drjvui7x0eh8vkjgh', '_blank');
})

RedditTrigger.addEventListener('click', () => {
    window.open('https://www.reddit.com/user/No-Practice-2144/', '_blank');
})

SteamTrigger.addEventListener('click', () => {
    window.open('https://steamcommunity.com/profiles/76561199484386928/', '_blank');
})

// 1. Gestionnaire d'état du bouton Retour
function updateBackBtnState() {
    // Le bouton s'active si on est sur n'importe quelle vue autre que l'accueil
    const isMenuVisible = wrapper.classList.contains('show-menu') ||
                          wrapper.classList.contains('show-about') || 
                          wrapper.classList.contains('show-projects') || 
                          wrapper.classList.contains('show-social') || 
                          wrapper.classList.contains('show-roblox') ||
                          wrapper.classList.contains('show-youtube') ||
                          wrapper.classList.contains('show-discord') ||
                          wrapper.classList.contains('show-geometrydash') ||
                          wrapper.classList.contains('show-mozaikplus');
    backBtn.classList.toggle('disabled', !isMenuVisible);
}

// 2. Navigation vers l'avant (Changement d'URL)
exploreBtn.addEventListener('click', () => {
    window.location.hash = "Menu"; 
});

AboutTrigger.addEventListener('click', () => {
    window.location.hash = "About"; 
});

ProjectsTrigger.addEventListener('click', () => {
    window.location.hash = "Projects"; 
});

MozaikPlusTrigger.addEventListener('click', () => {
    window.location.hash = "MozaikPlus"; 
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

GDTrigger.addEventListener('click', () => {
    window.location.hash = "GeometryDash"; 
});

// 3. Navigation vers l'arrière (Historique en cascade)
backBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    
    if (window.location.hash === "#Roblox") {
        window.location.hash = "Social"; // Reculer
    } 
    else if (window.location.hash === "#YouTube") {
        window.location.hash = "Social";
    } 
    else if (window.location.hash === "#Discord") {
        window.location.hash = "Social";
    } 
    else if (window.location.hash === "#GeometryDash") {
        window.location.hash = "Social";
    } 
    else if (window.location.hash === "#Social") {
        window.location.hash = "Menu";
    } 
    else if (window.location.hash === "#Projects") {
        window.location.hash = "Menu";
    } 
    else if (window.location.hash === "#Projects") {
        window.location.hash = "Menu";
    } 
    else if (window.location.hash === "#MozaikPlus") {
        window.location.hash = "Projects";
    } 
    else if (window.location.hash === "#About") {
        window.location.hash = "Menu";
    } 
    else {
        // Recule vers l'accueil et nettoie l'URL
        history.replaceState(null, null, ' '); 
        updateInterfaceBasedOnHash();
    }
});

// 4. Mise à jour de l'interface globale selon l'URL
function updateInterfaceBasedOnHash() {
    // A. Nettoyage complet des affichages
    wrapper.classList.remove('show-menu', 'show-about', 'show-projects', 'show-mozaikplus', 'show-social', 'show-roblox', 'show-youtube', 'show-discord', 'show-geometrydash');
    heroSection.classList.remove('hero-tall', 'about-tall', 'projects-tall', 'mozaikplus-tall', 'social-tall', 'roblox-tall', 'youtube-tall', 'discord-tall', 'geometrydash-tall');

    // Petite astuce pour écrire moins de code !
    const hash = window.location.hash;

    // B. Activation de la vue demandée ET de ses parents
    if (hash === "#Menu") {
        wrapper.classList.add('show-menu');
        heroSection.classList.add('hero-tall');
    } else if (hash === "#About") {
        wrapper.classList.add('show-about', 'about-active-order');
        heroSection.classList.add('about-tall');
    } else if (hash === "#Projects") {
        wrapper.classList.add('show-projects', 'projects-active-order');
        heroSection.classList.add('projects-tall');
    } else if (hash === "#MozaikPlus") {
        wrapper.classList.add('show-mozaikplus', 'projects-active-order', 'mozaikplus-active-order');
        heroSection.classList.add('mozaikplus-tall');
    } else if (hash === "#Social") {
        wrapper.classList.add('show-social', 'social-active-order');
        heroSection.classList.add('social-tall');
    } else if (hash === "#Roblox") {
        // NOUVEAU : On garde "social-active-order" pour que Social reste au Slot 3 derrière Roblox !
        wrapper.classList.add('show-roblox', 'social-active-order', 'roblox-active-order');
        heroSection.classList.add('roblox-tall');
    } else if (hash === "#YouTube") {
        wrapper.classList.add('show-youtube', 'social-active-order', 'youtube-active-order'); 
        heroSection.classList.add('youtube-tall');
    } else if (hash === "#Discord") {
        wrapper.classList.add('show-discord', 'social-active-order', 'discord-active-order'); 
        heroSection.classList.add('discord-tall');
    } else if (hash === "#GeometryDash") {
        wrapper.classList.add('show-geometrydash', 'social-active-order', 'geometrydash-active-order'); 
        heroSection.classList.add('geometrydash-tall');
    }
    
    // C. Rafraîchissement du bouton retour
    updateBackBtnState();

    // D. Remise à zéro du défilement et nettoyage des ordres après la transition (0.35s)
    setTimeout(() => {
        // On retire l'ordre de About si on ne l'utilise plus
        if (hash !== "#About") wrapper.classList.remove('about-active-order');
        if (hash !== "#Projects" && hash !== "#MozaikPlus") wrapper.classList.remove('projects-active-order');
        
        // Magie : On garde Social actif si on est sur Social OU sur un de ses réseaux enfants
        if (hash !== "#Social" && hash !== "#Roblox" && hash !== "#YouTube" && hash !== "#Discord" && hash !== "#GeometryDash") {
            wrapper.classList.remove('social-active-order');
        }

        // Nettoyage du Slot 4
        if (hash !== "#Roblox") wrapper.classList.remove('roblox-active-order');
        if (hash !== "#YouTube") wrapper.classList.remove('youtube-active-order');
        if (hash !== "#Discord") wrapper.classList.remove('discord-active-order');
        if (hash !== "#GeometryDash") wrapper.classList.remove('geometrydash-active-order');
        if (hash !== "#MozaikPlus") wrapper.classList.remove('mozaikplus-active-order');

        const allViews = document.querySelectorAll('.view');
        allViews.forEach(view => {
            view.scrollTop = 0; 
        });
    }, 350);
}

// 5. Écouteurs d'événements de chargement
window.addEventListener('load', updateInterfaceBasedOnHash);
window.addEventListener('hashchange', updateInterfaceBasedOnHash);