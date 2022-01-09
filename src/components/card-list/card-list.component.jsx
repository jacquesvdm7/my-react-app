import React from 'react';
import './card-list.styles.css';
import { Card } from './card/card.component';

export const CardList = props => 
(
    // console.log(props);
    <div className='card-list'>
                 {
            //  Iterate through monsters array (mao will automaticall iterate)
            //we have to add key property to our list like below, the key are used for updating the lement
            props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
            ))}
    </div>
);