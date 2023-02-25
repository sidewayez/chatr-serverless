import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { FriendContext } from '../context/FriendContext'

const QuickChatContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const FriendMessages = styled.p`
  color: #ffffff;
  font-size: x-small;
  display: flex;
  margin: auto;
  padding: auto;
  // margin-bottom: 0;
  // padding-bottom: 0;
  // margin-bottom: -1em;
`

const ChatBubble = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  padding-left: 2em;
  margin: auto;
  max-width: 9em;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  background: darkslategray;
  // margin-right: 4em;
  margin-bottom: 2em;
  border-radius: 10px 40px 40px 10px;
`
const Timestamp = styled.p`
  display: block;
  font-size: 60%;
  color: #ffffff;
  max-width: 1em;
  width: 100%;

  // opacity: 70%;
  // margin: 0 auto;
  // padding: 0;
  // margin-top: -1.2em;
  margin: auto;
  padding: auto;
  margin-left: -1vw;
  position: relative;
  left: 0vw;
  // left: 3.5vw;
  // margin-top: 3vh;
  // margin-right: 1vw;
  // padding-left: 1vw;
  // margin-left: 1vw;
  // margin-right: 2vw;
  // position: absolute;
  // padding-top: 0em;
  // padding: 0;
  // position: absolute;
  // margin-top: 1vh;
`
const Name = styled.h1``
const QuickChat = () => {
  const { quickChatFriend, setChatFriend } = useContext(FriendContext)
  return (
    <QuickChatContainer>
      {/* <Name>{quickChatFriend?.name}</Name> */}
      {quickChatFriend?.messages.map((message) => (
        <>
          <ChatBubble>
            <Timestamp>{message.timestamp}</Timestamp>
            <FriendMessages>{message?.message}</FriendMessages>
          </ChatBubble>
        </>
      ))}
    </QuickChatContainer>
  )
}

export default QuickChat
