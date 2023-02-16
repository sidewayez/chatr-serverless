import React from 'react'
import styled from 'styled-components'
import { device } from '../worker/breakpoints'
import { Friends } from '../worker/FakeData'
import UserMenu from './UserMenu'

const ConditionalNav = styled.div`
  border: solid 3px #505050;
  background: SlateGray;
  position: fixed;
  right: 7vw;
  top: 32vh;
  margin-left: auto;
  margin-right: auto;
  width: 5vw;
  height: 25vh;
  padding: 5em;
  border-radius: 8px;
  @media only screen and ${device.xs} {
    display: flex;
    right: 6vw;
    width: 0.3em;
    top: 32vh;
  }
  @media only screen and ${device.sm} {
    display: flex;
    width: 4em;
    top: 37vh;
    right: 4vw;
  }
  @media only screen and ${device.md} {
    display: none;
  }
  @media only screen and ${device.lg} {
  }
  @media only screen and ${device.xlg} {
  }
`

const ConditionalNavBar = ({ username, setUsername }) => {
  return (
    <ConditionalNav>
      {/* <UserMenu username={username} setUsername={setUsername} /> */}
    </ConditionalNav>
  )
}

export default ConditionalNavBar
