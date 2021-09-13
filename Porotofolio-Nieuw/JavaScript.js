
 //Functie dat waarde (val) weergeeft
 function dis(val)
 {
     document.querySelector("#result").value+=val
     document.addEventListener("click");
 }
   
 //functie die het cijfer evalueert en het resultaat retourneert
 function solve()
 {
     let x = document.querySelector("#result").value
     let y = eval(x)
     document.querySelector("#result").value = y
     document.addEventListener("click");
 }
   
 //functie die het resultaat leeg maakt
 function clr()
 {
     document.querySelector("#result").value = ""
     document.addEventListener("click", clr);
 }





//Boter, Kaas en Eieren
 document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
const playerDisplay = document.querySelector('#player')
let currentPlayer = 'playerX'

squares.forEach(square => {
    square.addEventListener('click', clickOutcome)
})
function clickOutcome(e){
const squareArray = Array.from(squares)
const index = squareArray.indexOf(e.target)
playerDisplay.innerHTML = currentPlayer

if(currentPlayer === 'playerX'){
    squares[index].classList.add('playerX')
    currentPlayer = 'playerO'
} else{
    squares[index].classList.add('playerO')
    currentPlayer = 'playerX'
}
}

}
)


// functie om een thema/kleurenschema in te stellen
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
//functie om te schakelen tussen licht en donker thema
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}
// functie om te schakelen tussen donker en licht thema
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();

const button = document.querySelector('#switch');
button.addEventListener("click", toggleTheme);




