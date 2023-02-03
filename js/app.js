//MVP goals: Give user a greeting at opening

//Make a scoreboard that shows current score

//Make a count that shows how many moves were made

//Player can lose game


// document.addEventListener('DOMContentLoaded', () => {

    const gameElements = {

        gameStart: document.querySelector('button'),
        gameboard : document.querySelector('gameBoard'),
        moves: document.querySelector('moveCounter'),
        timer: document.querySelector('timer')
    }

    const card = document.querySelectorAll('.cardTile')

    //adding a function for card flipping
        
    function flipCard() {
        this.classList.toggle('flip');
    }

    cards.forEach(card => card.addEventListener('click', flipCard));


    shuffleImage()
    function shuffleImage () {
        card.forEach(card => {

            const num = [...Array(card.length).keys()]
            const random = Math.floor(Math.random()*card.length)
            
            card.style.order = num[random]

        })
    }

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

//I decided to put the cards in the HTML

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
