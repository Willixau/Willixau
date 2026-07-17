const wrapper = document.getElementById('views-wrapper');
const exploreBtn = document.getElementById('home-view');
const backBtn = document.querySelector('.back-btn');
const heroSection = document.querySelector('.hero');

// Buttons Menu
const SocialTrigger = document.querySelector("#SocialTrigger");
const AboutTrigger = document.querySelector("#AboutTrigger")
const ProjectsTrigger = document.querySelector("#ProjectsTrigger")

const MozaikPlusTrigger = document.querySelector("#MozaikPlusTrigger");
const RobloxHomeTrigger = document.querySelector("#RobloxHomeTrigger");
const LearnMoreRoblox = document.querySelector("#LearnMoreRoblox");
const GameRoblox = document.querySelector("#GameRoblox");

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

const translations = {
    en: {
        "btn-explore": "Interact to begin",
        "TextAbout": "About",
        "TextProjects": "Projects",
        "TextSocial": "Social Media & platforms",
        "TextSchool": "School Ressources (Coming Soon)",
        "TextSupport": "Support (Coming Soon)",
        "TextDonate": "Donate (Coming Soon, look in my previous website)",
        "TextContact": "Contact (Coming Soon)",
        "MozaikText1": "Mozaïk Plus will be an application and Chrome extension to better familiarize students with a complete redesign of the interface and the addition of relevant features on Mozaïk Portail.",
        "MozaikText2": "Features",
        "MozaikText3": "Dark mode",
        "MozaikText4": "Sidebar / Bottom navigation bar for navigation.",
        "MozaikText5": "Archive and restore your messages.",
        "MozaikText6": "Results spoilers.",
        "MozaikText7": "Results colors",
        "MozaikText8": "Settings",
        "MozaikText9": "Disable workspaces, even after logging in. (Customizable in settings)",
        "MozaikText10": "Scrolling frames (Instead of scrolling the entire website in certain pages)",
        "MozaikText11": "Disable the \"See previous terms\" button in the \"Assignment Marks\" section of your classes. Instead, the 3 steps for the year will be displayed.",
        "MozaikText12": "And much more!",
        "MozaikText13": "Appearance",
        "MozaikText14": "Animations when interacting with buttons",
        "MozaikText15": "Background image",
        "MozaikText16": "Transitions",
        "MozaikText17": "New Icons",
        "MozaikText18": "Icons next to text in \"My classes\" section",
        "MozaikText19": "More info coming soon!",
        "RobloxhomeText1": "Home is an experiment created in late 2025 for the sole purpose of recreating as many Roblox interfaces as possible in order to obtain more information using the many APIs provided by Roblox.",
        "RobloxhomeText2": "What is Roblox ?",
        "RobloxhomeText3": "Roblox is a platform that offers billions of experiences created by various developers and users. Thanks to its simple and intuitive programming language, <a id=\"link\" href=\"https://luau.org/\" target=\"_blank\">Luau</a> is ideal for beginners. To learn more, visit their official development website.",
        "RobloxhomeText4": "Learn More",
        "RobloxhomeText5": "How it works ?",
        "RobloxhomeText6": "With the different actions available, you can join experiences, listen to music, change your avatar and take a look at your friends and players in the platform. Here some pictures and videos of the features:",
        "RobloxhomeText7": "Overview",
        "RobloxhomeText8": "Music Action",
        "RobloxhomeText9": "Players & Friends Action",
        "RobloxhomeText10": "Play Action",
        "RobloxhomeText11": "Is the game available ?",
        "RobloxhomeText12": "Not yet. I want to make sure everything is working as expected before releasing it. You can visit the game's page to stay updated.",
        "RobloxhomeText13": "View on Roblox",
        "RobloxhomeText14": "Home, everything in one experience.",
        "AboutText1": "About",
        "AboutText2": "I love making things like programming, editing and more.",
        "AboutText3": "My IT story",
        "AboutText4": "When I was young, I developed a passion for computers, and I've grown every year since. It all started by exploring my computer environment to discover what would happen if I clicked a button. My curiosity led me to start creating user interfaces (UIs) with WIX, and I improved over time. Later, I created a game with two friends using the Construct 3 platform, and I quickly realized I loved creating interfaces. My two friends handled the gameplay while I created all the UI elements. This project lasted from November 2024 to July 2025. Then, I decided to gradually abandon it due to a lack of documentation and explanations, and because it was a bit complex. That's why, in August 2025, I created my first experience on Roblox Studio. Without realizing it, the knowledge I gained from Construct 3 made learning Luau much easier. In just three months, I mastered the language.",
        "AboutText5": "After all that, in the beginning of 2026, I was tired of an old interface on a web page. This page was Mozaïk Portail (mozaikportail.ca). So I decided to install an extension named Stylebot to customize this website. But I quickly realized that was coding. So by the help of Google Gemini (AI), I learned how to code in CSS and the web page was beautiful. Soon, I will release an APK file for android devices and a extension file for desktop browsers to allow everyone enjoying my work. This will be called Mozaïk Plus. So after learning CSS, I got motivated to learn HTML and Javascript and that's why I started to create my own website with theses 3 languages (CSS + HTML + JS) that will remplace the WIX website.",
        "AboutText6": "Ultimately, thanks to all the experience I've gained over the past three years, I'm helping the community and learning programming languages. I also make progress on my Roblox game Home, my website and Mozaïk Plus.",
        "AboutText7": "Why the name Willixau ?",
        "AboutText8": "Back in 2023, instead of integrating my real name, I wanted to create a French username with the beginning of my real name with a special letter: X. So I started with \"Chaine Willix\" (the Willix channel) for at least five months until I realised it wasn't original enough. So that's why I wanted something with water. So in French, water is \"eau\". So, I went with Willixeau. Later, I removed the \"e\" in \"eau\" for a shorter username, and I added two zeros to be on the top of the player lists (because they're sorted alphabetically). So here is the result: 00willixau00. After that, I added a capital letter, changing it to '00Willixau00', and starting in Mars 2025, I finally kept it to only 'Willixau'.",
        "AboutText9": "Logo history",
        "AboutText10": "2023 - October 2024 (Still using for branding) ",
        "AboutText11": "October 2024 - December 2024",
        "AboutText12": "December 2024 - February 2025",
        "AboutText13": "February 2025 - March 2025",
        "AboutText14": "March 2025 - Today",
        "AboutText15": "Background History",
        "AboutText16": "February 2024 - June 2025",
        "AboutText17": "June 2025 - Today",
        "AboutText18": "Desktop Background History",
        "AboutText19": "July 2024 - July 2025",
        "AboutText20": "July 2025 - January 2026",
        "AboutText21": "January 2026 - Today",
        "SocialText1": "Social Media & platforms",
        "RobloxText1": "Profile",
        "RobloxText2": "Community",
        "RobloxText3": "Game (Home)",
        "DiscordText1": "Profile",
        "DiscordText2": "Home Server",
        "GDText1": "Username: 00willixau00",
        "GDText2": "User ID: 219458795"
    },
    fr: {
        "btn-explore": "Interagissez pour débuter",
        "TextAbout": "À propos",
        "TextProjects": "Projets",
        "TextSocial": "Réseaux sociaux et plateformes",
        "TextSchool": "Ressources scolaires (À venir)",
        "TextSupport": "Support (À venir)",
        "TextDonate": "Don (À venir, consultez mon site web précédent)",
        "TextContact": "Contact (À venir)",
        "MozaikText1": "Mozaïk Plus sera une application et une extension Chrome pour mieux familiariser les étudiants avec une refonte complète de l'interface et l'ajout de fonctionnalités pertinentes sur Mozaïk Portail.",
        "MozaikText2": "Fonctionnalités",
        "MozaikText3": "Thème sombre",
        "MozaikText4": "Barre de navigation latérale / inférieure pour la navigation.",
        "MozaikText5": "Archiver et restaurer vos messages.",
        "MozaikText6": "Spoilers de résultats.",
        "MozaikText7": "Couleurs de résultats",
        "MozaikText8": "Paramètres",
        "MozaikText9": "Désactiver les espaces de travail, même après une connexion. (Personnalisable dans les paramètres)",
        "MozaikText10": "Boîtes défilantes (Au lieu de défiler tout le site web sur certaines pages)",
        "MozaikText11": "Désactiver le bouton \"Voir les étapes précédentes\" dans la section \"Résultats des travaux\" de vos classes. À la place, les 3 étapes pour l'année seront affichées.",
        "MozaikText12": "Et bien plus !",
        "MozaikText13": "Apparence",
        "MozaikText14": "Animations lors de l'interaction avec les boutons",
        "MozaikText15": "Image d'arrière-plan",
        "MozaikText16": "Transitions",
        "MozaikText17": "Nouvelles icônes",
        "MozaikText18": "Icônes à côté du texte dans la section \"Mes cours\"",
        "MozaikText19": "Plus d'informations à venir!",
        "RobloxhomeText1": "Home est un projet expérimental créé fin 2025 dans le seul but de recréer autant d'interfaces de Roblox que possible afin d'afficher plus d'informations grâce aux nombreuses API fournies par Roblox.",
        "RobloxhomeText2": "Qu'est-ce que Roblox ?",
        "RobloxhomeText3": "Roblox est une plateforme qui propose des milliards d'expériences créées par divers développeurs et utilisateurs. Grâce à son langage de programmation simple et intuitif, <a id=\"link\" href=\"https://luau.org/\" target=\"_blank\">Luau</a> est idéal pour les débutants. Pour en savoir plus, consultez leur site de développement officiel.",
        "RobloxhomeText4": "En savoir plus",
        "RobloxhomeText5": "Comment ça fonctionne ?",
        "RobloxhomeText6": "Avec les différentes actions disponibles, vous pouvez rejoindre des expériences, écouter de la musique, changer votre avatar et jeter un œil à vos amis et aux joueurs sur la plateforme. Voici quelques images et vidéos des fonctionnalités :",
        "RobloxhomeText7": "Aperçu",
        "RobloxhomeText8": "Action Musique",
        "RobloxhomeText9": "Action Joueurs & Amis",
        "RobloxhomeText10": "Action Jouer",
        "RobloxhomeText11": "Le jeu est-il disponible ?",
        "RobloxhomeText12": "Pas encore. Je veux m'assurer que tout fonctionne comme prévu avant de le publier. Vous pouvez visiter la page du jeu pour rester à jour.",
        "RobloxhomeText13": "Voir sur Roblox",
        "RobloxhomeText14": "Home, tout en une expérience.",
        "AboutText1": "À propos",
        "AboutText2": "J'adore créer des interfaces utilisateur (UI), programmer, faire du montage et plus encore.",
        "AboutText3": "Mon histoire en informatique",
        "AboutText4": "Quand j'étais jeune, j'ai développé une passion pour les ordinateurs, et j'ai grandi chaque année depuis. Tout a commencé par explorer mon environnement informatique pour découvrir ce qui se passerait si je cliquais sur un bouton. Ma curiosité m'a conduit à commencer à créer des interfaces utilisateur (UI) avec WIX, et je me suis amélioré au fil du temps. Plus tard, j'ai créé un jeu avec deux amis en utilisant la plateforme Construct 3, et j'ai rapidement réalisé que j'aimais créer des interfaces. Mes deux amis s'occupaient du gameplay tandis que je créais tous les éléments UI. Ce projet a duré de novembre 2024 à juillet 2025. Ensuite, j'ai décidé de l'abandonner progressivement en raison d'un manque de documentation et d'explications, et parce que c'était un peu complexe. C'est pourquoi, en août 2025, j'ai créé ma première expérience sur Roblox Studio. Sans m'en rendre compte, les connaissances que j'avais acquises grâce à Construct 3 ont rendu l'apprentissage de Luau beaucoup plus facile. En seulement trois mois, j'ai maîtrisé le langage.",
        "AboutText5": "Après tout cela, au début de 2026, j'étais fatigué d'une ancienne interface sur une page web. Cette page était Mozaïk Portail (mozaikportail.ca). J'ai donc décidé d'installer une extension nommée Stylebot pour personnaliser ce site web. Mais j'ai rapidement réalisé que c'était du codage. Alors, avec l'aide de Google Gemini (IA), j'ai appris à coder en CSS et la page web était magnifique. Bientôt, je publierai un fichier APK pour les appareils Android et un fichier d'extension pour les navigateurs de bureau afin de permettre à tout le monde de profiter de mon travail. Cela s'appellera Mozaïk Plus. Donc après avoir appris le CSS, j'ai été motivé à apprendre le HTML et le Javascript et c'est pourquoi j'ai commencé à créer mon propre site web avec ces 3 langages (CSS + HTML + JS) qui remplacera éventuellement le site WIX.",
        "AboutText6": "En fin de compte, grâce à toute l'expérience que j'ai acquise au cours des trois dernières années, j'aide la communauté et j'apprends des langages de programmation. Je fais également des progrès sur mon jeu Roblox Home, mon site web et Mozaïk Plus.",
        "AboutText7": "Pourquoi le nom Willixau ?",
        "AboutText8": "En 2023, au lieu d'intégrer mon vrai nom, je voulais créer un nom d'utilisateur avec le début de mon vrai nom avec une lettre spéciale : X. J'ai donc commencé avec \"La Chaine Willix\" pendant au moins cinq mois jusqu'à ce que je réalise que ce n'était pas assez original. C'est pourquoi je voulais quelque chose avec de l'eau. J'ai donc opté pour Willixeau. Plus tard, j'ai retiré le \"e\" dans \"eau\" pour un nom plus court, et j'ai ajouté deux zéros pour être en haut des listes de joueurs (\"playerlists\") (car elles sont triées par ordre alphabétique) qui donne 00willixau00. Après cela, j'ai ajouté une majuscule, le changeant en '00Willixau00', et à partir de mars 2025, je l'ai finalement gardé uniquement en 'Willixau'.",
        "AboutText9": "Historique du logo",
        "AboutText10": "2023 - Octobre 2024 (Toujours utilisé pour le branding) ",
        "AboutText11": "Octobre 2024 - Décembre 2024",
        "AboutText12": "Décembre 2024 - Février 2025",
        "AboutText13": "Février 2025 - Mars 2025",
        "AboutText14": "Mars 2025 - Aujourd'hui",
        "AboutText15": "Historique de l'arrière-plan",
        "AboutText16": " Février 2024 - Juin 2025",
        "AboutText17": "Juin 2025 - Aujourd'hui",
        "AboutText18": "Historique de l'arrière-plan du bureau",
        "AboutText19": "Juillet 2024 - Juillet 2025",
        "AboutText20": "Juillet 2025 - Janvier 2026",
        "AboutText21": "Janvier 2026 - Aujourd'hui",
        "TextSocial": "Réseaux sociaux et plateformes",
        "RobloxText1": "Profil",
        "RobloxText2": "Communauté",
        "RobloxText3": "Jeu (Home)",
        "DiscordText1": "Profil",
        "DiscordText2": "Serveur Home",
        "GDText1": "Nom d'utilisateur : 00willixau00",
        "GDText2": "ID utilisateur : 219458795"
    }
};

