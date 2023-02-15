console.log("helloooo");

const hierin= $('h1');
const auteur= $('h2');


fetchData();

function fetchData (){
    const url = 'https://opensheet.elk.sh/1W7nmmrM1C2uX6_nRSsXP5x3A7R1A9b5P6Q-fJhtwLQ8/blad1'
  


    const data = fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        // iets gaan doen met de data
                        // data, h1 veranderen naar naam
                        changeHTML(data)
                    })
}

function changeHTML (data) {
    console.log(data)
    
    const me = data[0].text
   
    hierin.innerHTML = me



}

function $ (element) {
    return document.querySelector(element)

}

function $$ (elements) {
    return document.querySelectorAll(elements)
}
