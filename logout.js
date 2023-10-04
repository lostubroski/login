
function handleLogout() {
    
    localStorage.removeItem('authToken');

   
    window.location.href = 'index.html'; 
}


const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', handleLogout);
}
