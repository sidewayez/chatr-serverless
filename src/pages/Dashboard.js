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
  top: 4em;
  width: 2em;
  height: 2em;
  margin-top: 0;
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
  // margin: auto;
  margin-top: 3%;
`

const Line = styled.line`
  width: 80vw;
  color: gray;
  // height: 1vh;
`
const HeaderLine = styled.line`
  width: 80vw;
  color: gray;
  position: absolute;
  margin-top: 2em;
  margin-bottom: 1em;
  // position: flex;
  overflow: hidden;
`
const FriendCell = styled.div`
  display: inline-block;
  border: solid 1px #505050;
  width: 80vw;
  height: 20%;
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
      <Wrapper>
        <HeaderLine>
          <hr />
        </HeaderLine>
        {Friends.map(({ avatar, name, messages, unread }) => (
          <>
            <FriendCell>
              <Avatar src={avatar} />
              <User>{name}</User>
              {unread > 0 && <Unread>{unread} unread messages</Unread>}
              <Messages>{messages[0].message}</Messages>
            </FriendCell>
            {/* <Line>
              <hr />
            </Line> */}
          </>
        ))}
      </Wrapper>
    </DashLayoutComponent>
  )
}

export default Dashboard
