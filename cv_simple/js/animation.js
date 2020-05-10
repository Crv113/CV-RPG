
function underFlash() {
    let underscoreElt = document.getElementById('under');

    setTimeout(function () {
        setInterval(function () {
            underscoreElt.style.opacity = "100";
        }, 1000)

    }, 500)

    setInterval(function () {
        underscoreElt.style.opacity = "0";

    }, 1000)
}

const text = 'Adrien Corvisier';
let letter = '';
let index = 0;
let launched = false;

function type() {
    document.getElementById('typing').textContent = letter;
    letter = text.slice(0, index++);
    setTimeout(type, 200);

    if(letter.length === text.length) {
       if(!launched){
           underFlash();
           launched = true;
       }
    }
   
};
type();

