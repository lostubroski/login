function handlefavorite() {
    

   
    window.location.href = 'favorites.html'; 
}


const logoutButton = document.getElementById('favoritebutton');
if (logoutButton) {
    logoutButton.addEventListener('click', handlefavorite);
}