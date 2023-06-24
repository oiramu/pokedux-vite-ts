import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types"
import { PokemonDetail } from "../models/pokemon.model"

export type StatePokemons = {
    pokemons: PokemonDetail[],
    loading: boolean
}

const initialState: StatePokemons = {
    pokemons: [], 
    loading: false
}

export const pokemonsReducer = (state: StatePokemons = initialState, action: any) => {
    switch(action.type) {
        case SET_POKEMONS:
            return {...state, pokemons: action.payload};
        case SET_FAVORITE:
            const newPokemonList = [ ...state.pokemons ];
            const currentPokemonIndex = newPokemonList.findIndex( pokemon => pokemon.id === action.payload );
            if(currentPokemonIndex < 0) {
                return state;
            }

            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;

            return {...state, pokemons: newPokemonList};
        case SET_LOADING:
            return {...state, loading: action.payload};
        default:
            return state;
    }
}