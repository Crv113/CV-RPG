// Burger menu closing after click
let menu = document.querySelector("ul");
let burgerBtn = document.getElementById("burger");
let navbar = document.getElementById("responsive");

document.addEventListener("click", function (e) {
    if (e.target.id !== "burger-logo") {
        burgerBtn.classList.add("collapsed");
        navbar.classList.remove("show");
    }
    console.log(e.target.id);
})
