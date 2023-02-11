import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
const Modal = styled.div`
  backdrop-filter: grayscale(100%);
  padding: 3em;
  margin: 7em;
  max-height: 2em;
  background-color: gray;
  background: transparent;
  border-radius: 5px;
  border: solid 1px #505050;
`
const Username = styled.p`
  color: #ffffff;
`

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  position: fixed;
  top: 5%;
  left: 5%;
  width: 2em;
  height: 2em;
`
export default function FriendModal() {
  const { friendName, avatar } = useContext(UserContext)
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
    </Modal>
  )
}
