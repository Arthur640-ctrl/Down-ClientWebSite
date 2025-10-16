// script.js - Scripts pour les animations et interactions

function animateCounters(numbersArray) {
    const statNumbers = document.querySelectorAll('.stat-number')
    
    function animateCounter(element, targetValue) {
        const increment = targetValue / 50
        let current = 0
        
        const updateNumber = () => {
            if (current < targetValue) {
                current += increment
                element.textContent = Math.floor(current).toLocaleString()
                setTimeout(updateNumber, 30)
            } else {
                element.textContent = targetValue.toLocaleString()
            }
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateNumber()
                    observer.unobserve(entry.target)
                }
            })
        })
        
        observer.observe(element)
    }

    statNumbers.forEach((stat, index) => {
        animateCounter(stat, numbersArray[index])
    })
}

// Utilisation
animateCounters([125000, 85000, 3200])