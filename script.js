let grid = document.querySelector('.container');
let resetBtn = document.querySelector('.grid-size');
let blackPaint = document.querySelector('.black-btn');
let eraser = document.querySelector('.eraser-btn');
let clearCanvas = document.querySelector('.clear-btn'); 


function createGrid(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
     for (let i = 0; i < (rows * cols); i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
  
       

       grid.appendChild(div);
     }
}



function resetGrid() {
  grid.innerHTML = ''; 
  
  let pickNumber = prompt('Enter a number for your grid size', '');
  if (pickNumber > 100) {
    alert('Number is not valid'); 
    prompt('Pick another number', ''); 
  }
  pickNumber = Number(pickNumber); 
  grid.style.setProperty('--grid-rows', pickNumber);
  grid.style.setProperty('--grid-cols', pickNumber);
  createGrid(pickNumber, pickNumber); 
} 

resetBtn.addEventListener('click', resetGrid);



createGrid(16, 16);

eraser.addEventListener('click', function erase() {
     grid.addEventListener('mouseover', function(event){
       event.target.style.backgroundColor = 'white';
     })
})

blackPaint.addEventListener('click', function paint(){
    grid.addEventListener('mouseover', function(event) {
      event.target.style.backgroundColor = 'black'; 
    })
})

clearCanvas.addEventListener('click', function() {
  grid.childNodes.forEach(child => child.style.backgroundColor = 'white')
}); 