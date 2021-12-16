// Elementos
const balls = document.querySelectorAll('.ball');

// Requisito 4 - Adicione cores nas bolas, elas devem ser geradas dinâmicamente
function generateRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function randomColors() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = generateRGB();
  }
}
randomColors();
