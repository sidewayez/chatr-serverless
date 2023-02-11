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
export default function FriendModal() {
  const { username } = useContext(UserContext)
  return (
    <Modal>
      <Username>{username}</Username>
    </Modal>
  )
}
