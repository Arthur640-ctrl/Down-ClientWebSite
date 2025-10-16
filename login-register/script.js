const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')

const error_div = document.getElementById("form-login-error-div")
const error_p = document.getElementById("form-login-error-p")

error_div.style.display = "none"

loginForm.addEventListener('submit', function(e) {
    e.preventDefault()
    login()
})

registerForm.addEventListener('submit', function(e) {
    e.preventDefault()
    register()
    
})

function login() {
    const email = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value

    alert("Login...")

    fetch(' http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if ("token" in data) {
            localStorage.setItem("down-token", data.token)
            alert(`Connecté avec le token : ${localStorage.getItem("down-token")}`)
        } else {
            error_p.innerText = data.message
            error_div.style.display = "block"
        }
    })
    .catch(error => {
        console.log(error)
    })
}

function register() {
    console.log("Register")

    const pseudo= document.getElementById("register-pseudo").value
    const email = document.getElementById("register-email").value
    // const dob = document.getElementById("register-dob").value
    const password = document.getElementById("register-password").value
    const password_confirmation = document.getElementById("register-password-confirm").value


}