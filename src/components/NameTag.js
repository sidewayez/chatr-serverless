import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../worker/breakpoints'

const Avatar = styled.img`
  border-radius: 50%;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 1em;
  top: 0.5em;
  width: 4em;
  height: 4em;
`
const User = styled.h1`
  position: absolute;
  margin-right: auto;
  margin-left: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 200%;
  display: flex;
  color: #ffffff;
  font-size: 200%;
    top: 1vh;
    right: 15px;
  &:hover {
    cursor: context-menu;
  }
`
const Nametag = styled.div`
  border: solid 3px #505050;
  background: #696969;
  position: fixed;
  max-height: 0vh;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  top: 12vh;
  border-radius: 8px;
  @media only screen and ${device.xs} {
    display: none;
  }
  @media only screen and ${device.sm} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
    right: 4vw;
    display: flex;
  }
  @media only screen and ${device.md} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
    right: 4vw;
    display: flex;
  }
  @media only screen and ${device.lg} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
    right: 5vw;
    display: flex;
  }
  @media only screen and ${device.xlg} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
    right: 5vw;
    display: flex;
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
