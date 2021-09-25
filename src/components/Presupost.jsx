import React, { useState, useEffect } from "react";
import styled from "styled-components";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";


function Presupost() {
  // First obtain the values from the local storage
  let input1 = false
  let input2 = false
  let input3 = false
  let initialPages = 0
  let initialLanguages = 0

  // For handling the changes in checkamount
  let input1Checking = false
  let input2Checking = false
  let input3Checking = false

  // For handling all the amounts
  const [bigAmount, setBigAmount] = useState(0);
  const [checkAmount, setCheckAmount] = useState(0);
  const [personalizedAmount, setPersonalizedAmount] = useState(0);

  // For handling the state of the inputs for checkAmounts
  const [input1CheckAmount, setInput1CheckAmount] = useState(false);
  const [input2CheckAmount, setInput2CheckAmount] = useState(false);
  const [input3CheckAmount, setInput3CheckAmount] = useState(false);

  // For handling the pages and languages values
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

  // USEEFFECT TO GET VALUES FROM LOCAL STORAGE
  useEffect(() => {
    // As we want to save the fields clicked by the user
    input1 = window.localStorage.getItem("input1CheckAmount");
    if (input1 === null) { // In the case there is not input 1
      input1 = false
    } 
    setInput1CheckAmount(input1)

    input2 = window.localStorage.getItem("input2CheckAmount");
    if (input2===null) {
      input2 = false
    }
    setInput2CheckAmount(input2)

    input3 = window.localStorage.getItem("input3CheckAmount");
    if (input3===null) {
      input3 = false
    }
    setInput3CheckAmount(input3)

    initialPages = window.localStorage.getItem("pages");
    if (initialPages === null) {
      initialPages = 0
    }
    setPages(initialPages)

    initialLanguages = window.localStorage.getItem("languages");
    if (initialLanguages === null) {
      initialLanguages = 0
    }
    setLanguages(initialLanguages)
  }, []);

  // HANDLING THE CHECK INPUTS
  let input1HandlerCheckAmount = () => {
    if (input1CheckAmount === true) { // Meaning that the button was active, and then it was clicked

      // And also when turning off, reset the value of pages and languages
      setPages(0);
      window.localStorage.setItem("pages", 0);

      setLanguages(0);
      window.localStorage.setItem("languages", 0);

    }
    window.localStorage.setItem("input1CheckAmount", !input1CheckAmount);

    checkAmountHandler(!input1CheckAmount, input2CheckAmount, input3CheckAmount)

    setInput1CheckAmount(!input1CheckAmount);
  };

  let input2HandlerCheckAmount = () => {

    window.localStorage.setItem("input2CheckAmount", !input2CheckAmount);

    checkAmountHandler(input1CheckAmount, !input2CheckAmount, input3CheckAmount)

    setInput2CheckAmount(!input2CheckAmount);
  };

  let input3HandlerCheckAmount = () => {

    // We set before the local storage of the function of changing it effectively, 
    // as if it is written after will not be runned as the app will be re-rendered firstly
    window.localStorage.setItem("input3CheckAmount", !input3CheckAmount);

    // And now we run the function for computing the check amount before the whole app is re-render with usestate
    checkAmountHandler(input1CheckAmount, input2CheckAmount, !input3CheckAmount)

    setInput3CheckAmount(!input3CheckAmount);
  };

  // MANAGING THE PERSONALIZED INPUTS
  let setPagesHandler = (number) => { // In the case the user writes the input
    // We will pass as a Number the number received, if we do not do that if the user puts 1, it will give you pages+"1"
    // The number that is put, is going to be the number of the pages
    let value = Number(number)

    window.localStorage.setItem("pages", value);

    setPages(value);
  };

  // This is going to be for handling the incrementing or decrementing
  let differentialPages = (number) => {
    let value = Number(pages) + number

    window.localStorage.setItem("pages", value);

    setPages(value);
  };

  let setLanguagesHandler = (number) => {
    let value = Number(number)

    localStorage.setItem("languages", value);

    setLanguages(value);
  };

  let differentialLanguages = (number) => {
    let value = Number(languages) + number

    // Setting this number before setLanguages, as if not the app will be re-rendered without running the after code setLanguages
    window.localStorage.setItem("languages", value);
    setLanguages(value);
  };

  // HANDLING CHANGES IN THE AMOUNT
  // For the amount in of checked
  let checkAmountHandler = (input1Checking, input2Checking, input3Checking) => {
    // For handling the values when those inputs are active
    let input1Value = 0;
    let input2Value = 0
    let input3Value = 0

    console.log(input1Checking)

    if (input1Checking === true) {
      input1Value = 500
    }
    if (input2Checking === true) {
      input2Value = 300
    }
    if (input3Checking === true) {
      input3Value = 200
    }
    let checkAmountNew = input1Value + input2Value + input3Value
    console.log(checkAmount)

    setCheckAmount(checkAmountNew)
  }


  // For the amount of personalized
  useEffect(() => {
    let new_amount = pages * languages * 30;
    setPersonalizedAmount(new_amount);
  }, [pages, languages]);

  // For the general amount, we will summ both before
  useEffect(() => {
    setBigAmount(checkAmount + personalizedAmount);
  }, [checkAmount, personalizedAmount]);

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
                <Button1
                  onClick={() => {
                    differentialPages(1);
                  }}
                />
                <Input
                  type="text"
                  value={pages}
                  onChange={(event) => setPagesHandler(event.target.value)}
                />
                <Button2
                  onClick={() => {
                    differentialPages(-1);
                  }}
                />
              </label>
            </ElementPages>
            <ElementPages>
              <label>
                Número de idiomes
                <Button1
                  onClick={() => {
                    differentialLanguages(1);
                  }}
                />
                <Input
                  type="text"
                  value={languages}
                  onChange={(event) => setLanguagesHandler(event.target.value)}
                />
                <Button2
                  onClick={() => {
                    differentialLanguages(-1);
                  }}
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
