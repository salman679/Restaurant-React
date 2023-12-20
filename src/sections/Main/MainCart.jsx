import Container from "../../Components/Container";
import Row from "../../Components/Row";
import CardData from "../CardItem/CardData";
import "./MainCart.scss";
import { useState } from "react";

function MainCart() {
    const [data, setData] = useState(0);

    let clickHandler = (data) => {
        setData(data);
    }

    return (
        <div className="food">
            <div className="content-heading">
                <p>Chose Your Favorite Food {data}</p>
            </div>
            <Container>
                <Row>
                    <CardData
                        onClick={clickHandler}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default MainCart