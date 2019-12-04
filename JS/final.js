const cards =document.querySelectorAll('.grid-item');

let hasSelectedCard = false;
let firstCard, secondCard;
function invisible(){
    firstCard.classList.add('invisible');
    secondCard.classList.add('invisible');
}
function highlight(){
    this.classList.add('hlight');


    if(!hasSelectedCard){
        hasSelectedCard=true;
        firstCard = this;
        console.log({hasSelectedCard, firstCard})
     }
    else {
        hasSelectedCard = false;
        secondCard=this;
        console.log(firstCard.dataset.name);
        console.log(secondCard.dataset.name);

        if(firstCard.dataset.name===secondCard.dataset.name){
            invisible();
        }
        else{
            setTimeout(() => {
                firstCard.classList.remove('hlight');
                secondCard.classList.remove('hlight');
            },250);

        }
    }

}

cards.forEach(card=>card.addEventListener('click', highlight));