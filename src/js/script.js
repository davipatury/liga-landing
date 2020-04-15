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
