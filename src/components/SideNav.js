import React, { useContext, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Friends } from '../worker/FakeData'
import UserMenu from './UserMenu'
import { TbMessageCircle2 } from 'react-icons/tb'
import FriendModal from './FriendModal'
import { device } from '../worker/breakpoints'

const Navbar = styled.nav`
  position: sticky;
  width: 10vw;
  height: auto;
  background: #404040;
  border-right: solid 1px #505050;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const NavString = styled.p`
  position: sticky;
  color: #ffffff;
  // font-size: large;
  font-family: 'Raleway';
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

const ChatterboxContainer = styled.div`
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
// @media only screen and ${device.xs} {
//   font-size: x-small;
// }
// @media only screen and ${device.sm} {
//   font-size: x-small;
// }
// @media only screen and ${device.md} {
//   font-size: medium;
// }
// @media only screen and ${device.lg} {
//   font-sze: large;
// }
// @media only screen and ${device.xlg} {
//   font-size: large;
// }

const NavbarLink = styled(Link)`
  color: #ffffff;
  // font-size: large;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  margin-left: 2em;
  text-decoration: none;
  margin-top: 0.5em;
  margin-bottom: auto;
  &:hover {
    // transform: scale(1.1);
    // translate(1em, -10%);
    // transform: translate(3em, -50%);
    // transition: all 1s ease-out;
    // text-decoration: underline;
    text-shadow: #ffffff 0.5px 0 2.5px;
  }
  @media only screen and ${device.xs} {
    font-size: x-small;
  }
  @media only screen and ${device.sm} {
    font-size: small;
  }
  @media only screen and ${device.md} {
    margin-left: 1.5em;
    font-size: medium;
  }
  @media only screen and ${device.lg} {
    margin-left: 1.5em;
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
  // margin-bottom: auto;
  font-size: 1rem;
  transform: rotateZ(90deg) rotate(0.5turn);
  @media only screen and ${device.xs} {
    // font-size: x-small;
  }
  @media only screen and ${device.sm} {
    // font-size: x-small;
  }
  @media only screen and ${device.md} {
    margin-left: 0.2em;
    // font-size: medium;
  }
  @media only screen and ${device.lg} {
    margin-left: 0.2em;
    // font-sze: medium;
  }
  @media only screen and ${device.xlg} {
    font-size: 1rem;
    // font-size: large;
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
    // font-size: x-small;
  }
  @media only screen and ${device.sm} {
    // font-size: x-small;
  }
  @media only screen and ${device.md} {
    margin-left: 0.9em;
    font-sze: 2em;
    // font-size: medium;
  }
  @media only screen and ${device.lg} {
    margin-left: 0.9em;
    font-sze: 2em;
  }
  @media only screen and ${device.xlg} {
    margin-left: 2.2em;
    font-size: 0.6em;
    // font-size: large;
  }
`
const SideNav = ({ open, setOpen }) => {
  const myRefs = useRef([])
  const {
    username,
    setUsername,
    setFriendName,
    setAvatar,
    setUnreadMessages,
    setOffsetLeft,
    setOffsetTop,
  } = useContext(UserContext)
  const getUnread = (id) => {
    let count = 0
    const messages = []
    const friend = Friends.find((friend) => friend.id === id)
    friend.messages.forEach((message) => {
      if (message.status !== 'read') {
        count += 1
        messages.push(message.message)
      }
    })
    setUnreadMessages(messages)
  }

  function handleMouseOver(id, name, avatar, i) {
    getUnread(id)
    setOpen(true)
    setFriendName(name)
    setAvatar(avatar)
    // console.log(Friends.find((friend) => friend.id === id))
    console.log(myRefs.current[i].offsetLeft)
    console.log(myRefs.current[i].offsetTop)
    setOffsetLeft(myRefs.current[i].offsetLeft)
    setOffsetTop(myRefs.current[i].offsetTop)
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
*/
  return (
    <Navbar>
      <ChatterboxContainer>
        <NavString>Friends</NavString>
      </ChatterboxContainer>
      <NavbarLinkContainer>
        <NavString>Online</NavString>
        {Friends.map(
          ({ name, id, avatar, unread, online }, i) =>
            online === '1' &&
            unread > 0 && (
              <>
                <NavbarLink
                  ref={(ref) => {
                    myRefs.current[i] = ref
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
      </NavbarLinkContainer>
      <UserMenu username={username} setUsername={setUsername} />
    </Navbar>
  )
}

export default SideNav
