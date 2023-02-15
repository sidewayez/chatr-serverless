import React from 'react'
import styled from 'styled-components'
import { Friends } from '../worker/FakeData'
import { device } from '../worker/breakpoints'

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
  @media only screen and ${device.xs} {
    font-size 150%;
  }
  @media only screen and ${device.sm} {
    font-size: 200%;
  }
  @media only screen and ${device.md} {
    font-size: 200%;
  }
  @media only screen and ${device.lg} {
    font-size: 200%;
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
  padding-right: 0.5em;
  @media only screen and ${device.xs} {
    font-size: small;
  }
  @media only screen and ${device.sm} {
    font-size: large;
  }
  @media only screen and ${device.md} {
    font-size: x-large;
  }
  @media only screen and ${device.lg} {
    font-size: x-large;
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
  width: 50vw;
  margin-left: 4vw;
  max-width: 50vw;
  min-height: 7em;
  top: 3%;
  border-radius: 8px;
`
const MainFeed = () => {
  return (
    <>
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
    </>
  )
}

export default MainFeed
