import { Card } from "antd";
import { StarOutlined } from '@ant-design/icons';
import Meta from "antd/es/card/Meta";

const PokemonCard = () => {
    return <Card title='mewtwo' cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png' alt='mewtwo' />} extra={<StarOutlined/>}>
        <Meta description='sacajawea' />
    </Card>
}

export default PokemonCard;