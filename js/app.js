//MVP goals: Give user a greeting at opening and instructions on how to play. 

//Make a scoreboard that shows current score

//Make a count that shows how many moves were made

//Player can lose game

//As a user, I want to be able to click on the cards in order to flip (or interact with) them instead of using my keyboard so that it's easier to interact. !!!1DONE!!!!


// document.addEventListener('DOMContentLoaded', () => {

    // const gameElements = {

    //     gameStart: document.querySelector('button'),
    //     gameboard : document.querySelector('gameBoard'),
    //     moves: document.querySelector('moveCounter'),
    //     timer: document.querySelector('timer')
    // }

    // startGame() {
    //     this.toggleScreen('start-screen', false);
    //     this.toggleScreen('canvas', true);
    //     this.prepareCanvas();
    // }


//declaring the elements/Variables

    const timer = document.querySelector('.timer')
    const card = document.querySelectorAll('.cardTile')
    const frontOfCard = document.querySelectorAll('.front')
    const backOfCard = document.querySelectorAll('.back')


    // Initial stats when game starts

const stats = {

    gameStart: false,
    totalTime: 0,
    totalFlips: 0,
    movesMade: 0,
    cardsFlipped: 0,
    loop: null
}

    // giving the start button a function 
    
    // toggleScreen(id, toggle) {
    //     let element = document.getElementById(id);
    //     let display = (toggle) ? 'block' : 'none';
    //     element.style.display = display;
    // }

    
    //adding a function for card flipping and also shuffling the images after restarting the game.


    shuffleImage()
    flipCard()
    checkForMatch()

    //

    function shuffleImage() {
        card.forEach(c => {

            const num = [...Array(card.length).keys()]
            const random = Math.floor(Math.random()*card.length)
            
            c.style.order = num[random]

        })
    }

    function flipCard() {

        for(let i = 0; i<card.length; i++) {
            
            card[i].addEventListener('click',()=>{

                //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

                frontOfCard[i].classList.add('flip')
                const flippedCard = document.querySelectorAll('.flip')

                if(flippedCard.length == 2){
                    checkForMatch() 
                }
            })
        }
    }
    //Adding a function for the "Matching" call in the flip card function

    function checkForMatch(firstCard, secondCard) {
        if(firstCard.dataset.index == secondCard.dataset.index) {

        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
            }, 100);
        }
    }


    //used settimeout to show the player that they chose the wrong pairs https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
       
    // ---------


    //THIS IS OLD PSUEDO CODE: I decided to put the cards in the HTML
//Card objects using arrays and relative pathing

// const cardOptions = [
//     {name: 'kitty', Img: 'IconImages/KawaiiCat.png'},
//     {name: 'cherry', Img: 'IconImages/KawaiiCherries.png'},
//     {name: 'frog', Img: 'IconImages/KawaiiFrog.png'},
//     {name: 'hearts', Img: 'IconImages/KawaiiHearts.png'},
//     {name: 'lion', Img: 'IconImages/KawaiiLion.png'},
//     {name: 'moon', Img: 'IconImages/KawaiiMoon.png'},
//     {name: 'stars', Img: 'IconImages/KawaiiStars.png'}, 
//     {name: 'sun', Img: 'IconImages/KawaiiSun'},
//     {name: 'sunflower', Img: 'IconImages/KawaiiSunflower.png'},
// ];


// // Game board
// const table = document.querySelector('.gameBoard')

// function randomCards () {
//     for (let i = 0; i < cardOptions.length; i++) {
//         var card = document.createElement('Img')
//         card.setAttribute('src', 'IconImages/QuestionMark.png')
//         card.setAttribute('data-id',i)
//         // card.addEventListener('click', cardflip)
//         table.appendChild(card)
//Here I learned about "Append child" through MDNWebdocs and a bit of googling.
//     }
// }

// function startGame() {
//     console.log('start game');
//     gameloop.start();
// }