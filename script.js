let gridContainer = document.querySelector('.grid-container');



for (let i = 0; i < 16; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell-style';
        gridContainer.appendChild(cell);
    };