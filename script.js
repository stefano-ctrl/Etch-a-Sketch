let gridContainer = document.querySelector('.grid-container');
let button = document.querySelector('button');


// grid 
function createGrid(squares) {
for (let i = 0; i < squares; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell-style';
        gridContainer.appendChild(cell);
    };
};

createGrid(64);


  // mouse trail 
    /*let dots = [];
    for (let i = 0; i < 2000; i++) {
      let node = document.createElement("div");
      node.className = "trail";
      document.body.appendChild(node);
      dots.push(node);
    }
    let currentDot = 0;

   document.addEventListener('mousemove', event => {
     
   }) */
   
   let dots = [];

   let currentDot = 0;

   for (let i = 0; i < 1000; i++) {
     let node = document.createElement('div');
     node.className = 'trail';
     document.body.appendChild(node);
     dots.push(node);
     
   };

     
  

   gridContainer.addEventListener('mousemove', event => {
    let dot = dots[currentDot];  
    dot.style.left = (event.pageX - 2) + "px";
    dot.style.top = (event.pageY - 2) + "px";
    

    currentDot = (currentDot + 1) % dots.length;
       
     });

     button.addEventListener('click', () => {
      let askSquares = prompt('How big?', '');
       if (askSquares > 100) {
         let text = document.createElement('p');
         text.textContent = 'Sorry can\'t do that';
         text.className = 'text-refuse';
         document.body.appendChild(text);

      
         setTimeout(() => {           
          text.style.display = 'none';
  
        }, 2000); 

       } else if (askSquares < 100) {
       createGrid(askSquares);
     
       }
      }
     );


     