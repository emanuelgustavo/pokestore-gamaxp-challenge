import React from "react";
import { Table } from "reactstrap";

import TableLine from "../TableLine";

const CartTable = props => {
  const { cartList, type, totalCartValue } = props;

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Pokemón</th>
          <th>Description</th>
          <th>Unit $</th>
          <th colSpan={2}>Quantity</th>
          <th>Total</th>
          {type !== "popover" && <th />}
        </tr>
      </thead>
      <tbody>
        {cartList.map((item, index) => (
          <TableLine
            key={index}
            index={index}
            data={item}
            deleteCartItem={props.deleteCartItem}
            handleItemQuantity={props.handleItemQuantity}
            type={type}
          />
        ))}
        <tr>
          <th colSpan={5}>Total</th>
          <th>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(totalCartValue)}
          </th>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartTable;
