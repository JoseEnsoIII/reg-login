import React from "react";
import styled from "styled-components";
import TabGroup from "../components/tabgroup-login";

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
  width: 300px;
  height: 100%;
  background-color: #000;
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
        <TabGroup />
      </CenteredContainer>
    </OuterContainer>
  );
}

export default RegistrationPage;
