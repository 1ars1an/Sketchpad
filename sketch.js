var colorpick;
var gridsize;

function createGrid(n) { //here n is the grid size
    const grid = document.querySelector('.grid');
    grid.innerHTML = ''; //prevents extra boxes from being added when function is called again
    for (let i = 0; i < (n*n); i++) {
        const div = document.createElement('div');
        div.classList.toggle('boxdiv');
        div.style.width = `calc(100% / ${n})`;
        div.style.height = `calc(100% / ${n})`;
        grid.appendChild(div);
    }
    gridHover();
}

function gridColor() {
    if (colorpick === 'black') {
    this.style.backgroundColor = 'black';
    } else if (colorpick === 'white') {
        this.style.backgroundColor = 'white';
    } else if (colorpick === 'rainbow') {
        let newcolor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = '#' + newcolor;
    }
}

function gridHover() {
    const gdiv = document.querySelectorAll('.boxdiv');
    const gdivlist = Array.from(gdiv); 
    for (let i = 0; i < gdivlist.length; i++) {
        gdivlist[i].addEventListener('mouseover', gridColor);
    }
}

function gridInitialize() {
    console.log(gridsize);
    if (gridsize === undefined || isNaN(gridsize) || gridsize === 0) {
        gridsize = 16;
    }
    colorpick = 'black';
    createGrid(gridsize);
}

function userInput() {
    let user = Number(prompt("Enter the size of the grid [Max Size = 100]"));
    console.log(user);
    if (user > 100) {
        while (user > 100) {
            user = Number(window.prompt('Seriously, enter less than 100 * 100'));
        }
        gridsize = user;
        console.log(`1, ${gridsize}`);
        gridInitialize();
        return;
    } 
    if (user !== null && user > 0 && user <= 100) {
        gridsize = user;
        console.log(`2, ${gridsize}`);
        gridInitialize();
    }
}

window.onload = gridInitialize;

const input = document.getElementById('grid-size'); //grid size button
input.addEventListener('click', userInput);

const color = document.getElementById('color');
color.addEventListener('click', function() {
    colorpick = 'black';
    gridHover();
});

const randomcolor = document.getElementById('rainbow');
randomcolor.addEventListener('click', function() {
    colorpick = 'rainbow';
    gridHover();
});

const eraser = document.getElementById('eraser');
eraser.addEventListener('click', function() {
    colorpick = 'white';
    gridHover();
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    gridsize = 16;
    gridInitialize();
});
