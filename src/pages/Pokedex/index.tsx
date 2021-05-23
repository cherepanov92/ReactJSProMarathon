import React, {useEffect, useState} from 'react';
import PokemonCard from "../../components/PokemonCard";

import s from './Pokedex.module.scss';

const PokedexPage = () => {
    const [totalPokemons, setTotalPokemons] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const getPokemons = async() => {
        setIsLoading(true);
        try {
            const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
            const data = await response.json();
            setTotalPokemons(data.total);
            setPokemons(data.pokemons);
        } catch (e) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getPokemons();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Something wrong</div>
    }

    return (
        <>
            <div className={s.cardsWrapper}>
                {pokemons.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon} />)}
            </div>
        </>
    );
};

export default PokedexPage;