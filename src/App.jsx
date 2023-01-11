import { BrowserRouter } from "react-router-dom";
import { GoblalStyled } from "./styleIndex";
import Pages from "./pages/pages/Pages";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { useState } from "react";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
    totalItem: 0,
  });

  const AddProducts = (pro, quantity) => {
    var flagProduct = true;
    shoppingCart.items.map((product) => {
      if (product.proID === pro.id) {
        flagProduct = false;
        product.proQuantity = product.proQuantity + quantity;
      }
    });
    if (!flagProduct) {
      setShoppingCart({
        ...shoppingCart,
        totalItem: shoppingCart.totalItem + quantity,
      });
      return;
    }
    AddNewProduct(pro, quantity);
  };

  const AddNewProduct = (pro, quantity) => {
    const items = {
      proID: pro.id,
      proTitle: pro.title,
      proImage: pro.image,
      proPrice: pro.price,
      proQuantity: quantity || 1,
      proTotal: parseFloat(pro.price) * parseFloat(quantity),
    };
    let newItem = [...shoppingCart.items, items];
    setShoppingCart({
      ...shoppingCart,
      totalItem: shoppingCart.totalItem + quantity || 1,
      items: newItem,
    });
  };

  const DeleteProduct = (pro) => {
    const newItem = shoppingCart.items.filter((product) => {
      return pro.proID !== product.proID;
    });
    setShoppingCart({
      ...shoppingCart,
      totalItem: shoppingCart.totalItem - pro.proQuantity,
      items: newItem,
    });
  };

  return (
    <BrowserRouter>
      <GoblalStyled />
      <NavBar shoppingCart={shoppingCart} />
      <Pages
        shoppingCart={shoppingCart}
        AddProducts={AddProducts}
        DeleteProduct={DeleteProduct}
      />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
