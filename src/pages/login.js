import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 10.75%;
  bottom: 17%;
  background: #3d3d3d;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 102px;
`;

const Header = styled.header`
  text-align: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  // font-size: 96px;
  font-size: 12vw;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: #1a8cff;
`;

const Input = styled.input`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  width: 75%;
  min-height: 0.1em;
  margin-bottom: 1em;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  color: #d9d9d9;
  text-align: center;
  ::placeholder {
    text-align: center;
    color: #d9d9d9;
  }
  type: "email";
`;

const Button = styled.button`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  width: 70%;
  height: 10%;
  border-radius: 10px;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  background: #1a8cff;
  box-shadow: 0px 2px 7px #1a8cff;
  border: none;
  :not(:disabled) {
    cursor: pointer;
  }
`;

const Links = styled.a`
  width: 205px;
  left: 618px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    border-bottom: solid 1px #1a8cff;
  }
  color: #1a8cff;
`;

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Header>chatr</Header>
        <Input placeholder="Username" required></Input>
        <Input placeholder="Password" required></Input>
        <Button
          onClick={() => {
            navigate('/dashboard')
          }}
        >
          login
        </Button>
        <br />
        <Links>Forgot Password?</Links>
        <br />
        <Links>Need an Account?</Links>
      </Wrapper>
    </>
  );
}
