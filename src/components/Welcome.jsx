import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

let Welcome = () => {
    return (
        <Container>
            <Title>Aplicació per el càlcul del pressupost</Title>
            <Paragraph>Aquesta aplicació està destinada que puguis calcular quin serà el pressupost del nostre servei en base a les característiques del producte que defineixis</Paragraph>
            <Button to="/pressupost">Comença</Button>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Title = styled.div`
    width: 50%;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10rem;
`;

const Paragraph = styled.p`
    width: 30%;
    font-size: 1.4rem;
`;

const Button = styled(Link)`
    padding: 1rem 4rem;
    border: 1px solid #5beb5b;
    border-radius: 5px;
    text-decoration: none; 
    color: white;
    background-color: #36e736;

    &:hover {
        transform: scale(1.05);
    }
`;

export default Welcome
