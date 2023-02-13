import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import DashLayoutComponent from '../components/DashLayoutComponent'
import '../App.css'
import { UserContext } from '../context/UserContext'
import { Friends } from '../worker/FakeData'

const User = styled.h1`
  position: relative;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 200%;
  margin-left: 2.5em;
  display: flex;
  top: 0.2em;
  margin-top: 0;
  // left: 3em;
  padding: 0;
  // margin: 0;
  right: 0;
  color: #ffffff;
  &:hover {
    cursor: context-menu;
  }
`

const Header = styled.h1`
  position: absolute;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 300%;
  margin-left: 17%;
  margin-top: 1%;
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
  top: 2.5em;
  width: 2em;
  height: 2em;
  margin-top: 0;
`
const UnreadAvatar = styled.img`
  display: block;
  border-radius: 50%;
  position: relative;
  left: 2em;
  top: 2.5em;
  width: 2em;
  height: 2em;
  margin-top: 0;
  border: 2px solid #1a8cff;
`

const Messages = styled.p`
  display: flex;
  color: #ffffff;
  position: relative;
  margin-top: 0;
  margin-left: 1em;
  // margin: auto;
  // top: 5%;
  text-overflow: ellipsis;
  font-size: x-large;
  &:hover {
    cursor: context-menu;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  margin-top: 6%;
`

const HeaderLine = styled.hr`
  width: 80vw;
  color: #808080;
  position: absolute;
  display: flex;
  margin-top: 5em;
  left: 11.6em;
  overflow: hidden;
`
const FriendCell = styled.div`
  border-bottom: solid 1px #505050;
  border-right: solid 1px #505050;
  border-left: solid 1px #505050;
  width: 80vw;
  height: 100%;
  margin: auto;
  padding: auto;
  top: 3%;
`

const Unread = styled.p`
  position: absolute;
  display: flex;
  margin: 0;
  padding: 0;
  left: 21%;
  margin-top: -1.2em;
  font-size: small;
  // top: 10%;
  // top:
  // margin-top: ;
  color: #1a8cff;
`
const Dashboard = () => {
  const { username } = useContext(UserContext)
  return (
    <DashLayoutComponent>
      <Header>Messages</Header>
      <HeaderLine />
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
              <Messages>{messages[0].message}</Messages>
              <Messages>Today 5:12pm</Messages>
            </FriendCell>
          </>
        ))}
      </Wrapper>
    </DashLayoutComponent>
  )
}

export default Dashboard
