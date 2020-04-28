/*Terminal*/
consoleText(['Hello World', '(・_・)ノ'], 'text1', ['yellow', 'white']);
consoleText(['npm install liga'], 'text2', ['lightblue']);
consoleText(['./sermembro', '⚡️'], 'text3', ['lightgreen']);

function consoleText(words, id, colors) {
 if (colors === undefined) colors = ['#fff'];
 var visible = true;
 var con = document.getElementById('console');
 var letterCount = 1;
 var x = 1;
 var waiting = false;
 var target = document.getElementById(id)
 target.setAttribute('style', 'color:' + colors[0])
 window.setInterval(function () {

  if (letterCount === 0 && waiting === false) {
   waiting = true;
   target.innerHTML = words[0].substring(0, letterCount)
   window.setTimeout(function () {
    var usedColor = colors.shift();
    colors.push(usedColor);
    var usedWord = words.shift();
    words.push(usedWord);
    x = 1;
    target.setAttribute('style', 'color:' + colors[0])
    letterCount += x;
    waiting = false;
   }, 1000)
  } else if (letterCount === words[0].length + 1 && waiting === false) {
   waiting = true;
   window.setTimeout(function () {
    x = -1;
    letterCount += x;
    waiting = false;
   }, 1000)
  } else if (waiting === false) {
   target.innerHTML = words[0].substring(0, letterCount)
   letterCount += x;
  }
 }, 120)
 window.setInterval(function () {
  if (visible === true) {
   con.className = 'console-underscore hidden'
   visible = false;

  } else {
   con.className = 'console-underscore'

   visible = true;
  }
 }, 400)
}

/*Feature*/
const lista = document.getElementById("feature-list");
const listaBotoes = Array.from(lista.children);

const textContainer = document.getElementById("feature-container");
const listaText = Array.from(textContainer.children);

listaBotoes.forEach((botao, indexBotao) => {
 botao.addEventListener("click", (e) => {
  listaText.forEach((text, indexText) => {
   const displayType = indexBotao === indexText ? "grid" : "none";
   text.style.display = displayType;
  });
 });
});