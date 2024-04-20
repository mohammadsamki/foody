var flip =document.getElementsByClassName('flip');
console.log(flip)
var cardTitle =document.getElementsByClassName('card-title');
console.log(cardTitle)
var cardText =document.getElementsByClassName('card-text');
var cardLink = document.getElementsByClassName('card-link');
var faceOrBack = document.getElementsByClassName('face');
var flipForm = document.getElementById('flipForm');
var title = document.getElementById('title');
var text = document.getElementById('text');
var aTag = document.getElementById('aTag');
var selectedIndex ;
var backOrFace = {}
function flipTheCard(index){
    if (faceOrBack[index].innerHTML=='face'){
        cardTitle[index].innerHTML=backOrFace[index]['face']['title'];
        cardText[index].innerHTML='waiting back';
        cardLink[index].innerHTML='waiting back';
        faceOrBack[index].innerHTML='Back';
    }
    else{
        cardTitle[index].innerHTML='waiting face';
        cardText[index].innerHTML='waiting face';
        cardLink[index].innerHTML='waiting face';
        faceOrBack[index].innerHTML='face';
    }
    // alert('you are about to flip the card')
}
function selectedCard(index){
    alert('you selected the card number '+(index+1))
    selectedIndex = index;
}
flipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (selectedIndex != null){
        if (faceOrBack[selectedIndex].innerHTML=='face'){
            backOrFace[selectedIndex]={'face':{
                'title':title.value,
                'text':text.value,
                'aTag':aTag.value
                
            }}
            if (backOrFace[selectedIndex].back.title!=null){
                
            }
        }
        else {
            backOrFace[selectedIndex]={'back':{
                'title':title.value,
                'text':text.value,
                'aTag':aTag.value
            }}
        }
        
        console.log(backOrFace[selectedIndex].face.title)
        alert('you are about to edit the card ',(selectedIndex+1));
        cardTitle[selectedIndex].innerHTML=title.value;
        cardText[selectedIndex].innerHTML=text.value;
        cardLink[selectedIndex].innerHTML=aTag.value;
        selectedIndex = null;
    }else{
        alert('please select a card');
    }
    flipForm.reset();

})
