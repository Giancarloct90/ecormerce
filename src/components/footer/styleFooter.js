import styled from "styled-components";

export const FooterConatiner = styled.div`
  /* position: fixed; */
  /* bottom: 0rem; */
  background-color: #225378;
  min-height: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

export const Gdev = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  color: #eb7f00;
  cursor: pointer;
`;

export const FooterContent = styled.div`
  flex: 1 1 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h1 {
    font-size: 1.3rem;
    /* background-color: blue; */
  }

  svg {
    font-size: 1.7rem;
  }
`;

export const DivSocial = styled.div`
  display: flex;
  /* background-color: blue; */
  flex: 1 1 20rem;
  justify-content: center;
  gap: 10rem;

  svg {
    cursor: pointer;
    font-size: 2.5rem;
  }
`;
