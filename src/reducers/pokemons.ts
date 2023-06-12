import { SET_POKEMONS } from "../actions/types"
import { Pokemon } from "../models/pokemon.model"

export type StatePokemons = {
    pokemons: Pokemon[]
}

const initialState: StatePokemons = {
    pokemons: [],
}

export const pokemonsReducer = (state: StatePokemons = initialState, action: any) => {
    switch(action.type) {
        case SET_POKEMONS:
            return {...state, pokemons: action.payload};
        default:
            return state;
    }
}