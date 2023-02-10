import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
import { UserContext } from '../context/UserContext'
import { Friends } from '../worker/FakeData'
const Navbar = styled.nav`
  position: absolute;
  width: 10em;
  height: 100%;
  background: #404040;
  border-right: solid 1px #505050;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const UserMenu = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 10em;
  flex-direction: row;
  margin-top: 91.5vh;
  justify-content: space-between;
  border: solid 1px #505050;
  border-bottom: none;
`
const User = styled.p`
  color: #ffffff;
  font-size: large;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  margin-left: 0.5em;
`

const NavString = styled.p`
  color: #ffffff;
  font-size: large;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  margin-bottom: 0;
  margin-left: 1em;
  margin-top: 0.3em;
  &:hover {
    cursor: context-menu;
  }
`

const Logout = styled.button`
  height: 4.3em;
  width: 3em;
  background: #1a8cff;
  border: none;
  color: white;
  :not(:disabled) {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 2px 7px #1a8cff;
  }
`

const NavbarLinkContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  width: 3em;
`

const NavbarLink = styled(Link)`
  color: #ffffff;
  font-size: large;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  margin-left: 2em;
  text-decoration: none;
  margin-top: auto;
  &:hover {
    // transform: scale(1.1);
    // translate(1em, -10%);
    // transform: translate(3em, -50%);
    // transition: all 1s ease-out;
    // text-decoration: underline;
    text-shadow: #ffffff 0.5px 0 2.5px;
  }
`

const SideNav = () => {
  const navigate = useNavigate()
  const { username, setUsername } = useContext(UserContext)
  return (
    <Navbar>
      <NavbarLinkContainer>
        <NavString>Chatterbox</NavString>
        <NavString>Friends</NavString>
      </NavbarLinkContainer>
      <NavbarLinkContainer>
        <NavString>Online</NavString>
        {Friends.map(({ name, id }) => (
          <NavbarLink
            key={id}
            onMouseOver={() => {
              // console.log(id);
            }}
          >
            {name}
          </NavbarLink>
        ))}
      </NavbarLinkContainer>
      <UserMenu>
        <User>{username}</User>
        <Logout>
          <HiOutlineLogout
            onClick={() => {
              setUsername('')
              navigate('/')
            }}
          />
        </Logout>
      </UserMenu>
    </Navbar>
  )
}

export default SideNav
