var image = document.getElementById('image');
var title = document.getElementById('title');
var description = document.getElementById('description');
var price = document.getElementById('Price');
var addForm = document.getElementById('addForm');
var cardsBody = document.getElementById('cardsBody');

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(image.value)
    console.log(title.value)
    console.log(description.value)
    console.log(price.value)
    //  image
    var newImage = document.createElement('img');
    newImage.className = 'card-img-top'
    newImage.src=image.value
    // title
    var newTitle = document.createElement('h5');
    newTitle.className = 'card-title'
    newTitle.innerHTML=title.value
    //  description
    var newDescription = document.createElement('p');
    newDescription.className = 'card-text'
    newDescription.innerHTML=description.value
    // price
    var newPrice = document.createElement('a');
    newPrice.className='btn-primary'
    newPrice.innerHTML = price.value
    //  contant
    var contant = document.createElement('div');
    contant.className='card-body'
    //  card
    var card = document.createElement('div');
    card.className = 'card'
    contant.append(newTitle)
    contant.append(newDescription)
    contant.append(newPrice)
    //  
    card.style.width='18rem'
    card.append(newImage)
    card.append(contant)
    cardsBody.append(card)
    
})


function addPTag(){
    var newP = document.createElement('p');
    newP.innerHTML = 'i am from js';
    cardsBody.append(newP)
}

//  update and delete for the cart  in the same page 