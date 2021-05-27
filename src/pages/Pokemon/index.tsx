import React from 'react';
import useData from "../../hook/getData";
import {IPokemons} from "../../interface/pokemons";

export interface PokemonProps {
    id: string | number
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
    const {
        data,
        isLoading,
        isError,
    } = useData<IPokemons>('getPokemon', {}, id );
    return (
        <div>
            This is pokemon id: {id}
            {isLoading ?
                <p>Loading...</p>
                :
                <p>{JSON.stringify(data)}</p>
            }
        </div>
    );
};

export default PokemonPage;