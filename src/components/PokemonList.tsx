import { PokemonDetail } from "../models/pokemon.model";
import PokemonCard from "./PokemonCard";
import './PokemonList.css'

type Props = {
    pokemons: PokemonDetail[]
}

const PokemonList = ({pokemons}: Props) => {
    return (
        <div className="PokemonList">
            { pokemons.map( pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/> ) }
        </div>
    );
}

export default PokemonList;