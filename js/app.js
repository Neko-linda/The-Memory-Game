//MVP goals: Give user a greeting at opening and instructions on how to play. !!!!DONE!!!!! 

//Make a scoreboard that shows current score

//Make a count that shows how many moves were made

//Player can lose game

//As a user, I want to be able to click on the cards in order to flip (or interact with) them instead of using my keyboard so that it's easier to interact. !!!!DONE!!!!
let playerGreeting = "Hello! Welcome to the memory game. You can press the start button to begin. The way the memory game is played is as follows: Click on the cards you want to flip over. If you get two cards that match you will gain points. Once you find all matching pairs - you win!"

alert(playerGreeting);
//-->

    const gameElements = {

        gameStart: document.querySelector('button'),
        gameboard : document.querySelector('gameBoard'),
        moves: document.querySelector('moveCounter'),
        timer: document.querySelector('timer')
    }

    // startGame() {
    //     this.toggleScreen('start-screen', false);
    //     this.toggleScreen('canvas', true);
    //     this.prepareCanvas();
    // }


//declaring the elements/Variables

    const card = document.querySelectorAll('.cardTile')
    const frontOfCard = document.querySelectorAll('.front')
    const backOfCard = document.querySelectorAll('.back')
    const stopButton = document.getElementById("quit")


//     // Initial stats when game starts

    const stats = {

    gameStart: false,
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
    //

    function shuffleImage() {
        card.forEach(c => {

            const num = [...Array(card.length).keys()]
            const random = Math.floor(Math.random()*card.length)
            
            c.style.order = num[random]

        })
    }
    //This code is working:::

    function flipCard() {

        for(let i = 0; i < card.length; i++) {
            
            card[i].addEventListener('click',()=>{
                //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
                frontOfCard[i].classList.add('flip')
                const flippedCard = document.querySelectorAll('.flip')

                if(flippedCard.length === 2){
                    checkForMatch();
                }
            })
        }
    }
    //Adding a function for the "Matching" call in the flip card function

    //This is working::

    function checkForMatch(card, uid) {

        let divsCards = document.querySelectorAll('.cardTile');
        cardsLen = divsCards.length;
    
        for (i = 0; i < cardsLen; i++) {
            var currentCard = divsCards[i];
    
            if (currentCard.dataset.card === card && currentCard.dataset.uid !== uid) {
                // We have found a match
            } else {
                frontOfCard[i].classList.remove('flip')
                frontOfCard[i].classList.remove('flip')
            }
        }
    }
    // ---------
// let matchingCards = 0;

//     function checkForMatch() {
//         let isMatch = firstCard.dataset.image === secondCard.dataset.image;
      
//         isMatch ? disableCards() : unflipCards();
//       }
      
//       function disableCards() {
//         firstCard.removeEventListener('click', flipCard);
//         secondCard.removeEventListener('click', flipCard);
//         matchingCards++
//         console.log(matchingCards)
//         if (matchingCards === 4) {
//           setTimeout(function(){
//           alert("Congratulations! You found all the pairs!"); 
//         }, 1000)
//       };
//     }



    // function checkForMatch() {
    //     let divsCards = Array.from(document.querySelectorAll('.card'));
    //     for (let i = 0; i < divsCards.length; i++) {
    //       let currentCard = divsCards[i]; // current element at index `i`
    //       divsCards.filter((_, index) => index !== i) // exclude current element          
    //       .forEach(function(card) {
    //         // compare remainder of elements to excluded element
    //         if (card.dataset.card === currentCard.dataset.card) {
    //           currentCard.classList.add('flipped');
    //         }
    //       });
    //     }
    //   }


// function flipCard() {

//     for(let i = 0; i<card.length; i++) {
        
//         card[i].addEventListener('click',()=>{

//             //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

//             frontOfCard[i].classList.add('flip')
//             const flippedCard = document.querySelectorAll('.flip')

//             if(flippedCard.length === 2){
//                 checkForMatch();
//             }
//         },1000);
//     }
// }




    // let chosencard = card.attributes["data-key"].value 
    //         console.log(chosencard)

    // function checkForMatch(){

    //     if(card.attributes["data-key"].value !== card.attributes["data-key"].value) {
    //         // let chosencard = element.attributes["data-key"].value 
    //         setTimeout(() => {
    //             card.classList.remove('flip')
    //             card.classList.remove('flip')
    //         }, 100);
    //     }
    // }

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
