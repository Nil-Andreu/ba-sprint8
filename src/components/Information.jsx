import React from "react";
import styled from "styled-components";

// Pass the object that we need to this functional component
let Information = ({ informationHandler, information, text }) => {
  // Will render the component to click the information
  // When the component is clicked, we will render another component with the layer and text
  return (
    <Container>
      <InfomationButton onClick={informationHandler}>i</InfomationButton>
      {information ? (
        <div>
          <Layer onClick={informationHandler} />
            <Text>{text}</Text>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 30px;
  height: 20px;
  margin-left: 10px;
`;

const InfomationButton = styled.button`
  width: auto;
  height: auto;
  color: white;
  background-color: #36e736;
  border: 1px solid white;
  border-radius: 5px;
`;

const Layer = styled.div`
  position: fixed;
  z-index: 2;
  background-color: black;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0.7;
`;



const Text = styled.div`
position: fixed;
left:35vw;
right: 35vw;
  margin: auto;
  z-index: 3;
  width: 30vw;
  bottom: 12rem;
  height: 10vh;
  opacity: 1;
  background-color: white;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export default Information;
