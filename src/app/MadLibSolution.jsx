import React from 'react';

export const MadLibSolution = props => {
    
    return <>
        <p> I was {props.words.ingVerb ? props.words.ingVerb : <i><u>Missing ING VERB</u></i>} on the street in downtown {props.words.city ? props.words.city : <i><u>Missing CITY</u></i>} on a Saturday morning. I had my favorite {props.words.color ? props.words.color : <i><u>Missing COLOR</u></i>} {props.words.noun ? props.words.noun : <i><u>Missing NOUN</u></i>} in hand. </p>

        <p> As I {props.words.ingVerb ? props.words.ingVerb : <i><u>Missing ING VERB</u></i>} around the corner, {props.words.number ? props.words.number : <i><u>Missing NUMBER</u></i>} bears {props.words.verb2 ? props.words.verb2 : <i><u>Missing VERB</u></i>} right out in front of me. I screamed and threw my {props.words.color ? props.words.color : <i><u>Missing COLOR</u></i>} {props.words.noun ? props.words.noun : <i><u>Missing NOUN</u></i>} into the air. </p>

        <h5>  THE END.  </h5>

    </>
}