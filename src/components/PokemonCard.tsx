import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { PokemonDetail } from "../models/pokemon.model";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

type Props = {
  pokemon: PokemonDetail;
};

const PokemonCard = ({ pokemon }: Props) => {

    const dispatch = useDispatch();
  const abilites = pokemon.abilities
    .map((ability) => ability.ability.name)
    .join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite(pokemon.id))
  };

  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
      extra={<StarButton isFavorite={pokemon.favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={abilites} />
    </Card>
  );
};

export default PokemonCard;
