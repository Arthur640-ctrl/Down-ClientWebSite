document.addEventListener('DOMContentLoaded', function() {
    const authTabs = document.querySelectorAll('.auth-tab')
    const authForms = document.querySelectorAll('.auth-form')
    const authHeader = document.querySelector('.auth-header')
    
    // Fonction pour changer d'onglet (exportable)
    window.switchAuthTab = function(targetTab) {
        // Mise à jour des tabs
        authTabs.forEach(tab => {
            tab.classList.remove('active')
            if (tab.getAttribute('data-tab') === targetTab) {
                tab.classList.add('active')
            }
        })
        
        // Mise à jour du header
        authHeader.classList.toggle('register-active', targetTab === 'register')
        
        // Mise à jour des formulaires
        authForms.forEach(form => {
            form.classList.remove('active')
            if (form.id === `${targetTab}-form`) {
                form.classList.add('active')
            }
        })
    }
    
    // Gestion du toggle entre connexion/inscription (clics)
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab')
            switchAuthTab(targetTab)
        })
    })
    
    // Animation des inputs
    const inputs = document.querySelectorAll('.input-group input')
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused')
        })
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused')
            }
        })
        
        // Initialisation pour les champs pré-remplis
        if (input.value) {
            input.parentElement.classList.add('focused')
        }
    })
    
    // Effets visuels supplémentaires
    const authBtn = document.querySelectorAll('.auth-btn')
    authBtn.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)'
        })
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)'
        })
    })
})