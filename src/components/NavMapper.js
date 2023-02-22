import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../worker/breakpoints'
import { AiOutlineAlert } from 'react-icons/ai'
import { ChatContext } from '../context/ChatContext'

const NavbarLink = styled(Link)`
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
  margin-top: 0.5em;
  margin-bottom: auto;
  font-size: large;
  margin-left: 2em;
  &:hover {
    text-shadow: #ffffff 0.5px 0 2.5px;
  }
`

const Badge = styled(AiOutlineAlert)`
  color: #1a8cff;
  display: block;
  position: fixed;
  font-size: 0.8rem;
  margin-left: 2em;
  right: 213px;
`

const NavMapper = ({
  friends,
  friendRefs,
  handleMouseOver,
  handleMouseOut,
  handleNotifCount,
}) => {
  const { handleChatStateChange, setInboxView } = useContext(ChatContext)

  const handleClick = () => {
    setInboxView(true)
    handleChatStateChange()
  }

  return friends.map(
    ({ name, id, avatar, unread, online, bio }, i) =>
      online === '1' && (
        <>
          {unread > 0 ? (
            <NavbarLink
              ref={(ref) => {
                friendRefs.current[i] = ref
              }}
              key={id}
              // onMouseOver={() => handleMouseOver(id, name, avatar, bio, i)}
              // onMouseOut={handleMouseOut}
              onClick={handleClick}
            >
              {unread > 0 && <Badge />}
              {name}
            </NavbarLink>
          ) : (
            <NavbarLink
              ref={(ref) => {
                friendRefs.current[i] = ref
              }}
              key={id}
              // onMouseOver={() => handleMouseOver(id, name, avatar, bio, i)}
              // onMouseOut={handleMouseOut}
              onClick={() => {}}
            >
              {unread > 0 && <Badge />}
              {name}
            </NavbarLink>
          )}
        </>
      )
  )
}

export default NavMapper
