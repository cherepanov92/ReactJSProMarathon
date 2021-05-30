import React from 'react';
import Heading from "../Heading";
import pokeball from './assets/pokeball.png';

import s from './PokemonCard.module.scss';

interface IStatus {
    'hp': number;
    'attack': number;
    'defense': number;
    'special-attack': number;
    'special-defense': number;
    'speed': number;
}

interface PokemonCardProps {
    name: string;
    stats: IStatus;
    img: string;
    types: Array<string>
}

const PokemonCard:React.FC<PokemonCardProps> = ({ name, stats, img, types }) => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading type='h4' className={s.titleName}>
                    {name}
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {stats.attack}
                        </div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {stats.defense}
                        </div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {types.map(type => <span key={type} className={s.label}>{type}</span>)}
                </div>
            </div>
            <div className={s.pictureWrap}>
               <img src={img ? img : pokeball} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;