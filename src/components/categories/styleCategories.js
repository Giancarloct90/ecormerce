import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CategoriesContainer = styled.div`
  height: auto;
  width: 70%;
  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  /* background-color: blue; */
`;

export const Categori = styled(NavLink)`
  text-decoration: none;
  background-color: #225378;
  color: white;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  padding: 0.56rem 2.2rem;
  border-radius: 2.5rem;
  font-weight: 900;
  cursor: pointer;
  margin-top: 10vh;

  &.active {
    background-color: #fa7f08;
    /* color: #225378; */
  }
`;
