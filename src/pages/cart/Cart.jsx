import {
  CartSummary,
  CartImage,
  CartContent,
  CartTitle,
  OrderProductTotal,
  CartContainer,
  CartSubTotal,
  BtnProceed,
  InStock,
  Carth1,
  BtnDelete,
  CartTitle2,
} from "./styleCart";
import EmptyCart from "../../components/emptyCart/EmptyCart";

const Cart = ({ shoppingCart, DeleteProduct }) => {
  let subTotal = 0;
  return (
    <CartContainer>
      {shoppingCart.items.length === 0 && <EmptyCart />}
      <>
        {shoppingCart.items.length > 0 && (
          <>
            <CartTitle2>Order Summary</CartTitle2>
            {shoppingCart.items.map((pro, index) => (
              <CartSummary key={pro.proID}>
                <CartImage>
                  <img src={pro.proImage} alt="" />
                </CartImage>
                <CartContent>
                  <CartTitle>{pro.proTitle}</CartTitle>
                  <InStock>In Stock</InStock>
                  <Carth1>Quantity: {pro.proQuantity}</Carth1>
                  <Carth1>Price: {pro.proPrice}</Carth1>
                  <BtnDelete
                    onClick={() => {
                      DeleteProduct(pro);
                    }}
                  >
                    Delete Product
                  </BtnDelete>
                </CartContent>
                <OrderProductTotal>
                  <h1>{pro.proQuantity * pro.proPrice}</h1>
                </OrderProductTotal>
                {console.log((subTotal += pro.proQuantity * pro.proPrice))}
              </CartSummary>
            ))}
          </>
        )}
        {shoppingCart.items.length > 0 && (
          <CartSubTotal>
            <h1>Tax: {parseFloat(subTotal * 0.07).toFixed(2)}</h1>
            <h1>
              Subtotal({shoppingCart.totalItem} items):{" "}
              {parseFloat(subTotal).toFixed(2)}
            </h1>
            <h1>Shipping: {parseFloat(subTotal * 0.05).toFixed(2)}</h1>
            <h1>
              TOTAL:{" "}
              {parseFloat(subTotal * 0.07 + subTotal * 0.05 + subTotal).toFixed(
                2
              )}
            </h1>
            <BtnProceed to={"/address"}>Proceed to Checkout</BtnProceed>
          </CartSubTotal>
        )}
      </>
    </CartContainer>
  );
};

export default Cart;
