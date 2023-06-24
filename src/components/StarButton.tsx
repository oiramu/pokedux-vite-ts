import { StarFilled, StarOutlined } from "@ant-design/icons"
import { Button } from "antd"

type Props = {
    isFavorite: boolean
    onClick: any;
}

const StarButton = ({ isFavorite, onClick }: Props) => {
    const Icon = isFavorite ? StarFilled : StarOutlined;
    return <Button icon={<Icon/>} onClick={onClick}/>
}

export default StarButton;