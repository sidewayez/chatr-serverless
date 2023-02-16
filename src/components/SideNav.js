import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Friends } from '../worker/FakeData'
import UserMenu from './UserMenu'
import { TbMessageCircle2 } from 'react-icons/tb'
import { device } from '../worker/breakpoints'
import NavMapper from './NavMapper'

const Navbar = styled.nav`
  position: sticky;
  width: 10vw;
  height: auto;
  background: #404040;
  border-right: solid 1px #505050;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media only screen and ${device.xs} {
    display: none;
  }
  @media only screen and ${device.sm} {
    display: none;
  }
  @media only screen and ${device.md} {
    display: flex;
  }
  @media only screen and ${device.lg} {
    display: flex;
  }
  @media only screen and ${device.xlg} {
    display: flex;
  }
`

const NavString = styled.p`
  position: sticky;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 0;
  margin-left: 1em;
  margin-top: 0.3em;
  &:hover {
    cursor: context-menu;
  }
  @media only screen and ${device.xs} {
    font-size: x-small;
  }
  @media only screen and ${device.sm} {
    font-size: small;
  }
  @media only screen and ${device.md} {
    margin-left: 0.5em;
    font-size: medium;
  }
  @media only screen and ${device.lg} {
    margin-left: 0.5em;
    font-sze: medium;
  }
  @media only screen and ${device.xlg} {
    font-size: large;
  }
`

const ChatterContainer = styled.div`
  margin-top: 1.5em;
  display: flex;
  flex-direction: column;
  width: 3em;
  position: fixed;
`
const NavbarLinkContainer = styled.div`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  width: 3em;
  position: fixed;
`

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
const SideNav = ({ open, setOpen }) => {
  /*
    friendRefs is an array holding refs to elements in the side navbar.
    I use the setOffsetLeft and setOffsetTop context functions to 
    obtain the location of the "friend" in the side navbar to 
    dynamically set the top and left positioning of a modal.
    This modal displays when you hover over said "friend".
  */
  const friendRefs = useRef([])
  const {
    username,
    setUsername,
    setFriendName,
    setAvatar,
    setOffsetLeft,
    setOffsetTop,
    getUnread,
  } = useContext(UserContext)

  /*
    handleMouseOver and handleMouseOut funtsions handle the
    hover events for displaying the modal and 
    setting required data for modal.
   */

  function handleMouseOver(id, name, avatar, i) {
    getUnread(id, Friends)
    setOpen(true)
    setFriendName(name)
    setAvatar(avatar)
    setOffsetLeft(friendRefs.current[i].offsetLeft)
    setOffsetTop(friendRefs.current[i].offsetTop)
  }

  const handleMouseOut = () => {
    setOpen(false)
    setFriendName('')
    setAvatar('')
    setOffsetLeft(0)
    setOffsetTop(0)
  }

  const handleNotifCount = (unread) => {
    return unread < 10 ? unread : '+'
  }

  /*
    NavbarLink components have hoverable capabalities.
    onMouseOver and onMouseOut handle the dom events for us.  
    Friends[] is dummy data from worker/FakeData.js.

    Refs are set when Friends array is mapped into the nav.
    The elements displayed are friends with unread messages
    BadgeNumber displays number of unread messages up to 9.
    After, default message displays and a '+' replaces the number.

    Will be using NavMapper in the future to reduce length of this file.
*/
  return (
    <Navbar>
      <ChatterContainer>
        <NavString>Friends</NavString>
      </ChatterContainer>
      <NavbarLinkContainer>
        <NavString>Online</NavString>
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
        {/* <NavMapper
          friends={Friends}
          friendRefs={friendRefs}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
          handleNotifCount={handleNotifCount}
        /> */}
      </NavbarLinkContainer>
      <UserMenu username={username} setUsername={setUsername} />
    </Navbar>
  )
}

export default SideNav
