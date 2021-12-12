import React from 'react';

import {Card} from "./card/card.component";

import './card-list.styles.css';


class CardList extends React.Component{
    render() {
        return (<div className="card-list">
            {this.props.monsters.map(monster => {
                return (<Card key={monster.id} monster={monster}/>)
            })}

        </div>);
    }
}

export default CardList;