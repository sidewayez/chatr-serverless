import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { FriendContext } from '../context/FriendContext'

function handleOffsetLeftProps(props) {
  if (props.nav === 'conditional') {
    return (props) => props.left + 350
  }
  if (props.nav === 'side') {
    return (props) => props.left + 10
  }
}

function handleOffsetTopProps(props) {
  if (props.nav === 'conditional') {
    return (props) => props.top + 300
  }
  if (props.nav === 'side') {
    return (props) => props.top + 65
  }
}

function handleMarginLeftProps(props) {
  if (props.nav === 'conditional') {
    return (props) => props.left + 350
  }
  if (props.nav === 'side') {
    return (props) => props.left + 15
  }
}

const Modal = styled.div`
  position: fixed;
  left: ${handleOffsetLeftProps}px;
  top: ${handleOffsetTopProps}px;
  flex-direction: column;
  flex-grow: 1;
  backdrop-filter: grayscale(100%);
  padding: 3vw;
  margin-left: ${handleMarginLeftProps}px;
  min-height: 1em;
  max-height: 5em;
  height: auto;
  width: auto;
  max-width: 5em;
  background-color: #909090;
  border-radius: 5px;
  border: solid 1px #505050;
  // text-overflow: ellipsis;
  overflow: hidden;
`
const Username = styled.p`
  color: #ffffff;
  position: absolute;
  top: 8%;
  left: 30%;
  padding: 0;
  margin: 0;
  font-size: x-large;
`
const BioTray = styled.div`
  position: relative;
  padding: auto;
  flex-grow: 1;
  // left: -2vw;
  min-width: 5vw;
  max-width: 25vw;
  padding-right: 2vw;
  // padding-left; 2vw;
  width: 5vw;
  margin-left: -2vw;
  border: solid 1px #ffffff;
  border-radius: 6px;
  overflowX: hidden;
`
const Bio = styled.p`
  color: #ffffff;
  font-size: small;
  display: flex;
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const Avatar = styled.img`
  border-radius: 50%;
  position: fixed;
  top: 5%;
  left: 4%;
  width: 2em;
  height: 2em;
  padding-bottom: 0;
`

const UnreadAvatar = styled.img`
  border-radius: 50%;
  position: fixed;
  top: 5%;
  left: 4%;
  width: 2em;
  height: 2em;
  padding-bottom: 0;
  border: 2px solid #1a8cff;
`
export default function FriendModal({ nav }) {
  const [defaultMessage, setDefault] = useState(
    "That's alot of messages! Might want to reach out..."
  )
  const { friendName, avatar, unreadMessages, bio, offsetLeft, offsetTop } =
    useContext(FriendContext)
  return (
    <Modal draggable left={offsetLeft} top={offsetTop} nav={nav}>
      {unreadMessages.length > 0 ? (
        <UnreadAvatar
          src={
            avatar?.length
              ? avatar
              : 'https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png'
          }
        />
      ) : (
        <Avatar
          src={
            avatar?.length
              ? avatar
              : 'https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png'
          }
        />
      )}
      <Username>{friendName}</Username>
      {/* <BioTray> */}
        <Bio>{bio}</Bio>
      {/* </BioTray> */}
    </Modal>
  )
}
