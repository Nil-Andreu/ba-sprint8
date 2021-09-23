import React, { useState, useEffect } from "react";
import styled from "styled-components";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";

function Presupost() {
  // For handling all the amounts
  const [bigAmount, setBigAmount] = useState(0)
  const [checkAmount, setCheckAmount] = useState(0)
  const [personalizedAmount, setPersonalizedAmount] = useState(0)

  // For handling the state of the inputs for checkAmounts
  const [input1CheckAmount, setInput1CheckAmount] = useState(false)
  const [input2CheckAmount, setInput2CheckAmount] = useState(false)
  const [input3CheckAmount, setInput3CheckAmount] = useState(false)

  // For handling the pages and languages values
  const [pages, setPages] = useState(0)
  const [languages, setLanguages] = useState(0)

  // HANDLING THE CHECK INPUTS
  let input1HandlerCheckAmount = () => {
    if (input1CheckAmount === false) {
      checkAmountHandler(500)
    } else {
      checkAmountHandler(-500)

      // And also when turning off, reset the value of pages and languages
      setPages(0)
      setLanguages(0)
    }

    setInput1CheckAmount(!input1CheckAmount)
  }

  let input2HandlerCheckAmount = () => {
    if (input2CheckAmount === false) {
      checkAmountHandler(300)
    } else {
      checkAmountHandler(-300)
    }

    setInput2CheckAmount(!input2CheckAmount)
  }

  let input3HandlerCheckAmount = () => {
    if (input3CheckAmount === false) {
      checkAmountHandler(200)
    } else {
      checkAmountHandler(-200)
    }

    setInput3CheckAmount(!input3CheckAmount)
  }

  // MANAGING THE PERSONALIZED INPUTS
  let setPagesHandler = (number) => {
    setPages(pages+number)
  }

  let setLanguagesHandler = (number) => {
    setLanguages(languages+number)
  }

  // HANDLING CHANGES IN THE AMOUNT
  // For the amount in of checked
  let checkAmountHandler = (number) => {
    setCheckAmount(checkAmount + number)
  }

  // For the amount of personalized
  useEffect(() => {
    let new_amount = pages * languages * 30
    setPersonalizedAmount(new_amount)
  }, [pages, languages])

  // For the general amount, we will summ both before
  useEffect(() => {
    setBigAmount(checkAmount+personalizedAmount)
  }, [checkAmount, personalizedAmount])

  return (
    <Container>
      <Dashboard>
        <h1>Què es el que vols fer?</h1>
        <Element>
          <label>
            <input
              type="checkbox"
              checked={input1CheckAmount}
              onClick={input1HandlerCheckAmount}
            />
            Una pàgina web $500
          </label>
        </Element>
        {input1CheckAmount ? (
          <DashboardPages>
            <ElementPages>
              <label>
                Número de pàgines
                <Button1 onClick={() => {
                  setPagesHandler(1)
                }} />
                <Input
                  type="text"
                  value={pages}
                  onChange={(event) => setPagesHandler(event.target.value)}
                />
                <Button2 onClick={() => {
                  setPagesHandler(-1)
                }} />
              </label>
            </ElementPages>
            <ElementPages>
              <label>
                Número de idiomes
                <Button1 onClick={() => {
                  setLanguagesHandler(1)
                }} />
                <Input
                  type="text"
                  value={languages}
                  onChange={(event) => setLanguagesHandler(event.target.value)}
                />
                <Button2 onClick={() => {
                  setLanguagesHandler(-1)
                }} />
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
              checked={input2CheckAmount}
              onClick={input2HandlerCheckAmount}
            />
            Consultoria en SEO $300
          </label>
        </Element>
        <Element inputvalue="500">
          <label>
            <input
              type="checkbox"
              checked={input3CheckAmount}
              onClick={input3HandlerCheckAmount}
            />
            Consultoria en SEO $200
          </label>
        </Element>
        <Quantity>{bigAmount} $</Quantity>
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
  justify-content: center;
  align-items: center;
`;

const Element = styled.div`
  display: flex;
  flex-direction: row;
`;

// The button for applying the minus
const Button1 = styled.button`
  height: 20px;
  width: 20px;
  background-image: url(${plus});
  background-color: transparent;
  background-size: contain;
  border-radius: 4px;
`;

// Button for applying the plus
const Button2 = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 4px;
  background-image: url(${minus});
  background-color: transparent;
  background-size: contain;
`;

const Input = styled.input`
  width: 30%;
`;

const Quantity = styled.p``;
