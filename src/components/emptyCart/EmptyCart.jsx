import { CartEmpty, EmptyContainer, BtnEmpty } from "./styleEmptyCard";

const EmptyCart = () => {
  return (
    <>
      <EmptyContainer>
        <CartEmpty>Your Amazon Cart is empty</CartEmpty>
        <BtnEmpty to={"/"}>Continue Shopping</BtnEmpty>
      </EmptyContainer>
    </>
  );
};

export default EmptyCart;
