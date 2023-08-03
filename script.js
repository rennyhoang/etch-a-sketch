const sketchBody = document.querySelector('body');

const sketchGrid = document.createElement('div');
sketchGrid.id = "container";

const GRID_LENGTH = 16;
const CHILD_LENGTH = 100 / (GRID_LENGTH + 2);

function drawGrid(){
    sketchBody.appendChild(sketchGrid);
    for(i = 0; i < GRID_LENGTH; i++){
        for(j = 0; j < GRID_LENGTH; j++){
            // add grid to the thing
            const currChild = document.createElement('div');
            currChild.classList.add('child');
            currChild.style.flexBasis = CHILD_LENGTH + "%";
            currChild.addEventListener('mouseenter', () => {currChild.style.backgroundColor = "#000000"; })
            sketchGrid.appendChild(currChild);
        }
    }

}

drawGrid();
