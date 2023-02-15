import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../worker/breakpoints'

const Avatar = styled.img`
  display: flex;
  border-radius: 50%;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 1em;
  top: 0.5em;
  width: 5em;
  height: 5em;
  margin-top: 0;
  @media only screen and ${device.xs} {
    width: 3em;
    height: 3em;
  }
  @media only screen and ${device.sm} {
    width: 4em;
    height: 4em;
  }
  @media only screen and ${device.md} {
    width: 4em;
    height: 4em;
  }
  @media only screen and ${device.lg} {
    width: 4em;
    height: 4em;
  }
`
const User = styled.h1`
  position: absolute;
  margin-right: auto;
  margin-left: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 200%;
  display: flex;
  right: 15px;
  top: 1vh;
  color: #ffffff;
  &:hover {
    cursor: context-menu;
  }
  @media only screen and ${device.xs} {
    right: 10px;
    font-size: 200%;
    top: 1.5vh;
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
const Nametag = styled.div`
  border: solid 3px #505050;
  background: #696969;
  position: fixed;
  max-height: 0vh;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 0;
  right: 7vw;
  top: 12vh;
  padding: 5em;
  padding-bottom: 0;
  border-radius: 8px;
  @media only screen and ${device.xs} {
    right: 6vw;
  }
  @media only screen and ${device.sm} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
    right: 4vw;
  }
  @media only screen and ${device.md} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
    right: 4vw;
  }
  @media only screen and ${device.lg} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
    right: 5vw;
  }
  @media only screen and ${device.xlg} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
    right: 5vw;
  }
`

const NameTag = ({ username, setUsername }) => {
  return (
    <>
      <Nametag draggable={true}>
        <Avatar src="https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png" />
        <User>{username}</User>
      </Nametag>
    </>
  )
}

export default NameTag
