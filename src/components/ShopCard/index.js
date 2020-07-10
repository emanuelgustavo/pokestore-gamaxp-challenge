import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

import "./styless.css";

const ShopCard = props => {
  return (
    <Card className="card">
      <CardImg className="card-image" src={props.imageUrl} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>Valor:</CardSubtitle>
        <CardText>{props.base_xp * 100}</CardText>
        <Button>Add to chart</Button>
      </CardBody>
    </Card>
  );
};

export default ShopCard;
