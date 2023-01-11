import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import {
  DetailsContainer,
  DeatilsImage,
  DeatilsContent,
  ContentTitle,
  Reviews,
  DeatilsDescription,
  DeatilsPrice,
  QuantityConatiner,
  Menus,
  Number,
  Plus,
  QuantityTxt,
  QuantityContent,
  DivBtn,
} from "./styleDetails";
import AddCart from "../../components/addcart/AddCart";

import StartReviews from "../../components/startsss/StartReviews";

const Details = ({ AddProducts }) => {
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const { data } = useFetch(`https://fakestoreapi.com/products/${params.id}`);

  const AddNumber = () => {
    setQuantity(quantity + 1);
  };
  const SubNumber = () => {
    const nun = quantity === 1 ? 1 : quantity - 1;
    setQuantity(nun);
  };

  return (
    <>
      {data.ok && (
        <DetailsContainer>
          <DeatilsImage>
            <img src={data.apiData.image} alt="" />
          </DeatilsImage>
          <DeatilsContent>
            <ContentTitle>{data.apiData.title}</ContentTitle>
            <Reviews>
              <StartReviews number={parseInt(data.apiData.rating.rate)} />
              <h1>{data.apiData.rating.rate} out of 5</h1>
              <h1>|</h1>
              <h1>{data.apiData.rating.count} Reviews</h1>
            </Reviews>
            <DeatilsDescription>{data.apiData.description}</DeatilsDescription>
            <DeatilsPrice>{data.apiData.price}</DeatilsPrice>
            <QuantityConatiner>
              <QuantityTxt>Quantity</QuantityTxt>
              <QuantityContent>
                <Menus
                  onClick={() => {
                    SubNumber();
                  }}
                >
                  -
                </Menus>
                <Number>{quantity}</Number>
                <Plus
                  onClick={() => {
                    AddNumber();
                  }}
                >
                  +
                </Plus>
              </QuantityContent>
            </QuantityConatiner>
            {/* <DeatilsBtn
              onClick={() => {
                AddProducts(data.apiData, quantity);
              }}
            >
              Add to cart
            </DeatilsBtn> */}
            <DivBtn
              onClick={() => {
                AddProducts(data.apiData, quantity);
              }}
            >
              <AddCart />
            </DivBtn>
          </DeatilsContent>
        </DetailsContainer>
      )}
    </>
  );
};

export default Details;
