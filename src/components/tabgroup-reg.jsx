import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const TabButton = styled.button`
  font-size: 15px;
  padding: 10px;
  cursor: pointer;
  opacity: ${({ active }) => (active === 'true' ? '1' : '0.6')}; 
  background-color: ${({ active }) => (active === 'true' ? 'white' : '#212016')}; 
  color: ${({ active }) => (active === 'true' ? '#212016' : 'white')}; 
  border: 0;
  outline: 0;
  text-align: left;
  width: 150px;

  border-top-right-radius: 25px;
  ${({ active }) =>
    active === 'true' &&
    `
    border-bottom: 2px solid black;
    border-top-right-radius: 25px;
  `}
  @media (max-width: 600px) {
    font-size: 13px; 
    width: 120px; 
  }

  @media (max-width: 400px) {
    font-size: 11px; 
    width: 80px; 
    
    
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start; 
  height: 50px;
  width: 100%; 
  margin-top:10px;
  color:#fff;

  @media (max-width: 600px) {
    justify-content: center;
    justify-content: flex-start; 
    
  }

  @media (max-width: 400px) {
    height: auto;
    justify-content: center;
    justify-content: flex-start;
    margin-left: 60px; 
  }
`;


const FormContainer = styled.div`
  margin: 0px;
  color: white;
  background-color:#212016;
  text-align: center;
  width: 100%;
  height:350px;
  border-radius: 0px 10px 10px 10px;
  div {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-right: 10px;
    margin-left:70px;
    background-color: transparent;
    padding-bottom: 5px;
    text-align: left;
  }

  @media (max-width: 600px) {
    height: auto;
    padding: 20px 10px;
  }

  @media (max-width: 400px) {
    height: 300px;
    width: 300px; 
    padding: 20px 5px;
  }
`;
const InputField = styled.input`
  padding: 8px;
  border: none; 
  border-bottom: 2px solid white; 
  width: 70%;
  background-color: transparent;
`;


const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin:10px;
`;

const LoginText = styled.span`
  padding: 10px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
  margin: 10px 20px; 
`;


const types = [
    {
        title: 'Information',
        inputs: [
          { label: 'Name', type: 'text' },
          { label: 'Age', type: 'number' },
          { label: 'Password', type: 'password' }, 
        ],
      },
      
  {
    title: 'Gmail & Phone ',
    inputs: [
      { label: 'Phone Number', type: 'number' },
      { label: 'Verification Code', type: 'number' },
      { label: 'Gmail', type: 'tel' },
      { label: 'Verification Code', type: 'number' },
    ],
  },
  {
    title: "Face Verification",
    inputs: [
        {
            image: "",
            type: "image"
        }
    ]
}

  
];
function TabGroup() {
    const [active, setActive] = useState(types[0]);
  
    const handleSubmit = () => {
      const currentIndex = types.indexOf(active);
      if (currentIndex < types.length - 1) {
        setActive(types[currentIndex + 1]);
      }
    };
  

  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <TabButton
            key={type.title}
            active={active === type ? 'true' : 'false'} 
            onClick={() => setActive(type)}
          >
            {type.title}
          </TabButton>
        ))}
      </ButtonGroup>
      <FormContainer>
      {active.inputs.map((input, index) => (
  <div key={`${input.label}-${index}`}>
    <label>{input.label}</label>
    <InputField type={input.type} placeholder={`Enter your ${input.label}`} />
  </div>
))}

        {active === types[types.length - 1] ? (
         <Link to="/login">
         <LoginText>Upload Photo</LoginText>
       </Link>
       
        ) : (
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        )}
      </FormContainer>
    </>
  );
}

export default TabGroup;
