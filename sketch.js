function createGrid(n) { //here n is the grid size
    console.log(n);
    const grid = document.querySelector('.grid');
    grid.innerHTML = ''; //prevents extra boxes from being added when function is called again
    for (let i = 0; i < (n*n); i++) {
        const div = document.createElement('div');
        div.classList.toggle('boxdiv')
        grid.appendChild(div);
    }
    gridHover();
}

function gridColor(e) {
    this.style.backgroundColor = 'black';
}

function gridHover() {
    const gdiv = document.querySelectorAll('.boxdiv');
    const gdivlist = Array.from(gdiv); 
    console.log('hi outside');
    for (let i = 0; i < gdivlist.length; i++) {
        console.log('hi inside');
        gdivlist[i].addEventListener('mouseover', gridColor);
    }
}

function gridInitialize() {
    createGrid(16);
}

function userInput() {
    let user = prompt("Enter the size of the grid [Max Size = 100]");
    if (user !== null && user <= 100) {
        createGrid(user);
    }
}

window.onload = createGrid(16);

const input = document.getElementById('grid-size'); //grid size button
input.addEventListener('click', userInput);

const reset = document.getElementById('reset');
reset.addEventListener('click', gridInitialize);