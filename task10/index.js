// Використовуючи функцію з Task 8 generateCrad, необхідно створити функцію generateCrads яка буде приймати масив об'єктів
// і на їх основі створювати елементи в body. Якщо Індекс елемента є парне число,
// потріно додати на початок його значення поля title індекс його позиції у форматі: `[index]`

const cards = [{
        title: "Title 0",
        imageUrl: "https://.IMAGE 2022-12-17 22:33:20.jpg",
        description: "description 0"
    },
    {
        title: "Title 1",
        imageUrl: "https://.IMAGE 2022-12-17 22:33:32.jpg",
        description: "description 1"
    },
    {
        title: "Title 2",
        imageUrl: "https://i.IMAGE 2022-12-17 22:33:36.jpg",
        description: "description 2"
    },
    {
        title: "Title 3",
        imageUrl: "https://.IMAGE 2022-12-17 22:33:39.jpg",
        description: "description 3"
    },
    {
        title: "Title 4",
        imageUrl: "https://.IMAGE 2022-12-17 22:33:20.jpg",
        description: "description 4"
    },
    {
        title: "Title 5",
        imageUrl: "https://.IMAGE 2022-12-17 22:33:32.jpg",
        description: "description 5"
    },
    {
        title: "Title 6",
        imageUrl: "https://.IMAGE 2022-12-17 22:33:39.jpg",
        description: "description 6"
    }
];

for (const card of cards) {
    let x = cards.indexOf(card);
    if (x % 2 == 0) {
        card.title = '[$s] '.replace("$s", x) + card.title;
    }
}


let generateCards = (cards) => {
    for (const elem of cards) {
        const art = document.createElement('elem');
        art.setAttribute('id', 'card')

        const title = document.createElement('h4');
        title.innerText = elem.title;
        art.appendChild(title);

        const br = document.createElement('br');
        art.appendChild(br);

        const image = document.createElement('img');
        image.src = elem.imageUrl;
        art.appendChild(image);

        const description = document.createElement('p');
        description.innerText = elem.description;
        art.appendChild(description);

        let cards = document.getElementById('cards');
        cards.appendChild(art);
    };
};

generateCards(cards);