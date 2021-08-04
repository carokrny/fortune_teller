/* --MAIN of FORTUNE MESSAGER--
    Node.js app to produce tell your fortune. 

    Fortunes contain two sentences. Each sentence contains one or more randomly 
    selected phrases corresponding to a random topic. 
    Phrases are grouped by topic to avoid a contradictory fortune. 

    To run from command line: Node main.js
*/

import { getPhrases } from './phrase-bank.js';

/* Node functionality:
const phraseBank = require('./phrase-bank.js');
const { getPhrases } =  phraseBank;
*/

// --Helper Functions-- 

// getRand returns a random integer between 0 and num, exclusive. 
const getRand = num => {
    return Math.floor(Math.random()*num);
}

// randTimeSpan returns 'day', 'week' or 'month' at random. 
const randTimeSpan = () => {
    const num = getRand(3);
    switch (num) {
        case 0:
            return 'day';
        case 1:
            return 'week';
        case 2:
            return 'month';
    }
}

// randTopic returns a random topic to select a phrase from. 
const randTopic = () => {
    const topic = getRand(4);
    switch (topic) {
        case 0: 
            return 'G';
        case 1:
            return 'B';
        case 2:
            return 'P';
        case 3:
            return 'C';
    }
}

const randPhrase = phrases => {
    const i = getRand(phrases.length);
    return phrases[i];
}

// --Main Function--

/*
Fortunes created have a first sentence and a second sentence.
Both sentences include a phrase based in a randomly selected topic. 
First phrases are each associated with 1 topic. 
Second phrases can be associated with multiple topics. 
*/
// getFortune returns a sentence representing a mystery fortune. 

function getFortune() {
   // Determine topic of fortune (good, bad, etc.)
   const topic = randTopic();

    /* First sentence
    First sentences take the format:
    "You are in a [number] [unit of time] cycle of [first phrase]."
    E.g: "You are in a 2 week cycle cycle of good luck."
    */
    // determine span of cycle for first sentence
    const num = 1 + getRand(9);
    const time = randTimeSpan();
    // determine first phrase
    const firstPhrases = getPhrases('first', topic);
    const firstPhrase = randPhrase(firstPhrases);
    // Construct first sentence: 
    const firstSent = `You are in a ${num} ${time} cycle of ${firstPhrase}.`;

    /*Second sentence 
    Second sentences take the format: 
    "[second person directive] [second phrase]."
    E.g.: "You should be alone wclearith yourself."
    */
    // determine decond person directive
    const directive = randPhrase(['You should', 'Let yourself']);
    //determine second phrase
    const secondPhrases = getPhrases('second', topic);
    const secondPhrase = randPhrase(secondPhrases);
    //construct second sentence 
    const secondSent = `${directive} ${secondPhrase}.`;
    
    //construct full fortune
    const fortune = `${firstSent}\n\n${secondSent}`;

    //add JS to DOM 
    //make fortune appear
    document.getElementById("fortune").innerHTML = fortune;
    document.getElementById("fortune-wrapper").style.display="block";
    //update text of button
    document.getElementById("button").innerHTML = "Tell another fortune";    
}

document.getElementById("button").addEventListener("click", getFortune)