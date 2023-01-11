import {
  CardContainer,
  CardContent,
  ProductDescription,
  ProductTitle,
  Price1,
  Price2,
  CardReview,
} from "./styleCard";
import { Link } from "react-router-dom";
import StartReviews from "../startsss/StartReviews";
import AddCart from "../addcart/AddCart";

const Card = ({ product, AddProducts }) => {
  return (
    <CardContainer>
      <Link to={`/details/${product.id}`}>
        <img src={product.image} alt="" />
      </Link>
      <CardContent>
        <div>
          <ProductTitle to={`/details/${product.id}`}>
            {product.title}
          </ProductTitle>
          <CardReview>
            <StartReviews number={parseInt(product.rating.rate)} />
            <h1>|</h1>
            <h1>{product.rating.count} Reviews</h1>
          </CardReview>
        </div>

        <ProductDescription>{product.description}</ProductDescription>
        <div>
          <Price1>
            {parseFloat(product.price + product.price * 0.1).toFixed(2)}
          </Price1>
          <Price2>{product.price}</Price2>
        </div>
        <div
          onClick={() => {
            AddProducts(product, 1);
          }}
        >
          <AddCart />
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
