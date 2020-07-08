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
      <CardImg
        className="card-image"
        src="https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-06-05-18-29/pokemon-sword-shield-new-pokemon-regional-pokedex-6017-1559755742879.jpg/EG11/thumbnail/750x422/format/jpg/quality/60"
      />
      <CardBody>
        <CardTitle>Pokemon Name</CardTitle>
        <CardSubtitle>Pokemon class</CardSubtitle>
        <CardSubtitle>Valor:</CardSubtitle>
        <CardText>$150,00</CardText>
        <Button>Add to chart</Button>
      </CardBody>
    </Card>
  );
};

export default ShopCard;
