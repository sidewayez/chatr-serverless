import React, { useContext, useState, useRef } from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  backdrop-filter: grayscale(100%);
  padding: 2em;
  margin: 7em;
  height: 2em;
  height: auto;
  min-height: 2em;
  max-height: 3em;
  max-width: 5em;
  text-overflow: ellipsis;
  background-color: gray;
  background: transparent;
  border-radius: 5px;
  border: solid 1px #505050;
  font-family: 'Raleway';
  text-overflow: ellipsis;
  // white-space: nowrap;
  overflow: hidden;
`
const Username = styled.p`
  display: flex;
  color: #ffffff;
  position: absolute;
  top: 10%;
  left: 30%;
  padding: 0;
  margin: 0;
  font-size: x-large;
`

const Messages = styled.p`
  display: flex;
  color: #ffffff;
  top: 10%;
  text-overflow: ellipsis;
  font-size: small;
`

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  position: fixed;
  top: 5%;
  left: 2%;
  width: 2em;
  height: 2em;
`
export default function FriendModal() {
  const myRef = useRef()
  const [defaultMessage, setDefault] = useState(
    "That's alot of messages! Might want to reach out..."
  )
  const { friendName, avatar, unreadMessages } = useContext(UserContext)
  return (
    <Modal>
      <Avatar
        src={
          avatar?.length
            ? avatar
            : 'https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png'
        }
      />
      <Username>{friendName}</Username>
      {unreadMessages.length < 10 ? (
        <Messages>{unreadMessages[0]}</Messages>
      ) : (
        <Messages>{defaultMessage}</Messages>
      )}
    </Modal>
  )
}
