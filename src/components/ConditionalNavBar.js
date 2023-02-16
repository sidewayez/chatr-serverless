import React, { useContext } from 'react'
import styled from 'styled-components'
import { ChatContext } from '../context/ChatContext'
import { device } from '../worker/breakpoints'
import { Friends } from '../worker/FakeData'
import UserMenu from './UserMenu'

const ConditionalNav = styled.div`
  border: solid 3px #505050;
  background: #404040;
  position: fixed;
  right: 7vw;
  top: 32vh;
  width: 5vw;
  height: 25vh;
  padding: 5em;
  border-radius: 8px;
  @media only screen and ${device.xs} {
    display: none;
  }
  @media only screen and ${device.sm} {
    display: flex;
    width: 4em;
    top: 37vh;
    right: 4vw;
  }
  @media only screen and ${device.md} {
    display: ${(props) => handleProps(props)};
    width: 4em;
    top: 37vh;
    right: 4vw;
  }
  @media only screen and ${device.lg} {
    display: ${(props) => handleProps(props)};
    width: 4em;
    top: 37vh;
    right: 5vw;
  }
  @media only screen and ${device.xlg} {
    display: ${(props) => handleProps(props)};
    width: 4em;
    top: 37vh;
    right: 5vw;
  }
`

function handleProps(props) {
  return props.open === true ? `flex` : `none`
}

const ConditionalNavBar = ({ username, setUsername }) => {
  const { openChat } = useContext(ChatContext)

  return (
    <>
      {/* {openChat && ( */}
      <ConditionalNav open={openChat}>
        {/* <UserMenu username={username} setUsername={setUsername} /> */}
      </ConditionalNav>
      {/* )} */}
    </>
  )
}

export default ConditionalNavBar
