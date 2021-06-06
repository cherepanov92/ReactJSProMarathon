import { Dispatch } from 'react';
import req from '../utils/request';
import {ITypesRequest} from "../interface/pokemons";
import config from "../config";
import {IStateRequest} from "../interface";
import {IInitialState} from "./index";

export enum PokemonActionTypes {
    FETCH_TYPES = 'FETCH_TYPES',
    FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
    FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

export interface IPokemonInitialState {
    types: IStateRequest<string>;
}

const initialState: IPokemonInitialState = {
    types: {
        isLoading: false,
        data: null,
        error: null,
    },
};

interface TypesAction {
    type: PokemonActionTypes;
    payload?: string[];
}

type ActionTypes = TypesAction;

const pokemons = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonActionTypes.FETCH_TYPES:
            return {
                ...state,
                types: {
                    isLoading: true,
                    data: null,
                    error: null,
                },
            };
        case PokemonActionTypes.FETCH_TYPES_RESOLVE:
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: action.payload,
                    error: null,
                },
            };
        case PokemonActionTypes.FETCH_TYPES_REJECT:
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: null,
                    error: action.payload,
                },
            };
        default:
            return {
                ...state,
            };
    }
};

export const getPokemonsTypes = (state:IInitialState) => state.pokemons.types.data;
export const getPokemonsTypesLading = (state:IInitialState) => state.pokemons.types.isLoading;

export const getTypesAction = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({ type: PokemonActionTypes.FETCH_TYPES });
        try {
            const response = await req<ITypesRequest>(config.client.endpoint.getPokemonTypes, {});
            dispatch({ type: PokemonActionTypes.FETCH_TYPES_RESOLVE, payload: response });
        } catch (error) {
            dispatch({ type: PokemonActionTypes.FETCH_TYPES_REJECT, payload: error });
        }
    };
};

export default pokemons;
