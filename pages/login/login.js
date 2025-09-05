const register = document.getElementById("form")
const error = document.getElementById("error")

register.addEventListener("submit", function(event) {
    event.preventDefault()

    const pseudo = document.getElementById("pseudo_input").value
    const dob = document.getElementById("dob_input").value
    const email = document.getElementById("email_input").value
    const password1 = document.getElementById("password1_input").value
    const password2 = document.getElementById("password2_input").value

    if (password1 != password2) {
        error.style.display = "block"
        error.innerText = "Les mots de passes ne correspondent pas !"
        return
    }

    
    
    fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pseudo, email, password: password1, dob })
    })
    .then(response => {
    if (!response.ok) {
        // Réponse d’erreur HTTP
        return response.json().then(errData => {
        throw new Error(errData.message || "Erreur inconnue")
        });
    }
    return response.json()
    })
    .then(data => {
    const result = confirm("Compte créé avec succès, voulez-vous retourner sur la page d'accueil ?")
    if (result) {
        window.location.href = "/index.html"
    }
    })
    .catch(err => {
    error.style.display = "block"
    error.innerText = `Erreur : ${err.message}`
    })
})