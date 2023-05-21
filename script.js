let grid = document.querySelector('.container');
let resetBtn = document.querySelector('.grid-size');


function createGrid(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
     for (let i = 0; i < (rows * cols); i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
  
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        })

       grid.appendChild(div);
     }
}

// use this solution for grid https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

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
