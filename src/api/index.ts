import axios from 'axios';
import { Pokemon, PokemonApiResponse } from '../models/pokemon.model';

export const getPokemon = async () => {
    try {
        const { data } = await axios.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        return data.results;
    } catch (error) {
        console.error('There was an error: ', error);
    }
}

export const getPokemonDetails = async (pokemon: Pokemon) => {
    return axios.get(pokemon.url)
        .then(res => res.data)
        .catch(error => console.error(error));
}