import React, {useEffect, useState} from 'react';
import PokemonCard from "../../components/PokemonCard";
import {useDispatch, useSelector} from "react-redux";

import s from './Pokedex.module.scss';
import useData from "../../hook/getData";
import {IPokemons, PokemonsRequest} from "../../interface/pokemons";
import useDebounce from "../../hook/useDebounce";
import {navigate} from "hookrouter";
import config from "../../config";
import {getPokemonsTypes, getPokemonsTypesLading, getTypesAction} from "../../store/pokemons";

interface IQuery {
    limit: number,
    name?: string
}

const PokedexPage = () => {
    const dispatch = useDispatch();
    const types = useSelector(getPokemonsTypes);
    const isTypesLoading = useSelector(getPokemonsTypesLading);
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({
        limit: 12
    });
    const debouncedValue = useDebounce(searchValue, 700);

    const {
        data,
        isLoading,
        isError,
    } = useData<IPokemons>(config.client.endpoint.getPokemons, query, [debouncedValue]);

    useEffect(() => {
        dispatch(getTypesAction());
    }, [])

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
            <div>
                {
                    isTypesLoading ? <p> Loading </p> : types?.map(item => <div>{item}</div>)
                }
            </div>
            <div className={s.cardsWrapper}>
                {!isLoading && data && data.pokemons.map((pokemon: PokemonsRequest) =>
                    <div onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
                        <PokemonCard key={pokemon.id} {...pokemon} />
                    </div>
                )}
            </div>
        </>
    );
};

export default PokedexPage;