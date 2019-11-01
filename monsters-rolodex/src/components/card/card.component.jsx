import React from 'react';

import './card.styles.css';
//creating an individual monster card
// we are mapping over the data to display to our card list component

export const Card = (props) => (
    <div className= "card-container">
        <img  alt="monster" 
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        />
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email }</p>
    </div>
)