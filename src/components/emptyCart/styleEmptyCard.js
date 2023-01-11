import styled from "styled-components";
import { Link } from "react-router-dom";

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
