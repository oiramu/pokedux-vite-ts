import { Pokemon } from "../models/pokemon.model";
import { SET_POKEMONS } from "./types";

export const setPokemons = (payload: Pokemon[]) => ({
    type: SET_POKEMONS,
    payload
})