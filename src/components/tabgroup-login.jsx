
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #212016;
  border-radius: 10px;
    
  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;


const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const NoAccountLink = styled(Link)`
background-color: #transparent;
color: white;
border: none;
border-radius: 4px;
padding: 15px 20px;
font-size: 16px;
cursor: pointer
`;

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    onLogin(username);
  };

  return (
    <FormContainer>
      <h1 style={{ color: 'white' }}>Login</h1>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton onClick={handleLogin}>Login</LoginButton>
      <NoAccountLink to="/">No Account?</NoAccountLink>
    </FormContainer>
  );
}

export default LoginForm;
