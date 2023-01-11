import { PagesConatiner, PageContent } from "./stylePages";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Category from "../category/Category";
import Details from "../details/Details";
import Cart from "../cart/Cart";
import AddressPay from "../addresspay/AddressPay";

const Pages = ({ AddProducts, shoppingCart, DeleteProduct }) => {
  return (
    <PagesConatiner>
      <PageContent>
        {/* <Categories /> */}
        <Routes>
          <Route path="/" element={<Home AddProducts={AddProducts} />} />
          <Route
            path="/category/:type"
            element={<Category AddProducts={AddProducts} />}
          />
          <Route
            path="/details/:id"
            element={<Details AddProducts={AddProducts} />}
          />
          <Route
            path="/cart"
            element={
              <Cart shoppingCart={shoppingCart} DeleteProduct={DeleteProduct} />
            }
          />
          <Route
            path="/address"
            element={<AddressPay shoppingCart={shoppingCart} />}
          />
        </Routes>
      </PageContent>
    </PagesConatiner>
  );
};

export default Pages;
