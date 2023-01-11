import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin: 5rem 0rem;
`;

export const DeatilsImage = styled.div`
  display: flex;
  flex: 1 3 80rem;
  justify-content: center;
  /* background-color: blue; */
  img {
    width: 35rem;
  }
`;

export const DeatilsContent = styled.div`
  display: flex;
  flex: 1 1 100rem;
  /* background-color: blue; */
  flex-direction: column;
  gap: 1rem;
`;

export const ContentTitle = styled.h1`
  font-size: 3rem;
  color: #225378;
`;

export const Reviews = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DeatilsDescription = styled.h1`
  width: 65%;
  font-size: 1.7rem;
  /* background-color: blue; */
`;

export const DeatilsBtn = styled.button`
  width: 30%;
  border: none;
  background-color: #fcdc14;
  padding: 0.5rem 2rem;
  color: black;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  border-radius: 2rem;
  cursor: pointer;
`;

export const DeatilsPrice = styled.h1`
  font-size: 3rem;
  color: red;
`;

export const QuantityConatiner = styled.div`
  display: flex;
  width: max-content;
  font-size: 1.7rem;
  font-weight: 900;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;
  margin: 1rem 0rem;
  flex-direction: column;
`;
export const Menus = styled.div`
  padding: 0.1rem 2rem;
  border: 0.1rem solid black;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  cursor: pointer;
  background-color: #e0e0e0;
`;
export const Number = styled.div`
  padding: 0.1rem 2rem;
  border: 0.1rem solid black;
  background-color: #e0e0e0;
`;
export const Plus = styled.div`
  background-color: #e0e0e0;
  padding: 0.1rem 2rem;
  border: 0.1rem solid black;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  cursor: pointer;
`;

export const QuantityTxt = styled.h1`
  font-size: 1.2rem;
`;

export const QuantityContent = styled.div`
  display: flex;
`;

export const DivBtn = styled.div`
  width: 30%;
`;
