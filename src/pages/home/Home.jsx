import Card from "../../components/card/Card";
import useFetch from "../../hooks/useFetch";
import { Cards } from "./styleHome";
import Categorie from "../../components/categories/Categories";

const Home = ({ AddProducts }) => {
  const { data } = useFetch("https://fakestoreapi.com/products");

  return (
    <>
      <Categorie />
      <Cards>
        {data.ok &&
          data.apiData.map((product) => (
            <Card
              product={product}
              AddProducts={AddProducts}
              key={product.id}
            />
          ))}
      </Cards>
    </>
  );
};

export default Home;
