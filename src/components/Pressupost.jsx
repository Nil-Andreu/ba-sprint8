import React, { useState, useEffect } from "react";
import styled from "styled-components";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";

function Pressupost() {
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

  // HANDLING THE LOCAL STORAGE
  // We only want to run this for the first time at the start
  useEffect(() => {
    // First obtain the values from the local storage and assigning them by default to use state
    let input1 = window.localStorage.getItem("input1CheckAmount");
    // In the case it is null, means that the app is being rendered for the first time
    if (input1 === null) {
      window.localStorage.setItem("input1CheckAmount", false);
    }
    // If it is false, we do not have to change nothing
    // If true, we have to change the initial value
    if (input1 == "true") {
      setInput1CheckAmount(true);
    }

    let input2 = window.localStorage.getItem("input2CheckAmount");
    if (input2 === null) {
      window.localStorage.setItem("input2CheckAmount", false);
    }
    if (input2 == "true") {
      setInput2CheckAmount(true);
    }

    let input3 = window.localStorage.getItem("input3CheckAmount");
    if (input3 === null) {
      window.localStorage.setItem("input3CheckAmount", false);
    }
    if (input3 == "true") {
      setInput3CheckAmount(true);
    }

    let pages = window.localStorage.getItem("pages");
    if (pages === null) {
      window.localStorage.setItem("pages", 0);
    }
    setPages(Number(pages));

    let languages = window.localStorage.getItem("languages");
    if (languages === null) {
      window.localStorage.setItem("languages", 0);
    }
    setLanguages(Number(languages));
  }, []);

  // HANDLING THE CHECK INPUTS
  let input1HandlerCheckAmount = () => {
    if (input1CheckAmount === true) {
      // Meaning that the button was active, and then it was clicked

      // And also when turning off, reset the value of pages and languages
      setPages(0);
      window.localStorage.setItem("pages", 0); // Store this new amount of pages in the local Storage

      setLanguages(0);
      window.localStorage.setItem("languages", 0);
    }
    window.localStorage.setItem("input1CheckAmount", !input1CheckAmount); // Note that when storing, the value is also in string

    setInput1CheckAmount(!input1CheckAmount);
  };

  let input2HandlerCheckAmount = () => {
    window.localStorage.setItem("input2CheckAmount", !input2CheckAmount);

    setInput2CheckAmount(!input2CheckAmount);
  };

  let input3HandlerCheckAmount = () => {
    // We set before the local storage of the function of changing it effectively,
    // as if it is written after will not be runned as the app will be re-rendered firstly
    window.localStorage.setItem("input3CheckAmount", !input3CheckAmount);

    // And now we run the function for computing the check amount before the whole app is re-render with usestate

    setInput3CheckAmount(!input3CheckAmount);
  };

  // MANAGING THE PERSONALIZED INPUTS
  let setPagesHandler = (number) => {
    // In the case the user writes the input
    // We will pass as a Number the number received, if we do not do that if the user puts 1, it will give you pages+"1"
    // The number that is put, is going to be the number of the pages
    let value = Number(number);

    window.localStorage.setItem("pages", value);

    setPages(value);
  };

  // This is going to be for handling the incrementing or decrementing
  let differentialPages = (number) => {
    let value = Number(pages) + number;

    window.localStorage.setItem("pages", value);

    setPages(value);
  };

  let setLanguagesHandler = (number) => {
    let value = Number(number);

    localStorage.setItem("languages", value);

    setLanguages(value);
  };

  let differentialLanguages = (number) => {
    let value = Number(languages) + number;

    // Setting this number before setLanguages, as if not the app will be re-rendered without running the after code setLanguages
    window.localStorage.setItem("languages", value);
    setLanguages(value);
  };

  // HANDLING CHANGES IN THE AMOUNT
  // For the amount in of checked
  useEffect(() => {
    // For handling the values when those inputs are active

    let input1Value = 0;
    let input2Value = 0;
    let input3Value = 0;

    if (input1CheckAmount === true) {
      input1Value = 500;
    }
    if (input2CheckAmount === true) {
      input2Value = 300;
    }
    if (input3CheckAmount === true) {
      input3Value = 200;
    }
    let checkAmountNew = input1Value + input2Value + input3Value;
    console.log(checkAmount);

    setCheckAmount(checkAmountNew);
  }, [input1CheckAmount, input2CheckAmount, input3CheckAmount]);

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
              <label>Número de pàgines </label>
              <MiniContainer>
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
              </MiniContainer>
            </ElementPages>
            <ElementPages>
              <label>Número de idiomes</label>
              <MiniContainer>
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
              </MiniContainer>
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

export default Pressupost;

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
  height: 20vh;
  width: 30vw;
  border: 0.5px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const ElementPages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MiniContainer = styled.div`
  margin-left: 10px;
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
  width: 10vw;
`;

const Quantity = styled.p``;
