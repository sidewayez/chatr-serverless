import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { FriendContext } from '../context/FriendContext'
import { RandomMessages } from '../worker/FakeData'

const QuickChatContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 2vh;
  // max-height: 20vh;
  height: auto;
`

const FriendMessages = styled.p`
  color: #ffffff;
  font-size: x-small;
  display: flex;
  margin: auto;
  padding: auto;
`

const FriendChatBubble = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  padding-left: 2em;
  margin: auto;
  max-width: 9em;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  background: Gray;
  margin-bottom: 0.5vh;
  border-radius: 10px 40px 40px;
`
const UserChatBubble = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  padding-left: 2em;
  margin: auto;
  max-width: 9em;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  background: DodgerBlue;
  margin-bottom: .5vh;
  border-radius: 10px 40px 40px;
`
const Timestamp = styled.p`
  display: block;
  font-size: 60%;
  color: #ffffff;
  max-width: 1em;
  width: 100%;
  margin: auto;
  padding: auto;
  margin-left: -1.5vw;
  position: relative;
  left: 0vw;
  margin-right: 1.5vw;
`
const Name = styled.h1``

const QuickChat = () => {
  const { quickChatFriend, setChatFriend } = useContext(FriendContext)
  const [chat, setChat] = useState([])

  function setChatContainer() {
    const container = []
    quickChatFriend.messages.forEach((message) => {
      container.push(message)
    })
    RandomMessages.forEach((message) => {
      container.push(message)
    })

    setChat(
      container.sort((a, b) => {
        const space = ' '
        return a.timestamp.slice(0, space) < b.timestamp.slice(0, space) ? 0 : 1
      })
    )
  }

  useEffect(() => {
    setChatContainer()
  }, [RandomMessages, quickChatFriend])

  return (
    <QuickChatContainer>
      {/* <Name>{quickChatFriend?.name}</Name> */}
      {chat.map((message) =>
        message.user !== 'testUser1' ? (
          <>
            <FriendChatBubble>
              <Timestamp>{message.timestamp}</Timestamp>
              <FriendMessages>{message?.message}</FriendMessages>
            </FriendChatBubble>
          </>
        ) : (
          <>
            <UserChatBubble>
              <Timestamp>{message.timestamp}</Timestamp>
              <FriendMessages>{message?.message}</FriendMessages>
            </UserChatBubble>
          </>
        )
      )}
    </QuickChatContainer>
  )
}

export default QuickChat
