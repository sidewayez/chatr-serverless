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
  display: grid;
  position: fixed;
  left: ${handleOffsetLeftProps}px;
  top: ${handleOffsetTopProps}px;
  flex-direction: row;
  flex-grow: 1;
  backdrop-filter: grayscale(100%);
  padding: 2em;
  margin: auto;
  margin-left: ${handleMarginLeftProps}px;
  min-height: 2em;
  max-height: 5em;
  height: auto;
  max-width: 3em;
  text-overflow: ellipsis;
  background-color: #909090;
  border-radius: 5px;
  border: solid 1px #505050;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Username = styled.p`
  color: #ffffff;
  position: absolute;
  top: 10%;
  left: 40%;
  padding: 0;
  margin: 0;
  font-size: large;
`

const Messages = styled.p`
  color: #ffffff;
  font-size: x-small;
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
export default function FriendModal({ nav }) {
  const [defaultMessage, setDefault] = useState(
    "That's alot of messages! Might want to reach out..."
  )
  const { friendName, avatar, unreadMessages, offsetLeft, offsetTop } =
    useContext(FriendContext)
  return (
    <Modal draggable left={offsetLeft} top={offsetTop} nav={nav}>
      <Avatar
        src={
          avatar?.length
            ? avatar
            : 'https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png'
        }
      />
      <Username>{friendName}</Username>
      {unreadMessages.length < 10 ? (
        <Messages>{unreadMessages[unreadMessages.length - 1]}</Messages>
      ) : (
        <Messages>{defaultMessage}</Messages>
      )}
    </Modal>
  )
}
