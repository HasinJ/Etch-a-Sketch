
const body = document.querySelector('body');
let container;
let divBlock;
let columns = "";
let colorWhenHovered = 'white';
let dimensions=0;

createGrid();

const clear = document.getElementById('clearBtn');
clear.addEventListener('click', createGrid);

const choice = document.querySelector('select');
choice.addEventListener('change', (e) => colorWhenHovered = e.target.value);


function createBlock() {
  divBlock = document.createElement('div');
  container.appendChild(divBlock);
}

function createContainer() {
  container = document.getElementById('container');
  if (container !== null) container.parentNode.removeChild(container);
  container = document.createElement('div');
  container.setAttribute('id','container');
  body.appendChild(container);
}

function createGrid() {
  createContainer();
  dimensions = Number(prompt('please enter dimension (one number)', '5')); //for both columns and rows
  columns = ""; //empties just in case function is called again
  for (let i=0; i<dimensions; i++) {
    columns += "auto " //allocates columns in grid but doesn't fill them in
    for (let j=0; j<dimensions; j++) { //fills in column
      createBlock();
    }
  }
  container.style.gridTemplateColumns = columns;

  const gridBlocks = container.querySelectorAll('div');
  gridBlocks.forEach( (box) =>
    box.addEventListener('mouseenter', (e) =>
      e.target.style.backgroundColor = `${colorWhenHovered}`
    )
  )

}
