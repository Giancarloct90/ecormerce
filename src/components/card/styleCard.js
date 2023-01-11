import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  background-color: white;
  /* background-color: blue; */
  padding: 2rem;
  border-radius: 1rem;
  height: 45rem;
  img {
    height: 20rem;
    width: 100%;
    /* object-fit: cover; */
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;
  gap: 1.5rem;
  /* background-color: blue; */
`;

export const BtnCard = styled.button`
  background-color: #fcdc14;
  border: none;
  border-radius: 1rem;
  padding: 0.7rem 2rem;
  font-size: 1.6rem;
  font-weight: 900;
  cursor: pointer;
`;

export const ProductDescription = styled.h1`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  letter-spacing: 0.1rem;
`;

export const ProductTitle = styled(Link)`
  text-decoration: none;
  color: #225378;
  font-size: 1.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const Price1 = styled.h1`
  text-decoration: line-through;
`;
export const Price2 = styled.h1`
  color: red;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
`;

export const CardReview = styled.div`
  display: flex;
  gap: 0.5rem;
`;
