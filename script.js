// Elementos
const colors = document.getElementById('colors');
const balls = document.querySelectorAll('.ball');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

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
  let randomBall = Math.floor(Math.random() * 7);
  //* Gerador de RegEx utilizado: https://regex-generator.olafneumann.org/
  //* Propriedade .exec do RegEx https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
  let regex = /\([^)]*\)/i;
  rgbColor.innerHTML = regex.exec(balls[randomBall].style.backgroundColor);
}
randomColors();

// Requisito 5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto
function checkAnswer(event) {
  let question = rgbColor.innerHTML;
  let clickedBall = event.target.style.backgroundColor;
  let regex = /\([^)]*\)/i;
  let result = regex.exec(clickedBall)[0];

  switch (true) {
    case question === result:
      answer.innerText = 'Acertou!';
      break;
    case question !== result:
      answer.innerText = 'Errou! Tente novamente!';
    default:
      break;
  }

  // console.log(result);
  // console.log(rgbColor.innerHTML);
  // console.log(answer.innerText);
}

colors.addEventListener('click', checkAnswer);

// Requisito 6 - Crie um botão para iniciar/reiniciar o jogo
function resetGame() {
  randomColors();
  answer.innerText = 'Escolha uma cor';
}

resetButton.addEventListener('click', resetGame);
