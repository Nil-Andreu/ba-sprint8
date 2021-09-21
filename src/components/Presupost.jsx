import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Presupost() {
  const [stateInput1, setStateInput1] = useState(false);
  const [stateInput2, setStateInput2] = useState(false);
  const [stateInput3, setStateInput3] = useState(false);
  const [pages, setPages] = useState(0);
  const [idioms, setIdioms] = useState(0);

  const [amount, setAmount] = useState(0);

  // FOR INPUT 1
  let input1Handler = () => {
    // If it is false, means that will be true when clicked
    if (stateInput1 === false) {
      AmountChanger(500);
    } else {
      AmountChanger(-500);
    }

    // And now we change the state
    setStateInput1(!stateInput1);
  };

  // FOR INPUT 2
  let input2Handler = () => {
    // If it is false, means that will be true when clicked
    if (stateInput2 === false) {
      AmountChanger(300);
    } else {
      AmountChanger(-300);
    }
    // And now we change the state
    setStateInput2(!stateInput2);
  };

  let input3Handler = () => {
    if (stateInput3 === false) {
      AmountChanger(200);
    } else {
      AmountChanger(-200);
    }
    setStateInput3(!stateInput3);
  };

  let setPagesHandler = (number) => {
    // If the new number is lower than the number of pages actual
    if (number < pages) {
      // We will need to substract the difference
      let difference = number - pages;
      setPages(difference);
    } else {
      setPages(number);
    }
  };

  let setIdiomsHandler = (number) => {
    // Same as before, if the new number is lower than the idioms that already have, we will need to substract the difference
    if (number < idioms) {
      let difference = number - idioms;
      setIdioms(difference);
    } else {
      setIdioms(number);
    }
  };

  useEffect(() => {
    AmountChanger(pages * idioms * 30);
  }, [pages, idioms]);

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
        {stateInput1 ? (
          <DashboardPages>
            <ElementPages>
              <label>
                Número de pàgines
                <input
                  type="number"
                  onChange={(event) => setPagesHandler(event.target.value)}
                />
              </label>
            </ElementPages>
            <ElementPages>
              <label>
                Número de idiomes
                <input
                  type="number"
                  checked={stateInput2}
                  onChange={(event) => setIdiomsHandler(event.target.value)}
                />
              </label>
            </ElementPages>
          </DashboardPages>
        ) : (
          ""
        )}
        <Element inputvalue="500">
          <label>
            <input
              type="checkbox"
              checked={stateInput2}
              onClick={input2Handler}
            />
            Consultoria en SEO $300
          </label>
        </Element>
        <Element inputvalue="500">
          <label>
            <input
              type="checkbox"
              checked={stateInput3}
              onClick={input3Handler}
            />
            Consultoria en SEO $200
          </label>
        </Element>
        <Quantity>{amount} $</Quantity>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Element = styled.div`
  display: flex;
  flex-direction: row;
`;

const Quantity = styled.p``;

const DashboardPages = styled.div`
  height: 10vh;
  width: 20vw;
  border: 0.5px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ElementPages = styled.div`
  display: flex;
  flex-direction: row;
`;