// --- SYSTÈME DE TRADUCTION ---
// 1. Définir la langue par défaut
let currentLang = localStorage.getItem('userLang') || 'en';
const langBtn = document.getElementById('lang-toggle'); 

// 2. Fonction qui met à jour tous les textes
function updateLanguage() {
    // Trouve TOUS les éléments HTML qui ont un attribut data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Pour chaque élément, on va chercher la bonne traduction
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        
        // Si la clé existe dans notre dictionnaire pour la langue actuelle
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // innerHTML permet de garder les balises <br> si tu en as
        }
    });
    
    // Change le texte du bouton lui-même (Si on est en FR, le bouton propose de passer en EN)
    if (langBtn) {
       langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    }
}

// 3. Écouteur pour le clic sur le bouton de changement de langue
if (langBtn) {
    langBtn.addEventListener('click', () => {
        // Alterne entre 'fr' et 'en'
        currentLang = currentLang === 'fr' ? 'en' : 'fr';

        localStorage.setItem('userLang', currentLang);
        // Lance la mise à jour
        updateLanguage();
    });
}

// 4. TRÈS IMPORTANT : On appelle la fonction une première fois au chargement
// C'est ça qui va faire réapparaître ton texte immédiatement !
updateLanguage();
// -----------------------------

LearnMoreRoblox.addEventListener('click', () => {
    window.open('https://create.roblox.com/docs/get-started', '_blank');
})

