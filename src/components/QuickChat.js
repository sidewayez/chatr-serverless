import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { FriendContext } from '../context/FriendContext'

const QuickChatContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Messages = styled.p`
`

const Name = styled.h1``
const QuickChat = () => {
  const { quickChatFriend, setChatFriend } = useContext(FriendContext)
  return (
    <QuickChatContainer>
      <Name>{quickChatFriend.name}</Name>
      {quickChatFriend.messages.map((message) => (
        <Messages>{message.message}</Messages>
      ))}
    </QuickChatContainer>
  )
}

export default QuickChat
