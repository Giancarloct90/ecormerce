import {
  ContainerAddress,
  PersonalInfo,
  PaymentInfo,
  ContentAddress,
  DivInput,
  DivSecuirty,
  BtnPlaceOrder,
} from "./styleAddressPay";

import Deptos from "./DeptosAndMuni";
import { useState } from "react";
import EmptyCart from "../../components/emptyCart/EmptyCart";

const AddressPay = ({ shoppingCart }) => {
  const [deptosHook, setDeptosHook] = useState(Deptos);
  const [deptoSelected, setDeptoSelected] = useState("");

  return (
    <ContainerAddress>
      {shoppingCart.items.length === 0 && <EmptyCart />}

      {shoppingCart.items.length > 0 && (
        <>
          <h1>CheckOut</h1>
          <ContentAddress>
            <PersonalInfo>
              <h2>Shipping Infomation</h2>
              <DivInput>
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder="John Doe" />
              </DivInput>
              <DivInput>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="johndoe@gmail.com" />
              </DivInput>
              <DivInput>
                <label>Address</label>
                <textarea type="text" />
              </DivInput>
              <DivInput>
                <label htmlFor="">Departamento</label>

                <select
                  id="pet-select"
                  onChange={(e) => {
                    if (e.target.value === "xx") {
                      setDeptoSelected("");
                      return;
                    }
                    const DeptoSe = Deptos.filter((depto) => {
                      return depto.value === e.target.value;
                    });
                    setDeptoSelected(DeptoSe);
                  }}
                >
                  <option value="xx">Please choose a Deptos</option>
                  {deptosHook.map((depto) => (
                    <option key={depto.value} value={depto.value}>
                      {depto.label}
                    </option>
                  ))}
                </select>
              </DivInput>

              <DivInput>
                <label htmlFor="">Municipio</label>

                <select id="pet-select" disabled={deptoSelected ? false : true}>
                  <option value="">Please choose a Municipio</option>
                  {deptoSelected &&
                    deptoSelected[0].municipios.map((depto) => (
                      <option key={depto.value} value={depto.value}>
                        {depto.label}
                      </option>
                    ))}
                </select>
              </DivInput>
            </PersonalInfo>

            <PaymentInfo>
              <h2>Payment Information</h2>
              <DivInput>
                <label htmlFor="paymentName">Name Card</label>
                <input type="text" id="paymentName" placeholder="Name Card" />
              </DivInput>
              <DivInput>
                <label htmlFor="paymentCard">Card Number</label>
                <input
                  type="number"
                  id="paymentCard"
                  placeholder="Card Number"
                />
              </DivInput>
              <DivSecuirty>
                <DivInput>
                  <label htmlFor="paymentDate">Expire Date</label>
                  <input
                    type="text"
                    id="paymentDate"
                    placeholder="Expire Date"
                  />
                </DivInput>
                <DivInput>
                  <label htmlFor="paymentCode">CVC</label>
                  <input type="number" id="paymentCode" placeholder="CVC" />
                </DivInput>
              </DivSecuirty>
              <BtnPlaceOrder>PLACE ORDER</BtnPlaceOrder>
            </PaymentInfo>
          </ContentAddress>
        </>
      )}
    </ContainerAddress>
  );
};

export default AddressPay;
