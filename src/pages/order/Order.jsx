import { OrderSummary, OrderImage, OrderContent } from "./styleOrder";

const Order = ({ shoppingCart }) => {
  return (
    <>
      <h1>Order Summary</h1>
      {shoppingCart.length === 0 && <h1>Your Amazon Cart is empty</h1>}
      {shoppingCart.length > 0 &&
        shoppingCart.map((pro, index) => (
          <>
            <OrderSummary key={pro.id}>
              <OrderImage>
                <img src={pro.proImage} alt="" />
              </OrderImage>
              <OrderContent>
                <h1>{pro.proTitle}</h1>
                <h1>{pro.proPrice}</h1>
                <h1>{pro.proQuantity}</h1>
                <h1>{pro.proTotal}</h1>
              </OrderContent>
            </OrderSummary>
          </>
        ))}
    </>
  );
};

export default Order;
