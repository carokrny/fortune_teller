/* -- PHRASE BANK --
File containing phrase data for use by functions in main.js to create a fortune.
Exports function getPhrases(ordinalNum, topic) that returns an array of phrases.  


Fortunes created have a first sentence and a second sentence.
Both sentences include a phrase based in a randomly selected topic. 
First phrases are each associated with 1 topic. 
Second phrases can be associated with multiple topics. 
*/

/* --TOPIC SHORTHAND--
'G' short for Good Relationships
'B' short for Bad Relationships
'P' short for At Peace
'C' short for Change
*/ 

//---------------------------------------------------------------------------------------------

/* --FIRST PHRASES--
First sentences take the format:
"You are in a [number] [unit of time] cycle of [first phrase]."
E.g: "You are in a 2 week cycle cycle of good luck."
First phrases below, organized by topic.
*/

// Good Relationships (G):
const gFirstPhrases = ["good luck", "new relationships", "energy in your erotic eigth house"];
/*
Examples:
You are in a 2 week cycle cycle of good luck.
You are in a 5 month cycle of new relationships.
You are in a 7 week cycle of energy in your erotic eigth house. 
*/

// Bad Relationships (B): 
const bFirstPhrases = ["bad luck", "negative energy in your third house that is weakening communication",
"tumult in your eigth house is straining your relationships"];
/*
You are in a 4 month cycle of bad luck.
You are in a 5 week cycle of negative energy in your third house, weakening communication.
You are in a 2 week cycle of tumult in your eight house straining realtionships.
*/

// At Peace (P):
const pFirstPhrases = ["being grounded", "wellness permeating your body and mind", "good health"];
/*
You are in a 5 week cycle of being grounded. 
You are in a 15 day cycle of wellness permeating your body and mind. 
You are in a 3 month cycle of good health. 
*/

// Change (C):
const cFirstPhrases = ["growth", "creativity flooding your twelfth house", 
"wanderlust entering your third house"];
/*
You are in a 9 week cycle of growth. 
You are in a 4 day cycle of creativity flooding your twelfth house. 
You are in a 3 week cycle of wanderlust entering your third house.
You are in a 5 month cycle of change to your career. 
*/


//-------------------------------------------------------------------------------------------



/* --SECOND PHRASES--
Second sentences take the format: 
"[second person directive] [second phrase]."
E.g: "You should be alone with yourself."
There are two second person directives:
    - "You should"
    - "Let yourself"
Second phrases below, organized into objects that contain more than one topic.
*/

var secondPhrases = [{phrase: "charge your crystals under the moon tonight", C:true, P:true},
{phrase: "be alone with yourself", B:true, C:true, P:true}, 
{phrase: "pay attention to unproductive habits that have crept in", B:true, C:true, P:true},
{phrase: "pursue new alliances today", G:true},
{phrase: "let your guard down", C:true, P:true},
{phrase: "trust no one", B:true}, 
{phrase: "burn sage to cleanse", B:true, P:true},
{phrase: "focus on communication", G:true, B:true},
{phrase: "listen to the cosmos", G:true, B:true, P:true, C:true},
{phrase: "be swept away by love", G:true},
{phrase: "grow today", G:true, C:true, P:true},
{phrase: "relax and breathe in deeply", P:true, C:true},
{phrase: "focus on the short term", G:true, B:true, P:true},
{phrase: "focus on the long term", G:true, B:true, C:true, P:true},
{phrase: "be vibrant and take up space today", G:true, C:true, P:true},
{phrase: "practice gratitude", C:true, P:true},
{phrase: "invest in yourself", C:true, P:true},
{phrase: "pursue your passions", G:true, C:true}];

/*
Examples: 
You should charge your crystals under the moon tonight. (C,P)
You should be alone with yourself. (B,C,P)
You should pay attention to unproductive habits that have crept in. (B,C,P)
You should pursue new alliances today. (G)
You should let your guard down.(C,P)
You should trust no one.(B)
You should burn sage to cleanse. (B,P)
You should focus on communication (G,B)
You should listen to the cosmos (G,B,P,C)

Let yourself be swept away by love. (G)
Let yourself grow today. (G,C,P)
Let yourself relax and breathe in deeply. (C,P)
Let yourself focus on the short term. (G,B,P)
Let yourself focus on the long term. (G,B,C,P)
Let yourself be vibrant and take up space today. (G,C,P)
Let yourself practice gratitude. (C,P)
Let yourself invest in yourself. (C,P)
Let yourself pursue your passions. (C)
*/

//-------------------------------------------------------------------------

/* --SORT Second Phrases by Topic--
The splitByTopic is a helper funciton for getPhrases meant to parse second phrases by topic. 
    - secondPhrases: an array of secondPhrase objects
    - topic: 'G', 'B', 'P', or 'C', representing a topic
    Returns an array of second phrases as strings based on the topic argument.
*/
function splitByTopic (secondPhrases, topic) {
    if (topic !== 'G' && topic !== 'B' && topic !== 'P' && topic !== 'C'){
        console.log ('Error. Invalid topic argument.');
        return [];
    }
    const topicArray = secondPhrases.reduce((accumulator, current) => {
        if (current[topic]){
            accumulator.push(current['phrase']);
        }
        return accumulator;
    }, []);
    return topicArray; 
}

/* -- GET PHRASES
Exported function to get and return an array of phrases. 
    - ordinalNum: either 'first' or 'second' to represent first phrase or second phrase. 
    - topic: 'G', 'B', 'P', or 'C', representing a topic
    Returns an array of ordinalNum phrases corresponding to topic. 
*/
function getPhrases (ordinalNum, topic){
    ordinalNum = ordinalNum.toLowerCase();
    topic = topic.toUpperCase();
    switch (ordinalNum) {
        case 'first':
            switch (topic) {
                case 'G':
                    return gFirstPhrases;
                case 'B':
                    return bFirstPhrases;
                case 'C':
                    return cFirstPhrases;
                case 'P':
                    return pFirstPhrases;
                default:
                    console.log ('Error. Invalid topic argument.');
                    break;
            }
        case 'second':
            return splitByTopic(secondPhrases, topic);
        default: 
            console.log ('Error. Invalid ordinalNum argument.');
            break;
    }
}

module.exports.getPhrases = getPhrases;