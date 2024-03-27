var favButton = document.getElementsByClassName('favButton');

function fav(index) {
favButton[index].addEventListener('click', () => {
   
    console.log(favButton[index].children[0]);
    var fill = document.getElementsByClassName('bi-heart-fill')[index];
    if (fill.style.display == 'none') {
        fill.style.display = 'block';
    }
    else {
        fill.style.display = 'none';
    }
})

}