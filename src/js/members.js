const cardsElement = document.getElementById("members");
const member = [
    {
        name: "Mariana Morais",
        role: "Administrador",
        social: {
            github: "marianamorais",
            // linkedin: "",
            // twitter: "",
            // instagram: ""
        }
    },
    {
        name: "ratsclub",
        role: "Criador de Conteúdo",
        social: {
            github: "ratsclub"
        }
    }
];

const links = {
    github: (user) => `https://github.com/${user}`,
    linkedin: (user) => `https://linkedin.com/in/${user}`,
    twitter: (user) => `https://twitter.com/${user}`,
    instagram: (user) => `https://instagram.com/${user}`,
};


function createCard(member) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = createCardImage(member);
    const cardContent = createCardContent(member);

    card.append(cardImage, cardContent);
    return card;
}

function createCardImage({social}) {
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");

    const image = document.createElement("img");
    image.src = `${links["github"](social.github)}.png`
    
    cardImage.append(image);

    return cardImage;
}

function createCardContent({name, role, social}) {
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("title-card");
    cardTitle.innerHTML = name;

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const roleText = document.createElement("p");
    roleText.classList.add("text--medium");
    roleText.innerHTML = role;

    const cardSocial = createCardSocial(social);

    cardInfo.append(roleText, cardSocial);
    cardContent.append(cardTitle, cardInfo);
    
    return cardContent;
}

function createCardSocial(social) {
    const cardSocial = document.createElement("div");
    cardSocial.classList.add("card-social");

    Object.keys(social).forEach((key) => {
        const anchor = document.createElement("a");
        anchor.href = links[key](social[key]);

        const icon = document.createElement("i");
        icon.classList.add("fab", `fa-${key}`);

        anchor.append(icon);
        cardSocial.append(anchor);
    });

    return cardSocial;
}

member.forEach((member) => {
    const card = createCard(member);
    cardsElement.append(card);
})