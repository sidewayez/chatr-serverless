import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../worker/breakpoints'
import { AiOutlineAlert } from 'react-icons/ai'
import { ChatContext } from '../context/ChatContext'

// const Badge = styled(TbMessageCircle2)`
//   margin-left: 1em;
//   color: #ffffff;
//   margin-top: -1.5em;
//   font-size: 1rem;
//   transform: rotateZ(90deg) rotate(0.5turn);
//   @media only screen and ${device.xs} {
//   }
//   @media only screen and ${device.sm} {
//   }
//   @media only screen and ${device.md} {
//     margin-left: 0.1em;
//   }
//   @media only screen and ${device.lg} {
//     margin-left: 0.1em;
//   }
//   @media only screen and ${device.xlg} {
//     font-size: 1rem;
//     margin-left: 1em;
//   }
// `

// const BadgeNumber = styled.p`
//   margin-left: 2.2em;
//   margin-top: -1.6em;
//   font-size: 0.6em;
//   width: 25%;
//   color: #ffffff;
//   text-shadow: #ffffff 0.5px 0 2.5px;
//   @media only screen and ${device.xs} {
//   }
//   @media only screen and ${device.sm} {
//   }
//   @media only screen and ${device.md} {
//     margin-left: 0.8em;
//     font-sze: 2em;
//   }
//   @media only screen and ${device.lg} {
//     margin-left: 0.8em;
//     font-sze: 2em;
//   }
//   @media only screen and ${device.xlg} {
//     margin-left: 2.2em;
//     font-size: 0.6em;
//   }
// `
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
