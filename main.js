let color = "black";
let click = true;

function setBoard(size){
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
squares.forEach(div => div.remove())
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
board.style.gridTemplateRows = `repeat(${size} , 1fr)`

let amount = size * size;
for (let i = 0; i < amount ; i++) {
    let square = document.createElement('div')
//    square.style.border = `1px solid black`
    square.addEventListener('mouseover' , colorSquare)
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square)
    
}}


setBoard(16)

function changeSize(input) {
    if(input > 100 || input < 1) {
        alert('Please select number between 1-100')
    } else {
    setBoard(input);}
}


function  colorSquare() {
if (click) {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100% , 50%)`
    } else {
        this.style.backgroundColor = color;
    }
}}


function changeColor(choice) {
    color = choice;
}


function resetBoard() {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
squares.forEach(div => div.style.backgroundColor = 'white')
}


document.querySelector('body').addEventListener('click', (clickArea) => {
    if (clickArea.target.tagName != "BUTTON" && clickArea.target.tagName != "INPUT")
    { click = !click
    if(click){
        document.querySelector('.mode').textContent = 'Mode: Coloring'
    }
    else {
        document.querySelector('.mode').textContent = 'Mode: Not Coloring'
    }}
})
