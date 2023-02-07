
let playerGreeting = "Hello! Welcome to the memory game. You can press the start button to begin. The way the memory game is played is as follows: Click on the cards you want to flip over. If you get two cards that match you will gain points. Once you find all matching pairs - you win!"

alert(playerGreeting);
//-->
// Below
// Give the user a greeting and instructions before the game actually begins.
// A visible count that shows the user how many pairs they found
// Have the cards "flip" over to show which image was clicked upon
// have the possibility of the game ending if a wrong move is made


document.addEventListener('DOMContentLoaded', () => {

    //My card array with relative pathing for the images

const items = [
    {name: "KawaiiCat", img: "Images/KawaiiCat.png"},
    {name: "KawaiiCat", img: "Images/KawaiiCat.png"},
    {name: "KawaiiLion", img: "Images/KawaiiLion.png"},
    {name: "KawaiiLion", img: "Images/KawaiiLion.png"},
    {name: "KawaiiMoon", img: "Images/KawaiiMoon.png"},
    {name: "KawaiiMoon", img: "Images/KawaiiMoon.png"},
    {name: "KawaiiSun", img: "Images/KawaiiSun.png" },
    {name: "KawaiiSun", img: "Images/KawaiiSun.png" },
    {name: "KawaiiCherries", img: "Images/KawaiiCherries.png"},
    {name: "KawaiiCherries", img: "Images/KawaiiCherries.png"},
    {name: "KawaiiStars", img: "Images/KawaiiStars.png"},
    {name: "KawaiiStars", img: "Images/KawaiiStars.png"},
    {name: "KawaiiSunflowers", img: "Images/KawaiiSunflower.png"},
    {name: "KawaiiSunflowers", img: "Images/KawaiiSunflower.png"},
    {name: "KawaiiFrog", img: "Images/KawaiiFrog.png"},
    {name: "KawaiiFrog", img: "Images/KawaiiFrog.png"},
    {name: "KawaiiHearts", img: "Images/KawaiiHearts.png"},
    {name: "KawaiiHearts", img: "Images/KawaiiHearts.png"},
   ];


   //shuffles the card images everytime the page is reset or game starts again

   items.sort(() => 0.5 - Math.random());

   // Old psuedocode that didnt work
//    const generateRandom = (size = 4) => {
//     let tempArray = [...items];
//     let cardValues = [];
//     size = (size * size)/2;
//     for (let i = 0; i < size; i++) {
//         const randomIndex = Math.floor(Math.random() * tempArray.length);
//         cardValues.push(tempArray[randomIndex]);
//         tempArray.splice(randomIndex, 1);
//     }
//     return cardValues;
//    }


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result');

//the empty arrays for the functions below to push into
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];


function createGame() {
    for (let i = 0; i < items.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'Images/KawaiiBlossom.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    };
}

//invokes the flipcard function attached to the event listener

function flipCard() {

    let cardId = this.getAttribute('data-id')
    cardsChosen.push(items[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', items[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 300)
    };
}

//Invokes the checkForMatch function thats stated above
function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('YAY! You found a match!')
        cards[optionOneId].setAttribute('src', 'Images/KawaiiMatch.png')
        cards[optionTwoId].setAttribute('src', 'Images/KawaiiMatch.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'Images/KawaiiBlossom.png')
        cards[optionTwoId].setAttribute('src', 'Images/KawaiiBlossom.png')
        alert('Incorrect match! Try again')
    };

    cardsChosen = [];
    cardsChosenId = [];
    
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === items.length/2) {
        resultDisplay.textContent = 'Congragulations! All matches have been found!'
    };
}

createGame()

})