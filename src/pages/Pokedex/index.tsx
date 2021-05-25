import React, {useState} from 'react';
import PokemonCard from "../../components/PokemonCard";

import s from './Pokedex.module.scss';
import useData from "../../hook/getData";

const PokedexPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const {
        data,
        isLoading,
        isError,
    } = useData('getPokemons', {
        name: searchValue
    });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    //todo: фиксить в дивах
    // if (isLoading) {
    //     return <div>Loading...</div>
    // }

    if (isError) {
        return <div>Something wrong</div>
    }

    return (
        <>

            <p>{!isLoading && data.total} Pokemons for you to choose your favorite</p>
            <div>
                <input type={'text'} value={searchValue} onChange={handleSearchChange}/>
            </div>
            <div className={s.cardsWrapper}>
                {!isLoading && data.pokemons.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon} />)}
            </div>
        </>
    );
};

export default PokedexPage;