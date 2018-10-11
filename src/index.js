import './index.scss';

//console.log("Hello World");
const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');

highlight.classList.add('highlight');

document.body.append(highlight);

function highlightLink(){
  const linkCoords = this.getBoundingClientRect();
  const deltaX = window.scrollX;
  const deltaY = window.scrollY;
  const coords = {
     left: linkCoords.left + deltaX,
     top: linkCoords.top + deltaY,
     width:linkCoords.width,
     height: linkCoords.height
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
