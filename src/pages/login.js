import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { device } from '../worker/breakpoints'

const Wrapper = styled.div`
  position: absolute;
  font-family: 'Raleway';
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #3d3d3d;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  margin: auto;
  flex-grow: 0;
  @media only screen and ${device.xs} {
    top: 21%;
    bottom: 21%;
    left: 12%;
    right: 12%;
    border-radius: 9%;
  }
  @media only screen and ${device.sm} {
    top: 21%;
    bottom: 21%;
    left: 22%;
    right: 22%;
    border-radius: 22%;
  }
  @media only screen and ${device.md} {
    top: 18%;
    bottom: 18%;
    left: 25%;
    right: 25%;
    border-radius: 22%;
  }
  @media only screen and ${device.lg} {
    top: 15%;
    bottom: 15%;
    left: 25%;
    right: 25%;
    border-radius: 22%;
  }
  @media only screen and ${device.xlg} {
    top: 15%;
    bottom: 15%;
    left: 25%;
    right: 25%;
    border-radius: 18%;
  }
`

const Header = styled.h1`
  text-align: center;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 13vw;
  @media only screen and ${device.xs} {
    font-size: 15vw;
  }
  @media only screen and ${device.sm} {
    font-size: 10vw;
  }
  @media only screen and ${device.md} {
    font-size: 10vw;
  }
  @media only screen and ${device.lg} {
    font-size: 10vw;
  }
  @media only screen and ${device.xlg} {
    font-size: 10vw;
  }
  // line-height: 125%;
  letter-spacing: -0.02em;
  color: #1a8cff;
  text-shadow: #346dc2 1px 0 8px;
  &:hover {
    cursor: context-menu;
  }
`

const UsernameInput = styled.input`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  width: 69%;
  min-height: 0.1em;
  margin-left: auto;
  margin-right: auto;
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
`
const PasswordInput = styled.input`
  ${(props) =>
    props.type === 'password' &&
    `
  font-family: 'Raleway';
  margin-left: auto;
  margin-right: auto;
  font-style: normal;
  font-weight: 300;
  width: 69%;
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
`}
`

const Button = styled.button`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  height: 10%;
  border-radius: 10px;
  margin-top: 0.5em;
  background: #1a8cff;
  border: none;
  &:hover {
    box-shadow: 0px 2px 7px #1a8cff;
  }
  :not(:disabled) {
    cursor: pointer;
  }
`

const Links = styled.a`
  width: 25%;
  left: 618px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 50%;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  color: #1a8cff;
  margin-left: auto;
  margin-right: auto;
  @media only screen and ${device.xs} {
    width: 30%
  }
`

export default function Login() {
  const navigate = useNavigate()
  const { createUser } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="App">
      <Wrapper>
        <Header>chatr</Header>
        <UsernameInput
          placeholder="Username"
          required={true}
          onChange={({ target }) => setUsername(target.value)}
          value={username}
          type="text"
        />
        <PasswordInput
          placeholder="Password"
          required={true}
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
        <Button
          onClick={() => {
            createUser(username)
            navigate('/dashboard')
          }}
        >
          login
        </Button>
        <br />
        <Links>Forgot Password?</Links>
        <Links>Need an Account?</Links>
      </Wrapper>
    </div>
  )
}
