const hierin = $('h1');
const auteur = $('h2');
const deBTN = $('button');


fetchData();

function fetchData() {
    const url = 'https://opensheet.elk.sh/1W7nmmrM1C2uX6_nRSsXP5x3A7R1A9b5P6Q-fJhtwLQ8/blad1'



    const data = fetch(url)
        .then(response => response.json())
        .then(data => {
            // iets gaan doen met de data
            // data, h1 veranderen naar naam
            changeHTML(data)


    })
    }

function changeHTML(data) {
    hierin.innerHTML = data[0].text
    auteur.innerHTML = data[0].author


    deBTN.addEventListener("click", () => {
        const randomnumer = Math.floor(Math.random() * 11);

        const randomQuote = data[randomnumer].text;
        const randomAuthor = data[randomnumer].author;


        hierin.innerHTML = randomQuote
        auteur.innerHTML = randomAuthor

    })
}




function $(element) {
    return document.querySelector(element)

}

function $$(elements) {
    return document.querySelectorAll(elements)
}