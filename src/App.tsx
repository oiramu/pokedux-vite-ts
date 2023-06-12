import { Col } from 'antd'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import Logo from './assets/logo.svg';
import { useEffect } from 'react';
import { getPokemon } from './api';
import { setPokemons } from './actions';
import { StatePokemons } from './reducers/pokemons';

function App() {

  const pokemons = useSelector<StatePokemons>(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsRes = await getPokemon();
      if( pokemonsRes ) { dispatch(setPokemons(pokemonsRes)); }
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

export default App;
