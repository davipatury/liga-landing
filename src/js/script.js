const command = ['n', 'p', 'm', ' ', 'i', 'n', 's', 't', 'a', 'l', 'l', ' ', 'l', 'i', 'g', 'a', '-', 'p', 'r', 'o', 'g', 'r', 'a', 'm', 'a', 'd', 'o', 'r', 'e', 's'];
const adder = 2;
let message ='';
let i = 0;

const typeMessage = () => {
  if(i < command.length) {
     message += command[i];
    container.textContent = message;
    i++;
  } else {
    clearInterval(fullMessage);
    setTimeout(()=> {
     
      loadingContainer.style.opacity = 1;
    }, 1000);
       
  }
}

const container = document.querySelector('.command');
const blink = document.querySelector('.blink');

let fullMessage = setInterval(typeMessage, 30);

/*Feature */
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