import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import DashLayoutComponent from '../components/DashLayoutComponent'
import '../App.css'
import { UserContext } from '../context/UserContext'
import { Friends } from '../worker/FakeData'

const User = styled.h1`
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 200%;
  margin-left: 2.5em;
  display: flex;
  top: -2.5%;
  margin-top: 0;
  padding: 0;
  right: 0;
  color: #ffffff;
  &:hover {
    cursor: context-menu;
  }
`

const Header = styled.h1`
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 300%;
  margin-left: 15vw;
  margin-top: 5vh;
  color: #ff6b00;
  &:hover {
    cursor: context-menu;
  }
`

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  position: relative;
  left: 2em;
  top: 2em;
  width: 2em;
  height: 2em;
  margin-top: 0;
`
const UnreadAvatar = styled.img`
  display: block;
  border-radius: 50%;
  position: relative;
  left: 2em;
  top: 2em;
  width: 2em;
  height: 2em;
  margin-top: 0;
  border: 2px solid #1a8cff;
`

const Messages = styled.p`
  display: flex;
  color: #ffffff;
  position: relative;
  top: -1vh;
  margin-left: 1em;
  font-size: x-large;
  &:hover {
    cursor: context-menu;
  }
`
const Timestamp = styled.p`
  color: #ffffff;
  position: absolute;
  margin-left: 2em;
  margin-top: -3vh;
  font-size: small;
  &:hover {
    cursor: context-menu;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: auto;
  margin-top: 12vh;
  margin-right: auto;
`

const FriendCell = styled.div`
  border: solid 3px #505050;
  background: DimGrey;
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  min-height: 7em;
  top: 3%;
  border-radius: 8px;
`

const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const { username } = useContext(UserContext)
  return (
    <DashLayoutComponent>
      <Header>Messages</Header>
      <Wrapper>
        {Friends.map(({ avatar, name, messages, unread }) => (
          <>
            <FriendCell>
              {unread > 0 ? (
                <UnreadAvatar src={avatar} />
              ) : (
                <Avatar src={avatar} />
              )}
              <User>{name}</User>
              <Timestamp>Today 5:12pm</Timestamp>
              <Messages>{messages[0].message}</Messages>
            </FriendCell>
          </>
        ))}
      </Wrapper>
    </DashLayoutComponent>
  )
}

export default Dashboard
