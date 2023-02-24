import './vendor/routie.min.js'
import { toggleNav } from './change.js';


export function handleRoutes() {
    console.log('hoiiii');
  routie(
    {
    'home': () => { 
      toggleNav('home')
    },
    'about': () => {
      toggleNav('about');
    }
  })
}

