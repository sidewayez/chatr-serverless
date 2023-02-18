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

const ConditionalNav = styled.section`
  margin: 0;
  border: solid 3px #505050;
  background: #404040;
  position: fixed;
  flex-direction: column;
  right: 7vw;
  top: 32vh;
  height: 30vh;
  // width: 500%;
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
  display: flex;
  font-style: normal;
  font-weight: 700;
  margin-left: 0.5em;
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
  display: flex;
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
  dislay: flex;
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

const Inbox = styled.h1`
  display: flex;
  position: absolute;
  margin-top: 0;
  padding: 0;
  margin: 0;
  top: 5%;
  left: 5%;
  font-size: 200%;
  width: 100%;
  padding-bottom: 0px;
  padding-top: 0px;
  margin-top: 0;
  margin-bottom: 0;
  // border-bottom: solid 1px dimgrey;
  color: #ffffff;
  cursor: context-menu;
`
const HeaderDiv = styled.div`
  display: flex;
  margin-left: -125%;
  margin-top: -125%; 
  width: 500%;
  background-color: DimGrey;
  padding-top: 0vh;
  padding 5em;
  padding-bottom: 0vh;
  height: auto;
  max-width: 4em;
  max-height: 1em;
  border-radius: 5px;
`

const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500%;
  // background: #696969;
  background-opacity: 20%;
  padding: 4em;
  max-width: 10em;
  padding-bottom: 4.4em;
  padding-right: 0;
  margin-left: -125%;
  border-radius: 5px;
`
function handleProps(props) {
  return props.open === true ? `flex` : `none`
}

const ConditionalNavBar = () => {
  const { handleNotifCount } = useContext(FriendContext)
  const {
    handleChatStateChange,
    openChat,
    openMiniModal,
    setOpenMini,
    setNav,
    nav,
  } = useContext(ChatContext)
  const { setFriendName, setAvatar, setOffsetLeft, setOffsetTop, getUnread } =
    useContext(FriendContext)

  function handleMouseOver(id, name, avatar, i) {
    setNav('conditional')
    getUnread(id, Friends)
    setOpenMini(true)
    setFriendName(name)
    setAvatar(avatar)
    setOffsetLeft(friendRefs.current[i].offsetLeft)
    setOffsetTop(friendRefs.current[i].offsetTop)
  }

  const handleMouseOut = () => {
    setOpenMini(false)
    setOpenMini(false)
    setFriendName('')
    setAvatar('')
    setOffsetLeft(0)
    setOffsetTop(0)
  }

  const friendRefs = useRef([])

  return (
    <>
      {openMiniModal && <FriendModal nav={nav} />}
      <ConditionalNav open={openChat}>
        <HeaderDiv>
          <Inbox>Inbox</Inbox>
        </HeaderDiv>
        <FriendContainer>
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
        </FriendContainer>
        {/* <UserMenu username={username} setUsername={setUsername} /> */}
      </ConditionalNav>
    </>
  )
}

export default ConditionalNavBar
