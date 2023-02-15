import React, { useRef } from 'react'
import styled from 'styled-components'
import { Friends } from '../worker/FakeData'
import { device } from '../worker/breakpoints'
import { TbMessageCircle2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

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

const Badge = styled(TbMessageCircle2)`
  margin-left: 1em;
  color: #ffffff;
  margin-top: -1.5em;
  font-size: 1rem;
  transform: rotateZ(90deg) rotate(0.5turn);
  @media only screen and ${device.xs} {
  }
  @media only screen and ${device.sm} {
  }
  @media only screen and ${device.md} {
    margin-left: 0.1em;
  }
  @media only screen and ${device.lg} {
    margin-left: 0.1em;
  }
  @media only screen and ${device.xlg} {
    font-size: 1rem;
    margin-left: 1em;
  }
`

const BadgeNumber = styled.p`
  margin-left: 2.2em;
  margin-top: -1.6em;
  font-size: 0.6em;
  width: 25%;
  color: #ffffff;
  text-shadow: #ffffff 0.5px 0 2.5px;
  @media only screen and ${device.xs} {
  }
  @media only screen and ${device.sm} {
  }
  @media only screen and ${device.md} {
    margin-left: 0.8em;
    font-sze: 2em;
  }
  @media only screen and ${device.lg} {
    margin-left: 0.8em;
    font-sze: 2em;
  }
  @media only screen and ${device.xlg} {
    margin-left: 2.2em;
    font-size: 0.6em;
  }
`

const NavMapper = ({ handleMouseOver, handleMouseOut, handleNotifCount }) => {
  const friendRefs = useRef([])

  return (
    <>
      {Friends.map(
        ({ name, id, avatar, unread, online }, i) =>
          online === '1' &&
          unread > 0 && (
            <>
              <NavbarLink
                ref={(ref) => {
                  friendRefs.current[i] = ref
                }}
                key={id}
                onMouseOver={() => handleMouseOver(id, name, avatar, i)}
                onMouseOut={handleMouseOut}
              >
                {name}
              </NavbarLink>
              {unread > 0 && <Badge />}
              {unread > 0 && (
                <BadgeNumber>{handleNotifCount(unread)}</BadgeNumber>
              )}
            </>
          )
      )}
    </>
  )
}

export default NavMapper
