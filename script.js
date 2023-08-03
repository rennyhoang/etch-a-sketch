const sketchBody = document.querySelector('body');

const userInput = document.createElement('button');
userInput.textContent = "choose sketch size";
sketchBody.appendChild(userInput);

const sketchGrid = document.createElement('div');
sketchGrid.id = "container";

userInput.addEventListener('mousedown', () => { 
    const GRID_LENGTH = getUserInput(); 
    const CHILD_LENGTH = 100 / (GRID_LENGTH);
    sketchGrid.innerHTML = '';  
    drawGrid(GRID_LENGTH, CHILD_LENGTH);
});

function getUserInput(){
    let inputValid = false;
    let res = "";
    while(!inputValid){
        const currInput = prompt("choose sketch size");
        if(isNaN(currInput)){
            continue;
        }
        if(parseInt(currInput) < 1){
            continue;
        }
        res = parseInt(currInput);
        inputValid = true;
    }

    return res;
}

function drawGrid(GRID_LENGTH = 16, CHILD_LENGTH = 100 / 16){
    sketchBody.appendChild(sketchGrid);
    for(i = 0; i < GRID_LENGTH; i++){
        for(j = 0; j < GRID_LENGTH; j++){
            // add grid to the thing
            const currChild = document.createElement('div');
            currChild.classList.add('child');
            currChild.style.flexBasis = CHILD_LENGTH + "%";
            currChild.addEventListener('mouseenter', () => {
                currChild.style.backgroundColor = "#000000"; 
                let opacity = parseFloat(currChild.style.opacity) || 0;
                opacity += .1;
                currChild.style.opacity = opacity;
            })
            sketchGrid.appendChild(currChild);
        }
    }

}

drawGrid();
