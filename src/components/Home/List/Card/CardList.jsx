import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardList = (props) => {

    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>{props.navigation}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Text>Цена: {props.price}</Card.Text>
                <Button variant="primary">Выполнить</Button>
            </Card.Body>
        </Card>
    )
}
export default CardList;