//============================================================
//=================== Moving div #player =====================
//============================================================
let player = document.getElementById("player");
let xPlayer = parseFloat(getComputedStyle(player).left);
let yPlayer = parseFloat(getComputedStyle(player).top);
let sizePlayer = parseFloat(getComputedStyle(player).height);

let speed = 5;

let frame = document.getElementById("frame");
let xMax = parseFloat(getComputedStyle(frame).width); //client width
let yMax = parseFloat(getComputedStyle(frame).height); //client height

let allowToMove = false; //Prevents player moving and opening other overlay while one overlay is open

//Stop the character from getting off the road or to walk over the chest
let allowLeft = true;
let allowRight = true;
let allowUp = true;
let allowDown = true;


function movePlayer(e) {
    //=============================================================================
    // ============================= Stopping conditions ==========================
    //=============================================================================
    
    //ALLOW LEFT
    if (xPlayer > mainRoadXPos + 10 || //if xPlayer is on the main road(+10 because of player size, to be sure he is not over the fence) OR 
        yPlayer > aboutRoadYPos - sizePlayer / 2 && yPlayer <= aboutRoadYPos + aboutRoadHeight - (sizePlayer - 5) || //if yPlayer is on aboutRoad OR
        yPlayer > projectRoadYPos - sizePlayer / 2 && yPlayer <= projectRoadYPos + projectRoadHeight - (sizePlayer - 5)) { //if yPlayer is on projectRoad
        allowLeft = true; //so the player can go Left
    } else {
        allowLeft = false; //else he can't ! Same system for all other directions
    }
    //if xPlayer is less than about or project chest position, he can't go Left to not walk over the chest
    // (+10 because of player size, to be sure he is not over the chest)
    if (xPlayer < aboutChestRight + 10 && xPlayer < projectChestRight + 10) {
        allowLeft = false;
    }

    //ALLOW RIGHT
    if (xPlayer < mainRoadXPos + mainRoadWidth - 10 ||
        yPlayer > educationRoadYPos - sizePlayer / 2 && yPlayer <= educationRoadYPos + educationRoadHeight - (sizePlayer - 5)) {

        allowRight = true;
    } else {
        allowRight = false;
    }
    //if xPlayer is less than education chest position, he can't go right to not walk over the chest
    // (-10 because of player size, to be sure he is not over the chest)
    if (xPlayer > xMax - educationChestLeft - 10) {
        allowRight = false;
    }

    //ALLOW UP
    if (xPlayer > mainRoadXPos && xPlayer < mainRoadXPos + mainRoadWidth ||
        xPlayer > mainRoadXPos && yPlayer > educationRoadYPos - 10 ||
        xPlayer < mainRoadXPos && yPlayer > aboutRoadYPos - 10 && yPlayer < aboutRoadYPos + aboutRoadHeight ||
        xPlayer < mainRoadXPos && yPlayer > projectRoadYPos - 10) {
        allowUp = true;
    } else {
        allowUp = false;
    }

    //ALLOW DOWN
    if (xPlayer > mainRoadXPos && xPlayer < mainRoadXPos + mainRoadWidth && yPlayer < contactChestTop - 30 ||
        xPlayer > mainRoadXPos && yPlayer < educationRoadYPos + educationRoadHeight - (sizePlayer) ||
        xPlayer < mainRoadXPos && yPlayer < aboutRoadYPos + aboutRoadHeight - (sizePlayer) ||
        xPlayer < mainRoadXPos && yPlayer > projectRoadYPos - sizePlayer / 2 && yPlayer < projectRoadYPos + projectRoadHeight - (sizePlayer)) {
        allowDown = true;
    } else {
        allowDown = false;
    }


    //=============================================================================
    // ============================== Moving conditions ===========================
    //=============================================================================
    //Moving Right
    if (e.keyCode === 68 || e.keyCode === 39) { //If "D" or "Arrow Right" 
        if (xPlayer + sizePlayer <= xMax && allowToMove && allowRight) { //If the player is on the screen AND he's allow to move AND allow to go to right
            xPlayer += speed; //so xPlayer = actual position + speed (5 in this case)
            player.style.left = xPlayer + "px"; //and the left css of the div player is now the value of xPlayer
            playerMoveRight(); //calling animation in playerAnimation.js ! 
            //Same system for all other directions and "Z" / "Q" / "S" / "Arrow Up / "Arrow Down" / "Arrow Left"/

        }
    }
    //Moving Left
    if (e.keyCode === 81 || e.keyCode === 37) {
        if (xPlayer > 0 && allowToMove && allowLeft) {
            xPlayer -= speed;
            player.style.left = xPlayer + "px";
            playerMoveLeft();
        }
    }
    //Moving Up
    if (e.keyCode === 90 || e.keyCode === 38) {
        if (yPlayer > 0 && allowToMove && allowUp) {
            yPlayer -= speed;
            player.style.top = yPlayer + "px";
            playerMoveUp();


        }
        if (isChestOpen == false) {
            window.scrollBy(0, -5);
        }
        

    }
    //Moving Down
    if (e.keyCode === 83 || e.keyCode === 40) {
        if (yPlayer + sizePlayer <= yMax && allowToMove && allowDown) {
            yPlayer += speed;
            player.style.top = yPlayer + "px";
            player.style.top = yPlayer + "px";
            playerMoveDown();
            window.scrollBy(0, 5);
        }
        
    }

    chestAnimation(); //calling animation in chest.js

}
