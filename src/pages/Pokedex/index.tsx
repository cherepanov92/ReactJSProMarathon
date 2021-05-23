import React, {useEffect, useState} from 'react';
import PokemonCard from "../../components/PokemonCard";

import s from './Pokedex.module.scss';

const usePokemons = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getPokemons = async() => {
            setIsLoading(true);
            try {
                const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
                const result = await response.json();
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getPokemons();
    }, []);

    return {
        data,
        isLoading,
        isError,
    }
}

const PokedexPage = () => {

    const {
        data,
        isLoading,
        isError,
    } = usePokemons()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Something wrong</div>
    }

    return (
        <>

            <p>{data.total} Pokemons for you to choose your favorite</p>
            <div className={s.cardsWrapper}>
                {data.pokemons.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon} />)}
            </div>
        </>
    );
};

export default PokedexPage;