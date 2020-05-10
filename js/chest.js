//=============================================================================
//======================== Chest conditions & animations ======================
//=============================================================================

//About road position informations
let aboutRoad = document.getElementById("about-road");
let aboutRoadYPos = parseFloat(getComputedStyle(aboutRoad).top);
let aboutRoadHeight = parseFloat(getComputedStyle(aboutRoad).height);

//Education road position informations
let educationRoad = document.getElementById("education-road");
let educationRoadYPos = parseFloat(getComputedStyle(educationRoad).top);
let educationRoadHeight = parseFloat(getComputedStyle(educationRoad).height);

//Project road position informations
let projectRoad = document.getElementById("project-road");
let projectRoadYPos = parseFloat(getComputedStyle(projectRoad).top);
let projectRoadHeight = parseFloat(getComputedStyle(projectRoad).height);

//Main road position informations
let mainRoad = document.getElementById("main-road");
let mainRoadXPos = parseFloat(getComputedStyle(mainRoad).left);
let mainRoadWidth = parseFloat(getComputedStyle(mainRoad).width);
mainRoadXPos -= mainRoadWidth / 2; //This calcul is because the real main road left position is 50% of the client width - 50% of his own width,
//and now we know where the left border of the main road is.


let aboutChest = document.getElementById("about-chest");
let educationChest = document.getElementById("education-chest");
let projectChest = document.getElementById("project-chest");
let contactChest = document.getElementById("contact-chest");
let isChestOpen = false;

function chestAnimation() {
    //=============================================================================
    // ====================== Chest opening/closing conditions ====================
    //=============================================================================
    
    //----------  About chest conditions  ----------
    //If the player is close to the chest, opening the overlay and calling the animation
    if (yPlayer > aboutRoadYPos && yPlayer < aboutRoadYPos + aboutRoadHeight) {
        if (xPlayer < 150 && isChestOpen == false) {
            openAboutOverlay();
            isChestOpen = true;
        }
        //Possibility to open the overlay again only if the player has moved away
        //Prevents a player from being trapped in a zone of conditions with the opening of overlay
        if (yPlayer < aboutRoadYPos || yPlayer > aboutRoadYPos + aboutRoadHeight) {
            isChestOpen = false;
        }
        if (xPlayer > 150) {
            isChestOpen = false;
        }
    }

    //----------  Education chest conditions  ----------
    //If the player is close to the chest, opening the overlay and calling the animation
    if (yPlayer > educationRoadYPos && yPlayer < educationRoadYPos + educationRoadHeight) {

        if (xPlayer > xMax - 150 && isChestOpen == false) {
            openEducationOverlay();
            isChestOpen = true;
        }
        //Possibility to open the overlay again only if the player has moved away
        //Prevents a player from being trapped in a zone of conditions with the opening of overlay
        if (yPlayer < educationRoadYPos || yPlayer > educationRoadYPos + educationRoadHeight) {
            isChestOpen = false;
        }
        if (xPlayer < xMax - 150) {
            isChestOpen = false;
        }
    }

    //----------  Project chest conditions  ----------
    //If the player is close to the chest, opening the overlay and calling the animation
    if (yPlayer > projectRoadYPos && yPlayer < projectRoadYPos + projectRoadHeight) {

        if (xPlayer < 150 && isChestOpen == false) {
            openProjectOverlay();
            isChestOpen = true;
        }
        //Possibility to open the overlay again only if the player has moved away
        //Prevents a player from being trapped in a zone of conditions with the opening of overlay
        if (yPlayer < projectRoadYPos || yPlayer > projectRoadYPos + projectRoadHeight) {
            isChestOpen = false;
        }
        if (xPlayer > 150) {
            isChestOpen = false;
        }
    }
    
    //----------  Contact chest conditions  ----------
    //If the player is close to the chest, opening the overlay and calling the animation
    if (xPlayer > mainRoadXPos && xPlayer < mainRoadXPos + mainRoadWidth) {

        if (yPlayer > yMax - 150 && isChestOpen == false) {
            openContactOverlay();
            isChestOpen = true;
        }
        //Possibility to open the overlay again only if the player has moved away
        //Prevents a player from being trapped in a zone of conditions with the opening of overlay
        if (xPlayer < mainRoadXPos && xPlayer > mainRoadXPos + mainRoadWidth && xPlayer < yMax - 150) {
            isChestOpen = false;
        }
        /*if () {
            isChestOpen = false;
        }*/
    }

}

