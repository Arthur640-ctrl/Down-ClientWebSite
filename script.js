function isUserLoggedIn() {
    const token = localStorage.getItem('TOKEN')
    return token !== null && token !== undefined && token !== ''
}