GameRoblox.addEventListener('click', () => {
    window.open('https://www.roblox.com/games/101699826904489/Home', '_blank');
})

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
                          wrapper.classList.contains('show-mozaikplus') ||
                          wrapper.classList.contains('show-robloxhome');
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

RobloxHomeTrigger.addEventListener('click', () => {
    window.location.hash = "Home"; 
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
    else if (window.location.hash === "#MozaikPlus") {
        window.location.hash = "Projects";
    }
    else if (window.location.hash === "#Home") {
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
    wrapper.classList.remove('show-menu', 'show-about', 'show-projects', 'show-mozaikplus', 'show-robloxhome', 'show-social', 'show-roblox', 'show-youtube', 'show-discord', 'show-geometrydash');
    heroSection.classList.remove('hero-tall', 'about-tall', 'projects-tall', 'mozaikplus-tall', 'robloxhome-tall', 'social-tall', 'roblox-tall', 'youtube-tall', 'discord-tall', 'geometrydash-tall');

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
    } else if (hash === "#Home") {
        wrapper.classList.add('show-robloxhome', 'projects-active-order', 'robloxhome-active-order');
        heroSection.classList.add('robloxhome-tall');
    } else if (hash === "#Social") {
        wrapper.classList.add('show-social', 'social-active-order');
        heroSection.classList.add('social-tall');
    } else if (hash === "#Roblox") {
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
        if (hash !== "#Projects" && hash !== "#Home" && hash !== "#MozaikPlus") wrapper.classList.remove('projects-active-order');
        
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
        if (hash !== "#Home") wrapper.classList.remove('robloxhome-active-order');

        const allViews = document.querySelectorAll('.view');
        allViews.forEach(view => {
            view.scrollTop = 0; 
        });
    }, 350);
}

// 5. Écouteurs d'événements de chargement
window.addEventListener('load', updateInterfaceBasedOnHash);
window.addEventListener('hashchange', updateInterfaceBasedOnHash);