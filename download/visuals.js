// download-script.js - Scripts pour la page de téléchargement

// Gestion du sélecteur d'OS
function setupOSSelector() {
    const osOptions = document.querySelectorAll('.os-option')
    const downloadBtn = document.querySelector('.download-btn')
    const btnText = downloadBtn.querySelector('.btn-text')
    const btnSubtext = downloadBtn.querySelector('.btn-subtext')
    
    // Configuration des versions par OS
    const osConfig = {
        windows: {
            text: 'Télécharger le Launcher',
            subtext: 'Version Windows 64-bit',
            size: '4.2 GB'
        },
        mac: {
            text: 'Télécharger pour macOS',
            subtext: 'Version macOS 12+',
            size: '4.5 GB'
        },
        linux: {
            text: 'Télécharger pour Linux',
            subtext: 'Version Ubuntu 20.04+',
            size: '4.1 GB'
        }
    }
    
    osOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Retire la classe active de toutes les options
            osOptions.forEach(opt => opt.classList.remove('active'))
            // Ajoute la classe active à l'option cliquée
            option.classList.add('active')
            
            // Met à jour le bouton de téléchargement
            const os = option.dataset.os
            const config = osConfig[os]
            btnText.textContent = config.text
            btnSubtext.textContent = config.subtext
            
            // Met à jour la taille dans les détails
            document.querySelector('.detail-value:nth-child(2)').textContent = config.size
        })
    })
}

// Gestion de la FAQ
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item')
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question')
        
        question.addEventListener('click', () => {
            // Ferme tous les autres items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active')
                }
            })
            
            // Ouvre/ferme l'item actuel
            item.classList.toggle('active')
        })
    })
}

// Animation des statistiques
function animateDownloadStats() {
    const statNumber = document.querySelector('.stat-number')
    const target = 125000
    const increment = target / 50
    let current = 0
    
    const updateNumber = () => {
        if (current < target) {
            current += increment
            statNumber.textContent = Math.floor(current).toLocaleString() + '+'
            setTimeout(updateNumber, 30)
        } else {
            statNumber.textContent = target.toLocaleString() + '+'
        }
    }
    
    // Déclenche l'animation quand l'élément est visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateNumber()
                observer.unobserve(entry.target)
            }
        })
    })
    
    observer.observe(statNumber)
}

// Initialisation
setupOSSelector()
setupFAQ()
animateDownloadStats()

// Gestion des clics sur le bouton de téléchargement
const downloadBtn = document.querySelector('.download-btn')
downloadBtn.addEventListener('click', function() {
    const activeOS = document.querySelector('.os-option.active').dataset.os
    const downloadUrls = {
        windows: '/download/launcher/DOWN_Launcher_Windows.exe',
        mac: '/download/launcher/DOWN_Launcher_macOS.dmg',
        linux: '/download/launcher/DOWN_Launcher_Linux.tar.gz'
    }
    
    // Simulation de téléchargement
    const url = downloadUrls[activeOS]
    console.log(`Téléchargement de: ${url}`)
    
    // Ici, tu remplacerais par un vrai téléchargement
    // window.location.href = url
    
    // Animation de feedback
    const originalText = this.innerHTML
    this.innerHTML = '<span class="btn-text">📥 Téléchargement en cours...</span>'
    this.disabled = true
    
    setTimeout(() => {
        this.innerHTML = originalText
        this.disabled = false
        alert('Téléchargement simulé ! En production, le fichier se téléchargerait.')
    }, 2000)
})