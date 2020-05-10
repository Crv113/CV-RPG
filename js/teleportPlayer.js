let startTeleport = false;//True when player close the "how to play" overlay
let allowTeleport = false; //Prevents player teleportation when an overlay is open or when closing the overlay 
let canTeleportHere = false; //Prevents player to teleport outside the road

function isOnRoad(e) {

    if (e.clientX > mainRoadXPos && e.clientX < mainRoadXPos + mainRoadWidth && (e.clientY + window.pageYOffset) < yMax - 7) { //Player is allow to teleport if the mouse is over main road! e.clientY < yMax - 6 is to not allow to teleport behind the chest
        canTeleportHere = true;
    } else if (e.clientX < mainRoadXPos && (e.clientY + window.pageYOffset) > aboutRoadYPos + sizePlayer / 2 && (e.clientY + window.pageYOffset) < aboutRoadYPos + aboutRoadHeight && e.clientX > 57) { //or over about road! e.clientX > 57 is to not allow to teleport behind the chest
        canTeleportHere = true;

    } else if (e.clientX < mainRoadXPos && (e.clientY + window.pageYOffset) > projectRoadYPos + sizePlayer / 2 && (e.clientY + window.pageYOffset) < projectRoadYPos + projectRoadHeight && e.clientX > 57) { //or over project road! e.clientX > 57 is to not allow to teleport behind the chest
        canTeleportHere = true;
    } else if (e.clientX > mainRoadXPos + mainRoadWidth && (e.clientY + window.pageYOffset) > educationRoadYPos + sizePlayer / 2 && (e.clientY + window.pageYOffset) < educationRoadYPos + educationRoadHeight && e.clientX < xMax - 57) { //or over education road!  e.clientX < xMax - 57 is to not allow to teleport behind the chest
        canTeleportHere = true;
    } else { //else he can't
        canTeleportHere = false;
    }
}

function teleportPlayer(e) {



    if (allowTeleport && startTeleport && canTeleportHere) {

        switch (e.target.id) {

            case "about-chest":
                xPlayer = aboutChestRight + 10;
                yPlayer = aboutRoadYPos + aboutRoadHeight / 2 - sizePlayer / 2;
                player.style.opacity = 0;
                setTimeout(function () {
                    player.style.left = xPlayer + "px";
                    player.style.top = yPlayer + "px";
                    player.style.opacity = 1;
                    player.style.transition = "opacity 0.5s";
                    chestAnimation();
                }, 350);
                break;
            case "education-chest":
                xPlayer = xMax - (educationChestLeft + sizePlayer / 2);
                yPlayer = educationRoadYPos + educationRoadHeight / 2 - sizePlayer / 2;
                player.style.opacity = 0;
                setTimeout(function () {
                    player.style.left = xPlayer + "px";
                    player.style.top = yPlayer + "px";
                    player.style.opacity = 1;
                    player.style.transition = "opacity 0.5s";
                    chestAnimation();
                }, 350);
                break;
            case "project-chest":
                xPlayer = projectChestRight + 10;
                yPlayer = projectRoadYPos + projectRoadHeight / 2 - sizePlayer / 2;
                player.style.opacity = 0;
                setTimeout(function () {
                    player.style.left = xPlayer + "px";
                    player.style.top = yPlayer + "px";
                    player.style.opacity = 1;
                    player.style.transition = "opacity 0.5s";
                    chestAnimation();
                }, 350);
                break;
            case "contact-chest":
                xPlayer = mainRoadXPos + mainRoadWidth / 2;
                yPlayer = contactChestTop - sizePlayer;
                player.style.opacity = 0;
                setTimeout(function () {
                    player.style.left = xPlayer + "px";
                    player.style.top = yPlayer + "px";
                    player.style.opacity = 1;
                    player.style.transition = "opacity 0.5s";
                    chestAnimation();
                }, 350);
                break;
            default:

                isChestOpen = false; //when teleporting, isChestOpen is reset to false
                player.style.opacity = 0;
                setTimeout(function () {
                    xPlayer = e.clientX;
                    player.style.left = xPlayer + "px";
                    yPlayer = (e.clientY + window.pageYOffset) - sizePlayer;
                    player.style.top = yPlayer + "px";
                    player.style.opacity = 1;
                    player.style.transition = "opacity 0.5s";
                    chestAnimation();
                }, 350);

        }
    }

}


