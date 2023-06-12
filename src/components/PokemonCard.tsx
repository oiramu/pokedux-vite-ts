import { Card } from "antd";
import { StarOutlined } from '@ant-design/icons';
import Meta from "antd/es/card/Meta";
import { Pokemon } from "../models/pokemon.model";

type Props = {
    pokemon: Pokemon
}

const PokemonCard = ( {pokemon}: Props ) => {
    return <Card title={pokemon.name} cover={<img src={pokemon.url} alt={pokemon.name} />} extra={<StarOutlined/>}>
        <Meta description='sacajawea' />
    </Card>
}

export default PokemonCard;