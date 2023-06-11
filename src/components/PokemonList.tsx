import PokemonCard from "./PokemnonCard";
import '.PokemonList.css'

const PokemonList = (pokemons: any[]) => {
    return (
        <div className="PokemonList">
            { pokemons.map( pokemon => <PokemonCard/> ) }
        </div>
    );
}

export default PokemonList;