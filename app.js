const card = document.querySelector('.card');
const number = document.querySelector('.number');

CardArray = ['heart','diamond','club','spade'];
NumberArray = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

let  CardSel = CardArray[Math.floor(Math.random() * CardArray.length)];
let  NumberSel = NumberArray[Math.floor(Math.random() * NumberArray.length)];


card.classList.add(CardSel);
number.innerHTML = NumberSel;