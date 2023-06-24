import { Dispatch } from "redux";
import { getPokemonDetails } from "../api";
import { Pokemon, PokemonDetail } from "../models/pokemon.model";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload: PokemonDetail[]) => ({
    type: SET_POKEMONS,
    payload
});

export const setLoading = (payload: boolean) => ({
    type: SET_LOADING,
    payload
});

export const setFavorite = (payload: number) => ({
    type: SET_FAVORITE,
    payload
});

export const getPokemonsWithDetails = (pokemons: Pokemon[] = []) => async (dispatch: Dispatch) => {
    const pokemonDetailed: PokemonDetail[] = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)));
    dispatch(setPokemons(pokemonDetailed));
}