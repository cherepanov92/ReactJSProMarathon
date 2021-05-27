import React from 'react';
import Heading from "../Heading";
import pokeball from './assets/pokeball.png';

import s from './PokemonCard.module.scss';
import {navigate} from "hookrouter";

interface IStatus {
    'hp': number;
    'attack': number;
    'defense': number;
    'special-attack': number;
    'special-defense': number;
    'speed': number;
}

interface PokemonCardProps {
    id: number;
    name: string;
    stats: IStatus;
    img: string;
    types: Array<string>
}

const PokemonCard:React.FC<PokemonCardProps> = ({ id, name, stats, img, types }) => {
    return (
        <div className={s.root} onClick={() => navigate(`/pokedex/${id}`)}>
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