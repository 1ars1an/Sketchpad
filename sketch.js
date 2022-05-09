function gridInitialize() {

}

function createGrid(n) { //here n is the grid size
    const grid = document.querySelector('.grid');
    grid.innerHTML = ''; //prevents extra boxes from being added when function is called again
    for (let i = 0; i < (n*n); i++) {
        const div = document.createElement('div');
        div.classList.toggle('boxdiv')
        grid.appendChild(div);
    }
}

function gridColor(e) {
    this.style.backgroundColor = 'black';
}

function userInput() {
    console.log('hi');
    let user = prompt("Enter the size of the grid [Max Size = 100]");
    if (user !== null && user <= 100) {
        console.log(user);
        createGrid(user);
    }
}

window.onload = createGrid(16);

const gdiv = document.querySelectorAll('.boxdiv');
const gdivlist = Array.from(gdiv); 
console.log('hi outside');
for (let i = 0; i < (16*16); i++) {
    console.log('hi inside');
    gdivlist[i].addEventListener('mouseover', gridColor);
}

const input = document.getElementById('grid-size'); //grid size button
input.addEventListener('click', userInput);