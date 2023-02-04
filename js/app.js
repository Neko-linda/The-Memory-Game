//MVP goals: Give user a greeting at opening

//Make a scoreboard that shows current score

//Make a count that shows how many moves were made

//Player can lose game


// document.addEventListener('DOMContentLoaded', () => {

    // const gameElements = {

    //     gameStart: document.querySelector('button'),
    //     gameboard : document.querySelector('gameBoard'),
    //     moves: document.querySelector('moveCounter'),
    //     timer: document.querySelector('timer')
    // }


    const timer = document.querySelector('.timer')
    const card = document.querySelectorAll('.cardTile')
    const frontOfCard = document.querySelectorAll('.front')
    const backOfCard = document.querySelectorAll('.back')

    //adding a function for card flipping and also shuffling the images after restarting the game.


    shuffleImage()
    flipCard()
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
                frontOfCard[i].classList.add('flip')
                const flippedCard = document.querySelectorAll('.flip')

                if(flippedCard.length == 2){
                    checkForMatch(flippedCard[0], flippedCard[1]) //here is where we add a callback for the finding a match function
                }
            })
        }
    }


    //Adding a function for the "Matching" call in the flip card function

    function checkForMatch(firstCard , secondCard) {
    //used settimeout to show the player that they chose the wrong pairs https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    if(firstCard.dataset.index == secondCard.dataset.index) {
        firstCard.classlist.remove('flip')
        secondCard.classList.remove('flip')

        firstCard.classList.add('checkForMatch')
        secondCard.classList.add('checkForMatch')
    }else{
            setTimeout(() => {
            firstCard.classlist.remove('flip')
            secondCard.classList.remove('flip')
        }, 1000);
    }
}

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



//Initial stats when game starts

// const stats = {

//     gameStart: false,
//     time: 0,
//     movesMade: 0,
//     cardsFlipped: 0,

// }

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
