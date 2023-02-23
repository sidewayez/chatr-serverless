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
  color: #ffffff;
  font-size: x-small;
`

const ChatBubble = styled.div`
  display: block;
  padding: 1em;
  margin: auto;
  max-width: 5em;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  background: darkslategray;
  margin-right: 4em;
//   margin-top: 2em;
  margin-bottom: 2em;
//   margin-left: 5em;
//   padding-left: 1em;
//   padding-top: 1em;
//   padding-bottom: 1em;
//   padding-right: 1em;
  border-radius: 25%;
//   text-align: right;
`

const Name = styled.h1``
const QuickChat = () => {
  const { quickChatFriend, setChatFriend } = useContext(FriendContext)
  return (
    <QuickChatContainer>
      {/* <Name>{quickChatFriend?.name}</Name> */}
      {quickChatFriend?.messages.map((message) => (
        <ChatBubble>
          <Messages>{message?.message}</Messages>
        </ChatBubble>
      ))}
    </QuickChatContainer>
  )
}

export default QuickChat
