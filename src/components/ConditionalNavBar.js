import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import { ChatContext } from '../context/ChatContext'
import { FriendContext } from '../context/FriendContext'
import { device } from '../worker/breakpoints'
import { Friends } from '../worker/FakeData'
import { TbMessageCircle2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import UserMenu from './UserMenu'
import FriendModal from './FriendModal'

const ConditionalNav = styled.div`
  border: solid 3px #505050;
  background: #404040;
  position: fixed;
  flex-direction: column;
  right: 7vw;
  top: 32vh;
  width: 5vw;
  height: 25vh;
  padding: 5em;
  border-radius: 8px;
  @media only screen and ${device.xs} {
    display: none;
  }
  @media only screen and ${device.sm} {
    display: flex;
    width: 4em;
    top: 37vh;
    right: 4vw;
  }
  @media only screen and ${device.md} {
    display: ${(props) => handleProps(props)};
    width: 4em;
    top: 37vh;
    right: 4vw;
  }
  @media only screen and ${device.lg} {
    display: ${(props) => handleProps(props)};
    width: 4em;
    top: 37vh;
    right: 5vw;
  }
  @media only screen and ${device.xlg} {
    display: ${(props) => handleProps(props)};
    width: 4em;
    top: 37vh;
    right: 5vw;
  }
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

function handleProps(props) {
  return props.open === true ? `flex` : `none`
}

const ConditionalNavBar = ({}) => {
  const [open, setOpen] = useState(false)
  const { handleNotifCount } = useContext(FriendContext)
  const { handleChatStateChange, openChat } = useContext(ChatContext)
  const { setFriendName, setAvatar, setOffsetLeft, setOffsetTop, getUnread } =
    useContext(FriendContext)
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

  const friendRefs = useRef([])

  return (
    <>
      <ConditionalNav open={openChat}>
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
                  onClick={handleChatStateChange}
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
        {open && <FriendModal />}
        {/* <UserMenu username={username} setUsername={setUsername} /> */}
      </ConditionalNav>
    </>
  )
}

export default ConditionalNavBar
