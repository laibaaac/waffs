const hierin = $('h1');
const auteur = $('h2');

export function changeHTML(data) {
    // data = []; //zo kan ik mijn error laten zien, want zeg ik dat ik geen data krijg

    // wanneer ik niks voor data krijg, krijg ik deze message in mijn html 
    if (data.length == 0) {

        showErrorMessage('Geen data!');
        return;
    } 

    const randomNummer = Math.floor(Math.random() * data.length);

    const randomQuote = data[randomNummer].text;
    const randomAuthor = data[randomNummer].author;

    hierin.innerHTML = randomQuote;
    auteur.innerHTML = randomAuthor;

}

export function showErrorMessage(message) {
    hierin.innerHTML = message;

    // quoteContainer.classList.remove('hide');
}

// algemene ui toggle
// elementToToggle = classname of id
//Dit gebruik ik voor mijn loading en error state
export function toggleElement(elementToToggle) {

    const targetSection = $(elementToToggle);

    if (targetSection.classList.contains('hide')) {
        targetSection.classList.remove('hide');

        return;
    }

    targetSection.classList.add('hide');

}

//  toggle voor mijn nav
export function toggleNav(id) {

    const allSections = $$('.page-content');

    allSections.forEach((element) => {
        element.classList.add('hide');
    });

    const targetSection = $(`#${id}`);

    if (targetSection.classList.contains('hide')) {
        targetSection.classList.remove('hide');

        return;
    }

    targetSection.classList.add('hide');

}


function $(element) {
    return document.querySelector(element)

}

function $$(elements) {
    return document.querySelectorAll(elements)
}