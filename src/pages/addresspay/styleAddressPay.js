import styled from "styled-components";

export const ContentAddress = styled.div`
  display: flex;
  gap: 10rem;
`;

export const ContainerAddress = styled.div`
  margin-top: 5vh;
  padding: 3rem;
  font-size: 1.2rem;
  h1 {
    margin: 1rem 0rem;
    font-size: 3rem;
  }
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* background-color: red; */
  width: 25%;
  border: 0.1rem solid black;
  padding: 2rem;
  border-radius: 0.6rem;
  box-shadow: 0.3rem 0.6rem 0.3rem rgba(0, 0, 0, 0.2),
    0.3rem 0.9rem 0.3rem rgba(0, 0, 0, 0.2);
`;
export const PaymentInfo = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 25%;
  /* background-color: red; */
  border: 0.1rem solid black;
  padding: 2rem;
  border-radius: 0.6rem;
  box-shadow: 0.3rem 0.6rem 0.3rem rgba(0, 0, 0, 0.2),
    0.3rem 0.9rem 0.3rem rgba(0, 0, 0, 0.2);
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.4rem;
  }
  input[type="text"] {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
  }
  input[type="email"] {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
  }
  input[type="number"] {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea {
    height: 6rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    font-size: 1.7rem;
  }
  select {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
  }
`;

export const DivSecuirty = styled.div`
  display: flex;
  max-width: 100%;
  /* background-color: blue; */
  gap: 2rem;
  input {
    width: 10rem;
  }
`;

export const BtnPlaceOrder = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 0.8rem 2rem;
  font-size: 1.7rem;
  font-weight: 900;
  letter-spacing: 0.2rem;
  color: black;
  cursor: pointer;
  margin: 3rem 0rem;
  background-color: #fcdc14;
`;
