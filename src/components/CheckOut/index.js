import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import CartTable from "../CartTable";

const CheckOut = props => {
  const { cartList, totalCartValue, modalVisible } = props;
  const [doneShopButtonVisible, setDoneShopButtonVisible] = useState(true);
  const [finishCart, setFinishCart] = useState(false);
  const [finishAllCart, setFinishAllCart] = useState(false);

  useEffect(() => {
    if (cartList.length === 0) {
      setDoneShopButtonVisible(false);
      return;
    }
    setDoneShopButtonVisible(true);
  }, [cartList]);

  const toggleFinishCart = () => {
    setFinishCart(!finishCart);
    setFinishAllCart(!finishAllCart);
  };

  const finishAllOrder = () => {
    setFinishCart(false);
    setFinishAllCart(false);
    props.toggle();
    props.finishShopping();
  };

  return (
    <div>
      <Modal
        isOpen={modalVisible}
        toggle={props.toggle}
        className="checkout-modal"
      >
        <ModalHeader toggle={props.toggle}>Finalizando compra...</ModalHeader>
        <ModalBody>
          <h3>Sua compra:</h3>
          <CartTable
            cartList={cartList}
            deleteCartItem={props.deleteCartItem}
            type={"checkout"}
            totalCartValue={totalCartValue}
            handleItemQuantity={props.handleItemQuantity}
          />
          <Modal
            isOpen={finishCart}
            toggle={toggleFinishCart}
            onClosed={finishAllCart ? toggleFinishCart : undefined}
          >
            <ModalHeader>Compra realizada...</ModalHeader>
            <ModalBody>
              Total da compra:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(totalCartValue)}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleFinishCart}>
                Voltar
              </Button>{" "}
              <Button color="secondary" onClick={finishAllOrder}>
                Concluir
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          {doneShopButtonVisible && (
            <Button color="primary" onClick={toggleFinishCart}>
              Concluir
            </Button>
          )}{" "}
          <Button color="secondary" onClick={() => props.toggle(2)}>
            Continuar comprando...
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CheckOut;
