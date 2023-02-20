import React from 'react'
import styled from 'styled-components'
import { Friends } from '../worker/FakeData'
import { device } from '../worker/breakpoints'

const User = styled.h1`
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 200%;
  margin-left: 2.1em;
  display: block;
  margin-top: -4vh;
  // padding-top: 0;
  padding: 0;
  right: 0;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
  font-size: 180%;
  @media only screen and ${device.xs} {
    margin-top: -3vh;
  }
  @media only screen and ${device.sm} {
    margin-top: -3vh;
  }
  @media only screen and ${device.md} {
    margin-top: -4vh;
  }
`

const Avatar = styled.img`
  display: block;
  // margin-top: -5vh;
  border-radius: 50%;
  position: relative;
  left: 1.3em;
  top: 1em;
  width: 2em;
  height: 2em;
  margin-top: 0;
  padding-top: 0;
`
const UnreadAvatar = styled.img`
display: block;
// margin-top: -5vh;
border-radius: 50%;
position: relative;
left: 1.3em;
top: 1em;
width: 2em;
height: 2em;
margin-top: 0;
padding-top: 0;
  border: 2px solid #1a8cff;
  // padding-top: 0;
`

const Messages = styled.p`
  display: flex;
  color: #ffffff;
  position: relative;
  top: -1vh;
  margin-left: 1em;
  font-size: 100%;
  margin-right: 1em;
`
const Timestamp = styled.p`
  color: #ffffff;
  position: absolute;
  margin-left: 2.3em;
  margin-top: -3vh;
  font-size: small;
  font-style: italic;
  opacity: 80%;
  @media only screen and ${device.xs} {
    margin-left: 1.5em;
  }
  @media only screen and ${device.sm} {
    margin-left: 1.5em;
  }
  @media only screen and ${device.md} {
    margin-left: 2.3em;
  }
  @media only screen and ${device.lg} {
    margin-left: 2.3em;
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
  // min-height: 6em;
  height: auto;
  top: 3%;
  border-radius: 8px;
  // margin-top: .2vh;
  padding-top: 0;
  @media only screen and ${device.xs} {
    max-width: 100vw;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and ${device.sm} {
    font-size: large;
    width: 50vw;
    margin-left: 4vw;
    max-width: 50vw;
    margin-right: none;
  }
  @media only screen and ${device.md} {
    font-size: x-large;
    width: 48vw;
    margin-left: 4vw;
    max-width: 50vw;
    margin-right: none;
  }
  @media only screen and ${device.lg} {
    font-size: x-large;
    width: 49vw;
    margin-left: 4vw;
    max-width: 50vw;
    margin-right: none;
  }
  @media only screen and ${device.xlg} {
    // font-size: x-large;
    width: 50vw;
    margin-left: 4vw;
    max-width: 50vw;
    margin-right: none;
  }
`
const MainFeed = () => {
  return (
    <>
      <Wrapper>
        {Friends.map(({ avatar, name, messages, unread, timestamp }) => (
          <>
            <FriendCell>
              {unread > 0 ? (
                <UnreadAvatar src={avatar} />
              ) : (
                <Avatar src={avatar} />
              )}
              <User>{name}</User>
              <Timestamp>
                Today {messages[messages.length - 1].timestamp}
              </Timestamp>
              <Messages>{messages[messages.length - 1].message}</Messages>
            </FriendCell>
          </>
        ))}
      </Wrapper>
    </>
  )
}

export default MainFeed
