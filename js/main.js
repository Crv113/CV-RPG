document.addEventListener("keydown", movePlayer);//move.js

document.addEventListener("click", teleportPlayer);//teleportPlayer.js
document.addEventListener("mousemove", isOnRoad);//teleportPlayer.js

document.addEventListener("click", openOverlay);//overlay.js
document.addEventListener("click", closeOverlay);//overlay.js

document.addEventListener("keydown", function(e) { //disable scrolling to the bottom when the space bar is pressed
    if(e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
    }
    
    if(e.keyCode == 32) {
        window.scrollBy(0, 0);
    }
})