//=============================================================================
// ====================== Chest opening/closing animations ====================
//=============================================================================
let leftChests = ["url(img/chest0.png)", "url(img/chestG1.png)", "url(img/chestG2.png", "url(img/chestG3.png)"];
let rightChests = ["url(img/chest0.png)", "url(img/chestD1.png)", "url(img/chestD2.png", "url(img/chestD3.png)"];
let bottomChests = ["url(img/chestB0.png)", "url(img/chestB1.png)", "url(img/chestB2.png", "url(img/chestB3.png)"]
let indexImageChest = 0;
let chestTimer;

function openAboutChest() {
    allowToMove = false;
    allowTeleport = false;
    chestTimer = setInterval(function () {
        if (indexImageChest < leftChests.length) {
            indexImageChest++;
            aboutChest.style.background = leftChests[indexImageChest];
        } else {
            clearInterval(chestTimer);
        }

    }, 25);
}

function openEducationChest() {
    allowToMove = false;
    allowTeleport = false;
    chestTimer = setInterval(function () {
        if (indexImageChest < leftChests.length) {
            indexImageChest++;
            educationChest.style.background = rightChests[indexImageChest];
        } else {
            clearInterval(chestTimer);
        }

    }, 25);
}

function openProjectChest() {
    allowToMove = false;
    allowTeleport = false;
    chestTimer = setInterval(function () {
        if (indexImageChest < leftChests.length) {
            indexImageChest++;
            projectChest.style.background = leftChests[indexImageChest];
        } else {
            clearInterval(chestTimer);
        }

    }, 25);
}

function openContactChest() {
    allowToMove = false;
    allowTeleport = false;
    chestTimer = setInterval(function () {
        if (indexImageChest < bottomChests.length) {
            indexImageChest++;
            contactChest.style.background = bottomChests[indexImageChest];
        } else {
            clearInterval(chestTimer);
        }

    }, 25);
}

function closeAboutChest() {
    allowToMove = true;
    allowTeleport = true;
    chestTimer = setInterval(function () {
        if (indexImageChest > 0) {
            indexImageChest--;
            aboutChest.style.background = leftChests[indexImageChest];
        } else {
            clearInterval(chestTimer);
        }
    }, 25);
}

function closeEducationChest() {
    allowToMove = true;
    allowTeleport = true;
    chestTimer = setInterval(function () {
        if (indexImageChest > 0) {
            indexImageChest--;
            educationChest.style.background = rightChests[indexImageChest];
            
        } else {
            clearInterval(chestTimer);
            
        }
    }, 25);
}

function closeProjectChest() {
    allowToMove = true;
    allowTeleport = true;
    chestTimer = setInterval(function () {
        if (indexImageChest > 0) {
            indexImageChest--;
            projectChest.style.background = leftChests[indexImageChest];
        } else {
            clearInterval(chestTimer);
        }
    }, 25);
}

function closeContactChest() {
    allowToMove = true;
    allowTeleport = true;
    chestTimer = setInterval(function () {
        if (indexImageChest > 0) {
            indexImageChest--;
            contactChest.style.background = bottomChests[indexImageChest];
        } else {
            clearInterval(chestTimer);
        }
    }, 25);
}


//========================================
//========= Chests positions =============
//========================================
let aboutChestRight = parseFloat(getComputedStyle(aboutChest).left) + parseFloat(getComputedStyle(aboutChest).width);

let educationChestLeft = parseFloat(getComputedStyle(educationChest).right) + parseFloat(getComputedStyle(educationChest).width);

let projectChestRight = parseFloat(getComputedStyle(projectChest).left) + parseFloat(getComputedStyle(projectChest).width);

let contactChestTop = parseFloat(getComputedStyle(contactChest).top);

