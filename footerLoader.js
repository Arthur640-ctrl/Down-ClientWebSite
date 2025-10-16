// Gestion des liens du footer
function setupFooterLinks(linksMap) {
    const footerLinks = document.querySelectorAll('.footer-links a')
    
    footerLinks.forEach(link => {
        const linkText = link.textContent.trim()
        
        // Vérifie si ce texte existe dans notre mapping
        if (linksMap[linkText]) {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                window.open(linksMap[linkText], '_blank')
            })
        }
    })
}

// Configuration des liens
const footerLinksConfig = {
    // Liens Jeu
    'Télécharger': 'https://down-game.com/download',
    'Mises à jour': 'https://down-game.com/updates',
    'Patch Notes': 'https://down-game.com/patchnotes',
    
    // Liens Communauté
    'Discord': 'https://discord.gg/JyrezakFSk',
    'Forums': 'https://forums.down-game.com',
    'Événements': 'https://down-game.com/events',
    
    // Liens Support
    'FAQ': 'https://support.down-game.com/faq',
    'Contact': 'https://support.down-game.com/contact',
    'Signaler un bug': 'https://support.down-game.com/bugreport'
}

// Initialisation
setupFooterLinks(footerLinksConfig)