import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  h1 {
    color: #f3ffe2;
    font-size: 1.4rem;
  }
  svg {
    color: #f3ffe2;
    font-size: 3rem;
  }
`;

export const SearchBar = styled.div`
  position: relative;

  svg {
    color: #f3ffe2;
    position: absolute;
    top: 0.3rem;
    right: 1rem;
    font-size: 2.6rem;
  }

  input {
    border: none;
    border-radius: 1rem;
    font-size: 2rem;
    padding: 0.5rem 3rem;
    background: #225378;
    color: #f3ffe2;
    font-weight: bolder;
  }
`;

export const CartLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: black;
  h1 {
    font-size: 2.4rem;
  }
  svg {
    font-size: 4.5em;
    font-weight: 900;
  }
`;
export const NavBarContainer = styled.div`
  background: linear-gradient(45deg, #1695a3, #acf0f2);
  min-height: 10vh;
  position: fixed;
  top: 0rem;
  width: 100%;
`;
export const NavBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 0rem 10rem; */
  width: 90%;
  margin: auto;
  align-items: center;
  height: 10vh;
`;
