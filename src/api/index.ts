import axios from 'axios';
import { PokemonApiResponse } from '../models/pokemon.model';

export const getPokemon = async () => {
    try {
        const { data } = await axios.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        return data.results;
    } catch (error) {
        console.error('There was an error: ', error);
    }
}