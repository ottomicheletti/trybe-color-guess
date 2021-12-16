// Elementos - por ordem de aparição na página.
const rgbColor = document.getElementById('rgb-color');
const score = document.getElementById('score');
const colors = document.getElementById('colors');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const resetColors = document.getElementById('reset-game');
const resetScore = document.getElementById('reset-score');
//* Gerador de RegEx utilizado: https://regex-generator.olafneumann.org/ e propriedade .exec do RegEx https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
const regex = /\([^)]*\)/i;

// Requisito 4 - Adicione cores nas bolas, elas devem ser geradas dinamicamente.
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
  let randomBall = Math.floor(Math.random() * 6);
  rgbColor.innerText = regex.exec(balls[randomBall].style.backgroundColor);
}
randomColors();

// Requisito 5 e 7 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto. Crie um placar que incremente 3 pontos para cada acerto no jogo.
var contador = 0;
function checkAnswer(event) {
  let question = rgbColor.innerHTML;
  let clickedBall = event.target.style.backgroundColor;
  let result = regex.exec(clickedBall)[0];

  switch (true) {
    case question === result:
      answer.innerText = 'Acertou!';
      contador += 3;
      score.innerText = contador;
      setTimeout(function () {
        randomColors();
        answer.innerText = 'Escolha uma cor';
      }, 800);
      break;
    case question !== result:
      answer.innerText = 'Errou! Tente novamente!';
    default:
      break;
  }
}
colors.addEventListener('click', checkAnswer);

// Requisito 6 - Crie um botão para iniciar/reiniciar o jogo.
resetColors.addEventListener('click', function () {
  randomColors();
  answer.innerText = 'Escolha uma cor';
});

// Perfumaria
resetScore.addEventListener('click', function () {
  randomColors();
  score.innerText = 0;
  answer.innerText = 'Escolha uma cor';
});
