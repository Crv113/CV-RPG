let howtoplayOverlay = document.getElementById("howtoplay-overlay");
let aboutOverlay = document.getElementById("about-overlay");
let educationOverlay = document.getElementById("education-overlay");
let projectOverlay = document.getElementById("project-overlay");
let contactOverlay = document.getElementById("contact-overlay");

let closeAboutBtn = document.getElementById("close-about");
let closeEducationBtn = document.getElementById("close-education");
let closeProjectBtn = document.getElementById("close-project");
let closeContactBtn = document.getElementById("close-contact");

function openOverlay(e) {
    switch (e.target.id) {
        case "about-chest":
            openAboutOverlay();
            
            break;
        case "education-chest":
            openEducationOverlay();
            
            break;
        case "project-chest":
            openProjectOverlay();
           
            break;
        case "contact-chest":
            openContactOverlay();
            
            break;
    }
}

function closeOverlay(e) {
    switch (e.target.id) {
        case "close-howtoplay":
            howtoplayOverlay.style.height = "0px";
            startTeleport = true;
            allowTeleport = true;
            allowToMove = true;
            
            break;
        case "close-about":
            aboutOverlay.style.height = "0";
            
            setTimeout(function () {
                closeAboutChest();
            }, 250);
            
            break;
        case "close-education":
            educationOverlay.style.height = "0";
            
            setTimeout(function () {
                closeEducationChest();
            }, 250);
            
            break;
        case "close-project":
            projectOverlay.style.height = "0";
            
            setTimeout(function () {
                closeProjectChest();
            }, 250);
            
            break; 
        case "close-contact":
            contactOverlay.style.height = "0";
           
            setTimeout(function () {
                closeContactChest();
            }, 250);
            
            break;
    }
}

function openAboutOverlay() {
    openAboutChest();
    setTimeout(function () {
        aboutOverlay.style.height = "100vh";
    }, 250);
}

function openEducationOverlay() {
    openEducationChest();
    setTimeout(function () {
        educationOverlay.style.height = "100vh";
    }, 250);
}

function openProjectOverlay() {
    openProjectChest();
    setTimeout(function () {
        projectOverlay.style.height = "100vh";
    }, 250);

}

function openContactOverlay() {
    openContactChest();
    setTimeout(function () {
        
        contactOverlay.style.height = "100vh";
    }, 250);
}
