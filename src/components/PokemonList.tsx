import { Pokemon } from "../models/Pokemon";
import PokemonCard from "./PokemonCard";
import './PokemonList.css'

type Props = {
    pokemons: Pokemon[]
}

const PokemonList = ({pokemons}: Props) => {
    return (
        <div className="PokemonList">
            { pokemons.map( pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/> ) }
        </div>
    );
}

export default PokemonList;