import { SET_POKEMONS } from "../actions/types"
import { Pokemon } from "../models/pokemon.model"

type TypeState = {
    pokemons: Pokemon[]
}

const initialState: TypeState = {
    pokemons: [],
}

export const pokemonsReducer = (state: TypeState = initialState, action: any) => {
    switch(action.type) {
        case SET_POKEMONS:
            return {...state, pokemons: action.payload};
        default:
            return state;
    }
}