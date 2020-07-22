import React from "react";
import { Button } from "reactstrap";
import { FiTrash2 } from "react-icons/fi";

import { capitalize } from "../../utils/utils.js";

const TableLine = props => {
  const { index } = props;
  const {
    front_default,
    name,
    base_experience,
    quantity,
    id,
    totalItem
  } = props.data;

  const pokemonName = capitalize(name);

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        <img src={front_default} alt={pokemonName} />
      </td>
      <td>{pokemonName}</td>
      <td>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        }).format(base_experience)}
      </td>
      <td>{quantity}</td>
      <td>
        <Button onClick={() => props.handleItemQuantity("plus", id)}>+</Button>
        <Button onClick={() => props.handleItemQuantity("minus", id)}>-</Button>
      </td>
      <td>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        }).format(totalItem)}
      </td>
      <td>
        <Button onClick={() => props.deleteCartItem(id)}>
          <FiTrash2 size={16} color={"#fff"} />
        </Button>
      </td>
    </tr>
  );
};

export default TableLine;
