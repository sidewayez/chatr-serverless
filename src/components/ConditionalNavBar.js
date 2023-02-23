import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import { ChatContext } from '../context/ChatContext'
import { device } from '../worker/breakpoints'
import { Friends } from '../worker/FakeData'
import { ImCross } from 'react-icons/im'
import { FaArrowLeft } from 'react-icons/fa'
import FriendModal from './FriendModal'
import NavMapper from './NavMapper'
import QuickChat from './QuickChat'
import { FriendContext } from '../context/FriendContext'

const ConditionalNav = styled.section`
  margin: 0;
  border: solid 3px #505050;
  background: #404040;
  position: fixed;
  flex-direction: column;
  right: 7vw;
  top: 32vh;
  height: 30vh;
  padding: 5em;
  border-radius: 8px;
  flex-grow: 1;
  @media only screen and ${device.xs} {
    display: none;
  }
  @media only screen and ${device.sm} {
    display: flex;
    width: 4em;
    top: 37vh;
    right: 3vw;
  }
  @media only screen and ${device.md} {
    display: ${(props) => handleProps(props)};
    width: 4em;
    top: 37vh;
    right: 3vw;
  }
`

function handleProps(props) {
  return props.open === true ? `flex` : `none`
}

const User = styled.h1`
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 200%;
  margin-left: 1.5em;
  margin-top: -5em;
  display: flex;
  top: -5vh;
  margin-top: 0;
  padding: 0;
  right: 0;
  color: #ffffff;
  cursor: pointer;
  font-size: 180%;
  margin-bottom: 0;
`

const Messages = styled.p`
  display: flex;
  color: #ffffff;
  position: relative;
  top: -5vh;
  margin: 0;
  padding: 0;
  font-size: small;
  margin-right: 2em;
`

const Header = styled.h1`
  display: flex;
  position: absolute;
  margin-top: 1vh;
  padding: 0;
  margin: 0;
  top: 25%;
  left: 5%;
  font-size: 200%;
  width: 100%;
  padding-bottom: 0px;
  padding-top: 0px;
  margin-top: 0;
  margin-bottom: 0;
  color: #ffffff;
`
const BackArrow = styled(FaArrowLeft)`
  display: flex;
  position: absolute;
  top: 33%;
  right: 5%;
  font-size: 25px;
  cursor: pointer;
  color: #ffffff;
  @media only screen and ${device.sm} {
    display: flex;
  }
  @media only screen and ${device.md} {
    display: none;
  }
`
const ChatBackArrow = styled(FaArrowLeft)`
  display: flex;
  position: absolute;
  top: 33%;
  right: 20%;
  font-size: 25px;
  cursor: pointer;
  color: #ffffff;
  @media only screen and ${device.sm} {
    display: none;
  }
  @media only screen and ${device.md} {
    display: flex;
  }
`
const CloseInbox = styled(ImCross)`
  display: flex;
  position: absolute;
  top: 33%;
  right: 5%;
  font-size: 25px;
  cursor: pointer;
  color: #ffffff;
  @media only screen and ${device.sm} {
    display: none;
  }
  @media only screen and ${device.md} {
    display: flex;
  }
`

const HeaderDiv = styled.div`
  display: flex;
  position: sticky;
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
  position: relative;
  flex-direction: column;
  margin: 0 auto;
  max-height: 50em;
  min-width: 14em;
  width: 100%;
  margin-left: -125%;
  margin-bottom: -125%;
  border-radius: 5px;
  overflow: scroll;
  scroll-behavior: smooth;
`

const FriendCell = styled.div`
  width: 100%;
  position: relative;
  padding-top: 1em;
  border-bottom: solid 1px #696969;
  padding-left: 1em;
  margin: 0 auto;
  max-height: auto;
  margin-bottom: 0;
`

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  position: relative;
  left: 0.1em;
  width: 2em;
  height: 2em;
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
`

const Timestamp = styled.p`
  color: #ffffff;
  position: relative;
  font-style: italic;
  margin: 0;
  padding: 0;
  top: -5vh;
  font-size: x-small;
  left: 0.5vw;
  text-transform: italics;
  opacity: 80%;
`

const ConditionalNavBar = () => {
  const {
    nav,
    openChat,
    inboxView,
    friendView,
    quickChatView,
    openMiniModal,
    setInboxView,
    setFriendView,
    setQuickChatView,
    handleChatStateChange,
  } = useContext(ChatContext)

  const { quickChatFriend, findFriend } = useContext(FriendContext)

  const friendRefs = useRef([])

  const handleClose = () => {
    setInboxView(false)
    setQuickChatView(false)
    setFriendView(true)
    handleChatStateChange()
  }

  const handleBackArrow = () => {
    setInboxView(!inboxView)
    setFriendView(!friendView)
    setQuickChatView(false)
    handleChatStateChange()
  }

  const handleFriendClick = (id, friends) => {
    findFriend(id, friends)
    setQuickChatView(true)
    setInboxView(false)
    setFriendView(!friendView)
  }

  const handleChatBackArrow = () => {
    setQuickChatView(false)
    setInboxView(true)
  }

  return (
    <>
      {openMiniModal && <FriendModal nav={nav} />}
      <ConditionalNav open={openChat}>
        <HeaderDiv>
          {quickChatView ? (
            <Header>{quickChatFriend.name}</Header>
          ) : inboxView ? (
            <Header>Inbox</Header>
          ) : (
            <Header>Friends</Header>
          )}
          {quickChatView && <ChatBackArrow onClick={handleChatBackArrow} />}
          <CloseInbox onClick={handleClose} />
          <BackArrow onClick={handleBackArrow} />
        </HeaderDiv>
        <FriendContainer>
          {quickChatView && <QuickChat />}
          {inboxView &&
            Friends.map(
              ({ name, id, avatar, unread, messages, online }, i) =>
                online === '1' &&
                unread > 0 && (
                  <FriendCell
                    ref={(ref) => {
                      friendRefs.current[i] = ref
                    }}
                    key={id}
                    onClick={() => handleFriendClick(id, Friends)}
                  >
                    <Avatar src={avatar} />
                    <User>{name}</User>
                    <Timestamp>
                      {messages[messages.length - 1].timestamp}
                    </Timestamp>
                    <Messages>{messages[messages.length - 1].message}</Messages>
                  </FriendCell>
                )
            )}
          {friendView && (
            <NavMapper friends={Friends} friendRefs={friendRefs} />
          )}
        </FriendContainer>
        {/* <UserMenu username={username} setUsername={setUsername} /> */}
      </ConditionalNav>
    </>
  )
}

export default ConditionalNavBar
