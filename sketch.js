const grid = document.querySelector('.grid');

function createGrid(n) { //here n is the grid size
    for (let i = 0; i < (n*n); i++) {
        const div = document.createElement('div');
        div.classList.toggle('boxdiv')
        grid.appendChild(div);
    }
}

function gridInitialize() {

}

function gridColor(e) {
    this.style.backgroundColor = 'black';
}

window.onload = createGrid(16);

const gdiv = document.querySelectorAll('.boxdiv');
const gdivlist = Array.from(gdiv); 
for (let i = 0; i < (16*16); i++) {
    gdivlist[i].addEventListener('mouseover', gridColor);
}