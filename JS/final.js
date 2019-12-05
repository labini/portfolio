const cards = document.querySelectorAll('.grid-item');

let hasSelectedCard = false;
let firstCard, secondCard;

function invisible() {
    firstCard.classList.add('invisible');
    secondCard.classList.add('invisible');
}

function highlight() {
    this.classList.add('hlight');
    let allHCards = document.getElementsByClassName('hlight');
    if (allHCards.length === 1) {
        second = 0;
        minute = 0;

        startTimer();
    }


    if (!hasSelectedCard) {
        hasSelectedCard = true;
        firstCard = this;
        console.log({hasSelectedCard, firstCard})

    } else {
        hasSelectedCard = false;
        secondCard = this;
        console.log(firstCard.dataset.name);
        console.log(secondCard.dataset.name);

        if (firstCard.dataset.name === secondCard.dataset.name) {
            invisible();
        } else {
            setTimeout(() => {
                firstCard.classList.remove('hlight');
                secondCard.classList.remove('hlight');
            }, 250);

        }
    }


}

cards.forEach(card => card.addEventListener('click', highlight));


let allCards = document.getElementsByClassName('grid-item');


// timer
let second = 0, minute = 0;
let timer = document.querySelector(".timer");
let interval;

function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = minute + " min " + second + " s";
        second++;
        if (second === 60) {
            minute++;
            second = 0;
        }
        if (minute === 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

function reset() {
    for (let i = 0; i < allCards.length; i++) {
        let item = allCards[i];
        if (item.classList.contains('invisible')) {
            item.classList.remove('invisible', 'hlight');
        }
    }
    let timer = document.querySelector(".timer");
    timer.innerHTML = "0 min 0 s";
    clearInterval(interval);
}

