import { handleRoutes } from './modules/router.js'
import { changeHTML, showErrorMessage, toggleElement } from './modules/change.js'
import { getData } from './modules/api.js'

const randomQuoteBtn = document.querySelector('.js-random-btn');


handleRoutes()

randomQuoteBtn.addEventListener('click', getRandomQuote);

function getRandomQuote() {
    console.log('clicked');

    const quoteContainer = document.querySelector('.js-quote-content');

    // Quotes zijn nog niet zichtbaar, oftewel: eerste keer!
    if (quoteContainer.classList.contains('hide')) {
        // empty state verstoppen! we gaan data ophalen!
        toggleElement('.js-empty');
    }

    // Quotes + loader zichtbaar maken -> initieel is quotes leeg, dus geen probleem
    toggleElement('.js-quote-content');
    toggleElement('.js-loader');

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

        

    })
    // hier throw ik mijn error die ik van change.js krijg en laat ik de volgende zien in mijn html (fetch error)
    .catch((error) => {
        showErrorMessage('Fetch error');
        console.log('fetch error!' , error);
    });

}
