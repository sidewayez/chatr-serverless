import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Friends } from '../worker/FakeData'
import UserMenu from './UserMenu'
import { TbMessageCircle2 } from 'react-icons/tb'
import FriendModal from './FriendModal'

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
`

const Badge = styled(TbMessageCircle2)`
  margin-left: 1em;
  color: #ffffff;
  margin-top: -1.5em;
  // margin-bottom: auto;
  font-size: 1rem;
  transform: rotateZ(90deg) rotate(0.5turn);
`

const BadgeNumber = styled.p`
  margin-left: 2.2em;
  margin-top: -1.6em;
  font-size: 0.6em;
  width: 25%;
  color: #ffffff;
  text-shadow: #ffffff 0.5px 0 2.5px;
`
const SideNav = ({ open, setOpen }) => {
  const { username, setUsername, setFriendName, setAvatar, setUnreadMessages } =
    useContext(UserContext)
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

  function handleMouseOver(id, name, avatar) {
    getUnread(id)
    setOpen(true)
    setFriendName(name)
    setAvatar(avatar)
  }

  const handleMouseOut = () => {
    setOpen(false)
    setFriendName('')
    setAvatar('')
  }

  const handleNotifCount = (unread) => {
    return unread < 10 ? unread : '+'
  }

  /*
    NavbarLink components have hoverable capabalities.
    onMouseOver and onMouseOut handle the dom events for us.  
    Friends[] is dummy data from worker/FakeData.js.
*/

  useEffect(() => {
    console.log(Friends)
  }, [])

  return (
    <Navbar>
      <NavbarLinkContainer>
        <NavString>Chatterbox</NavString>
        <NavString>Friends</NavString>
      </NavbarLinkContainer>
      <NavbarLinkContainer>
        <NavString>Online</NavString>
        {Friends.map(
          ({ name, id, avatar, unread, online }) =>
            online === '1' &&
            unread > 0 && (
              <>
                <NavbarLink
                  key={id}
                  onMouseOver={() => handleMouseOver(id, name, avatar)}
                  onMouseOut={handleMouseOut}
                >
                  {name}
                </NavbarLink>
                {/* {open && <FriendModal id={id} />} */}
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
