import React from 'react';
import styled from 'styled-components';
import TabGroup from '../components/tabgroup-reg'; 

const OuterContainer = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212016;
  width: 500px;
  height: 500px;
  background-color:#000;
`;
const SubmitButton = styled.button`
  background-color: white;
  border: none;
  color: black;
  text-decoration: underline;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 25px;
  cursor: pointer;
  border-radius: 25px;
`;


function RegistrationPage() {
  return (
    <OuterContainer>
      <CenteredContainer>
        <h1 style={{ color: 'white' }}>Registration</h1>
        <TabGroup />
        <SubmitButton href="./Login">Login</SubmitButton>
      </CenteredContainer>
    </OuterContainer>
  );
}

export default RegistrationPage;
