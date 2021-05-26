import React, {useState} from 'react';
import PokemonCard from "../../components/PokemonCard";

import s from './Pokedex.module.scss';
import useData from "../../hook/getData";
import {IPokemons, PokemonsRequest} from "../../interface/pokemons";
import useDebounce from "../../hook/useDebounce";

interface IQuery {
    limit: number,
    name?: string
}

const PokedexPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({
        limit: 12
    });
    const debouncedValue = useDebounce(searchValue, 700);

    const {
        data,
        isLoading,
        isError,
    } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setQuery((state:IQuery) => ({
            ...state,
            name: e.target.value
        }))
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

            <p>{!isLoading && data && data.total} Pokemons for you to choose your favorite</p>
            <div>
                <input type={'text'} value={searchValue} onChange={handleSearchChange}/>
            </div>
            <div className={s.cardsWrapper}>
                {!isLoading && data && data.pokemons.map((pokemon: PokemonsRequest) => <PokemonCard key={pokemon.id} {...pokemon} />)}
            </div>
        </>
    );
};

export default PokedexPage;