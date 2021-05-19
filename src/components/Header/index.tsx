import React from 'react';
import s from './Header.module.scss';

import {ReactComponent as PokemonLogoSvg} from './assets/Logo.svg';
import {A} from "hookrouter";

interface IMenu {
    id: number,
    value: string,
    link: string
}

const Header = () => {
    const MENU: IMenu[] = [
        {
            id: 1,
            value: 'Home',
            link: '/'
        },
        {
            id: 2,
            value: 'Pokédex',
            link: '/pokedex'
        },
        {
            id: 3,
            value: 'Legendaries',
            link: '#'
        },
        {
            id: 4,
            value: 'Documentation',
            link: '#'
        },
    ]
    return (
        <div className={s.root}>
            <div className={s.wrap}>
                <div className={s.pokemonLogo}>
                    <PokemonLogoSvg />
                </div>
                <div className={s.menuWrap}>
                    {
                        MENU.map(({ value, link, id}) => (
                            <A key={id} href={link} className={s.menuLink}>
                                {value}
                            </A>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;