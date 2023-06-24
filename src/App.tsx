import { Col, Spin } from 'antd'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import Logo from './assets/logo.svg';
import { useEffect } from 'react';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading } from './actions';
import { StatePokemons } from './reducers/pokemons';
import { PokemonDetail } from './models/pokemon.model';
import { AnyAction, Dispatch } from 'redux';


function App() {
  
  const pokemons = useSelector<StatePokemons, PokemonDetail[]>(state => state.pokemons);
  const loading = useSelector<StatePokemons, boolean>(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      if( pokemonsRes ) {
        dispatch(getPokemonsWithDetails(pokemonsRes));
        dispatch(setLoading(false));
      }
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
      {
        loading ? (
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col>
        ) : (
          <PokemonList pokemons={pokemons} />
        )
      }
    </>
  )
}

export default App;
