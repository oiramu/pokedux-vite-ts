import { Col } from 'antd'
import './App.css'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import Logo from './assets/logo.svg';
import { useEffect } from 'react';
import { getPokemon } from './api';
import { Pokemon } from './models/pokemon.model';
import { setPokemons as setPokemonsActions } from './actions';
import { connect } from 'react-redux';

type Props = {
  pokemons: Pokemon[],
  setPokemons: any
}

function App({ pokemons, setPokemons }: Props) {

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

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = (dispatch: any) => ({
  setPokemons: (value: Pokemon[]) => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
