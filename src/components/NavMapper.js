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
  margin-left: 2em;
  text-decoration: none;
  margin-top: 0.5em;
  margin-bottom: auto;
  &:hover {
    text-shadow: #ffffff 0.5px 0 2.5px;
  }
  @media only screen and ${device.xs} {
    font-size: x-small;
  }
  @media only screen and ${device.sm} {
    font-size: small;
  }
  @media only screen and ${device.md} {
    margin-left: 1.2em;
    font-size: medium;
  }
  @media only screen and ${device.lg} {
    margin-left: 1.2em;
    font-sze: medium;
  }
  @media only screen and ${device.xlg} {
    font-size: large;
    margin-left: 2em;
  }
`

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

const Badge = styled(AiOutlineAlert)`
  color: #1a8cff;
  display: block;
  position: fixed;
  right: 28em;
  font-size: 0.5rem;
  // transform: rotateZ(90deg) rotate(0.5turn);
  @media only screen and ${device.xs} {
  }
  @media only screen and ${device.sm} {
  }
  @media only screen and ${device.md} {
    margin-left: 0.1em;
    font-size: 0.8rem;
  }
  @media only screen and ${device.lg} {
    margin-left: 0.1em;
    font-size: 0.8rem;
  }
  @media only screen and ${device.xlg} {
    font-size: 0.8rem;
    margin-left: 1.3em;
    // margin-top: -.1em;
  }
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
