import { handleRoutes } from './modules/router.js'
//de gelievde routie 

import { changeHTML, showErrorMessage, toggleElement } from './modules/change.js'
// change.js is waar ik mijn api verbindt met mijn html

import { getData } from './modules/api.js'
// api erin krijgen 

const randomQuoteBtn = document.querySelector('.js-random-btn');
// de button om de quotes te krijgen 

handleRoutes()
// routie functie

randomQuoteBtn.addEventListener('click', getRandomQuote);
// eventlistener voor mijn mooie button 

function getRandomQuote() {
    console.log('clicked');

    const quoteContainer = document.querySelector('.js-quote-content');
    // mijn h1 en h2

    // Quotes zijn nog niet zichtbaar, oftewel: eerste keer
    if (quoteContainer.classList.contains('hide')) {
       
        // empty state verstoppen! we gaan data ophalen!
        toggleElement('.js-empty');
    }

    // Quotes + loader zichtbaar maken
    toggleElement('.js-quote-content');
    toggleElement('.js-loader');
    //zie change.js om te kijken wat ik precies met toggle element bedoel 

    // loader!!!
    getData().then(data => {
        console.log('GOT DATA!!');

        setTimeout(() => {
            changeHTML(data);

            // Loader verstoppen 
            toggleElement('.js-loader');
            
            // Quotes ontvangen! Laat ze zien
            if (quoteContainer.classList.contains('hide')) {
                toggleElement('.js-quote-content');
            }
           
        }, 250);
        // een timing zetten, zodat ik de loading state voor een paar ms zie 
        

    })
    // hier throw ik mijn error die ik van change.js krijg en laat ik de volgende zien in mijn html (fetch error)
    .catch((error) => {
        showErrorMessage('Fetch error');
        console.log('fetch error!' , error);
    });

}
