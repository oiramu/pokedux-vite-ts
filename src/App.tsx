import { Col } from 'antd'
import './App.css'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'

function App() {

  return (
    <>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </>
  )
}

export default App
