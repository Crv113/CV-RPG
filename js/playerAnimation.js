//=================================================================
//================  Animation div #player  ========================
//=================================================================
let playerImagesDown = ["img/b0.png", "img/b1.png", "img/b0.png", "img/b3.png"];
let playerImagesLeft = ["img/g0.png", "img/g1.png", "img/g0.png", "img/g3.png"];
let playerImagesUp = ["img/h0.png", "img/h1.png", "img/h0.png", "img/h3.png"];
let playerImagesRight = ["img/d0.png", "img/d1.png", "img/d0.png", "img/d3.png"];
let indexImagePlayer = 0;
let limiterPlayer = 0;

let playerImg = document.getElementById("player-img");

function playerMoveDown() { //When playerMoveDown is call
    playerImg.src = playerImagesDown[indexImagePlayer]; //<img> src is now the indexImagePlayer value of the playerImageDown array. (0 by default)
    limiterPlayer++; //limitePlayer is to slow down the animation
    if (limiterPlayer > 2) { //if limitePlayer is greater than 2
        if (indexImagePlayer < playerImagesDown.length - 1) { //and if indexImagePlayer less than the number of element in playerImageDown array
            indexImagePlayer++;// so indexImagePlayer++ and its change img src 
        } else {//else it starts again from 0
            indexImagePlayer = 0;
        }
        limiterPlayer = 0;
    }
    //same system for all other directions
}

function playerMoveLeft() {
    playerImg.src = playerImagesLeft[indexImagePlayer];
    limiterPlayer++;
    if (limiterPlayer > 2) {
        if (indexImagePlayer < playerImagesLeft.length - 1) {
            indexImagePlayer++;
        } else {
            indexImagePlayer = 0;
        }
        limiterPlayer = 0;
    }

}

function playerMoveUp() {
    playerImg.src = playerImagesUp[indexImagePlayer];
    limiterPlayer++;
    if (limiterPlayer > 2) {
        if (indexImagePlayer < playerImagesUp.length - 1) {
            indexImagePlayer++;
        } else {
            indexImagePlayer = 0;
        }
        limiterPlayer = 0;
    }
}

function playerMoveRight() {
    playerImg.src = playerImagesRight[indexImagePlayer];
    limiterPlayer++;
    if (limiterPlayer > 2) {
        if (indexImagePlayer < playerImagesRight.length - 1) {
            indexImagePlayer++;
        } else {
            indexImagePlayer = 0;
        }
        limiterPlayer = 0;
    }
}
