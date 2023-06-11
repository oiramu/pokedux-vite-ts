import { Col } from 'antd'
import './App.css'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import Logo from './assets/logo.svg';
import { useEffect, useState } from 'react';
import { getPokemon } from './api';
import { Pokemon } from './models/Pokemon';

function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsRes = await getPokemon();
      if( pokemonsRes ) { setPokemons(pokemonsRes); }
    };
    getPokemons();
  }, [])

  return (
    <>
      <Col span={4} offset={10}>
        <img src={Logo} alt="" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default App
