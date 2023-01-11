import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Cards } from "./styleCategory";
import Card from "../../components/card/Card";
import Categorie from "../../components/categories/Categories";

const Category = ({ AddProducts }) => {
  const params = useParams();
  const { data } = useFetch(
    `https://fakestoreapi.com/products/category/${params.type}`
  );

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

export default Category;
