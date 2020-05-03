const codeBlocks = document.getElementsByClassName("codeblock");
const buttons = document.getElementById("feature-list");
const contents = document.getElementById("feature-container");

/*
    CODE BLOCKS
*/
const colors = ["orange", "lightblue", "lightgreen"];
const snippets = [
    "Hello World",
    "npm install liga",
    "python main.py",
    "go mod init liga",
    "gcc -o main.c liga"
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function writing(element) {
    /* selects a random word and a random color */
    let selected = snippets[Math.floor(Math.random() * snippets.length)];
    element.style.color = colors[Math.floor(Math.random() * colors.length)];

    const typing = function () {
        /* turns a "word" into an array like ["w", "o", "r", "d"]; */
        let word = selected.split("");
        const loop = async function () {
            /*
             the function will call itself unless the word is empty
             ex:
                element             array
                ""                  ["w", "o", "r", "d"]
                "w"                 ["o", "r", "d"]
                "wo"                ["r", "d"]
                "wor"               ["d"]
                "word"              []
            
             then it will call the deleting function
            */
            if (word.length > 0) {
                element.innerHTML += word.shift();
            } else {
                await sleep(700);
                deleting();
                return;
            };
            setTimeout(loop, 150);
        };
        loop();
    };

    const deleting = function () {
        /* turns a "word" into an array like ["w", "o", "r", "d"]; */
        let word = selected.split("");
        const loop = async function () {
            /*
             the function will call itself unless the word is empty
             ex:
                element             array
                "word"              ["w", "o", "r", "d"]
                "wor"               ["w", "o", "r"]
                "wo"                ["w", "o"]
                "w"                 ["w"]
                ""                  []

             then it will call the writing function all over again
            */
            if (word.length > 0) {
                word.pop();
                element.innerHTML = word.join("");
            } else {
                await sleep(700);
                writing(element);
                return;
            };
            setTimeout(loop, 150);
        };
        loop();
    };
    typing();
};

[...codeBlocks].forEach((item) => writing(item));

[...buttons.children].forEach((botao, indexBotao) => {
    botao.addEventListener("click", (e) => {
        [...contents.children].forEach((text, indexText) => {
            const displayType = indexBotao === indexText ? "grid" : "none";
            text.style.display = displayType;
        });
    });
});