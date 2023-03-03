import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { FriendContext } from '../context/FriendContext'
import { RandomMessages } from '../worker/FakeData'
// import { ImCross } from 'react-icons/im'
import { ImCross } from 'react-icons/im'

const QuickChatContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  // position: absolute;
  // bottom: 20px;
  // flex-direction: column-reverse;
  margin: 0 auto;
  padding-top: 2vh;
  // max-height: 20vh;
  height: auto;
  inset: 0% 0% 10%;
  // offset-position: top 25%;
  // margin-bottom: 20vh;
`

const FriendMessages = styled.p`
  color: WhiteSmoke;
  font-size: x-small;
  display: flex;
  margin: auto;
  padding: auto;
`
const UserMessages = styled.p`
  color: WhiteSmoke;
  font-size: x-small;
  display: flex;
  margin: auto;
  padding: auto;
  inset-inline-start: 0% 0% 10%;
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
  background: #1a8cff;
  // background: LightCoral;
  margin-bottom: 0.5vh;
  border-radius: 10px 40px 40px;
  // offset-: 10px 30px;
`
const UserChatBubble = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  padding-right: 2em;
  margin: auto;
  max-width: 9em;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  background: #ff6b00;
  // background: PaleTurquoise;
  margin-bottom: 0.5vh;
  border-radius: 40px 40px 10px;
  offset-position: bottom;
`
const Timestamp = styled.p`
  display: block;
  font-size: 60%;
  color: WhiteSmoke;
  max-width: 1em;
  width: 100%;
  margin: auto;
  padding: auto;
  margin-left: -1.5vw;
  position: relative;
  left: 0vw;
  margin-right: 1.5vw;
`
const UserTimestamp = styled.p`
  display: block;
  font-size: 60%;
  color: WhiteSmoke;
  max-width: 1em;
  width: 100%;
  margin: auto;
  padding: auto;
  margin-left: 0.5vw;
  position: relative;
  // left: 0vw;
  margin-right: -1vw;
`
const Name = styled.h1``

const InputContainer = styled.div`
  border-radius: 5px;
  border: 1px solid;
  padding: 5px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  // color: #ffffff
  &:hover {
    box-shadow: 1px 0 8px black;
  }
  position: sticky;
  top: 0px;
  background-color: dimgrey;
`

const Input = styled.input.attrs({
  placeholderTextColor: 'white',
})`
// display: block;
// position: absolute;
border-radius: 4px;
font-size: x-small;
width: 15em;
flex: 1 0;
min-width: 15em;
min-height; 5em;
padding-left: 5px;
background-color: transparent;
border: 0;
color: #ffffff;
&:focus {
  outline: none;
}
`

const CloseInput = styled.div`
  flex: 0 0;
  // color: #ffffff;
  // right: 0;
  // margin-right: auto;
  // margin-left: auto;
  // width: 20px;
  // height: 20px;
  // font-size: 25px;
  // padding-left: 5px;
  }
`

const QuickChat = () => {
  const { quickChatFriend, setChatFriend } = useContext(FriendContext)
  const [chat, setChat] = useState([])
  const [height, setHeight] = useState(0)
  const [inputValue, setInputValue] = useState('')

  function setChatContainer() {
    const container = []
    quickChatFriend.messages.forEach((message) => {
      container.push(message)
    })
    RandomMessages.forEach((message) => {
      container.push(message)
    })

    setChat(
      //   container.sort((a, b) => {
      //     const space = ' '
      //     return a.timestamp.slice(0, space) < b.timestamp.slice(0, space) ? 0 : 1
      //   })
      // )
      container
    )
  }

  useEffect(() => {
    setChatContainer()
  }, [RandomMessages, quickChatFriend])

  return (
    <QuickChatContainer>
      {/* <Name>{quickChatFriend?.name}</Name> */}
      <InputContainer>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={'Chat away'}
        />
        <CloseInput>
          <ImCross
            onClick={() => setInputValue('')}
            width="20px"
            height="20px"
            color="white"
            cursor="pointer"
          />
        </CloseInput>
      </InputContainer>
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
              <UserMessages>{message?.message}</UserMessages>
              <UserTimestamp>{message.timestamp}</UserTimestamp>
            </UserChatBubble>
          </>
        )
      )}
    </QuickChatContainer>
  )
}

export default QuickChat
