import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartSummary = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0rem;
  background-color: #fafafa;
  /* background-color: blue; */
  padding: 1rem 2rem;
  border-radius: 2rem;
`;
export const CartImage = styled.div`
  flex: 0 1 10rem;
  img {
    width: 10rem;
  }
`;
export const CartContent = styled.div`
  flex: 1 1 10rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CartTitle = styled.h1`
  font-size: 1.7rem;
`;

export const OrderProductTotal = styled.div`
  h1 {
    font-size: 2rem;
    color: red;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  margin-bottom: 2rem;
`;

export const CartSubTotal = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  /* justify-content: end;
   */
  align-items: end;
  gap: 0.7rem;
  h1 {
    font-size: 1.7rem;
  }
`;

export const BtnProceed = styled(Link)`
  border: none;
  background-color: orange;
  padding: 0.8rem 3rem;
  font-size: 1.5rem;
  border-radius: 2rem;
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const InStock = styled.h1`
  color: green;
`;

export const Carth1 = styled.h1`
  font-size: 1.3rem;
`;

export const BtnDelete = styled.button`
  border: none;
  border-radius: 1rem;
  background-color: red;
  width: max-content;
  padding: 0.3rem 2rem;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
`;

export const CartTitle2 = styled.h1`
  font-size: 2rem;
`;

export const CartEmpty = styled.h1`
  font-size: 2.5rem;
  color: green;
`;
export const EmptyContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15rem;
  justify-content: center;
  gap: 2rem;
`;
export const BtnEmpty = styled(Link)`
  width: max-content;
  background-color: orange;
  border: none;
  border-radius: 2rem;
  font-size: 2rem;
  font-weight: 900;
  padding: 0.7rem 3rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
