import React, { useState } from "react";
import styled from "styled-components";

function Presupost() {
  const [stateInput1, setStateInput1] = useState(false);
  const [amount, setAmount] = useState(0);

  let input1Handler = () => {
    if (stateInput1 === true) {
      AmountChanger(500);
      console.log(amount);
    }

    setStateInput1(!stateInput1);
  };

  let AmountChanger = (number) => {
    setAmount(amount + number);
  };

  return (
    <Container>
      <Dashboard>
        <h1>Què es el que vols fer?</h1>
        <Element>
          <label>
            <input
              type="checkbox"
              checked={stateInput1}
              onClick={input1Handler}
            />
            Una pàgina web $500
          </label>
        </Element>
        <Element inputvalue="500">
          <label>
            <input type="checkbox" id="cbox1" value="500" /> Una pàgina web $500
          </label>
        </Element>
      </Dashboard>
    </Container>
  );
}

export default Presupost;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dashboard = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 40vw;
  height: 50vh;
`;

const Element = styled.div``;
