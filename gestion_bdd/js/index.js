let newFormWrap = document.getElementById("newFormWrap");
let newFormBoxOpen = false;

document.addEventListener("click", function (e) {
    if (e.target.id === "newCustomer" && newFormBoxOpen == false) {
        newFormWrap.style.height = "auto";
        newFormBoxOpen = true;
    } else if (e.target.id === "newCustomer" && newFormBoxOpen == true) {
        newFormWrap.style.height = "0";
        newFormBoxOpen = false;
    }
})