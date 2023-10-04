
function addToFavorites(video) {
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

 
    if (!favorites.some(fav => fav.title === video.title)) {
        favorites.push(video);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Added to Favorites!');
    } else {
        alert('This video is already in your Favorites.');
    }
}


const addToFavoritesButtons = document.querySelectorAll('.addToFavorites');
addToFavoritesButtons.forEach(button => {
    button.addEventListener('click', () => {
        const listItem = button.parentElement;
        const videoTitle = listItem.querySelector('h3').textContent;
        const videoURL = listItem.querySelector('video').getAttribute('src');
        addToFavorites({ title: videoTitle, url: videoURL });
    });
});
