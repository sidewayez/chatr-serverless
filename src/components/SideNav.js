import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Friends } from '../worker/FakeData'
import UserMenu from './UserMenu'

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
    transition: all 1s ease-out;
    // text-decoration: underline;
    text-shadow: #ffffff 0.5px 0 2.5px;
  }
`

const SideNav = ({ setOpen }) => {
  const { username, setUsername, setFriendName, setAvatar } = useContext(UserContext)

  const handleMouseOver = (name, avatar) => {
    setOpen(true)
    setFriendName(name)
    setAvatar(avatar)
  }

  const handleMouseOut = () => {
    setOpen(false)
    setFriendName('')
    setAvatar('')
  }
  return (
    <Navbar>
      <NavbarLinkContainer>
        <NavString>Chatterbox</NavString>
        <NavString>Friends</NavString>
      </NavbarLinkContainer>
      <NavbarLinkContainer>
        <NavString>Online</NavString>
        {Friends.map(({ name, id, avatar }) => (
          <NavbarLink
            key={id}
            onMouseOver={() => handleMouseOver(name, avatar)}
            onMouseOut={handleMouseOut}
          >
            {name}
          </NavbarLink>
        ))}
      </NavbarLinkContainer>
      <UserMenu username={username} setUsername={setUsername}/>
    </Navbar>
  )
}

export default SideNav
