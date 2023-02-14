import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../worker/breakpoints'
import { HiOutlineLogout } from 'react-icons/hi'

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
    width: 2.5em;
    height: 2.5em;
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
`
const Floater = styled.div`
  border: solid 3px #505050;
  background: #696969;
  position: fixed;
  //   display: block;
  max-height: 0vh;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 0;
  right: 7vw;
  top: 15vh;
  padding: 5em;
  padding-bottom: 0;
  border-radius: 8px;
  @media only screen and ${device.xs} {
    // width: .1em;
    // height: .1em;
  }
  @media only screen and ${device.sm} {
    // width: .1em;
    // height: .1em;
    max-height: 0vh;
    padding: 7em;
    padding-bottom: 0;
  }
  @media only screen and ${device.md} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
  }
  @media only screen and ${device.lg} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
  }
`

const Logout = styled.button`
  height: 2em;
  width: 8em;
  position: absolute;
  top: 10vh;
  right: 3vw;
  background: #1a8cff;
  border: none;
  color: white;
  border-radius: 8px;
  :not(:disabled) {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 2px 7px #1a8cff;
  }
  @media only screen and ${device.sm} {
    height: 2em;
    width: 8em;
  }
  @media only screen and ${device.md} {
    display: none;
  }
  @media only screen and ${device.lg} {
    display: none;
  }
`

const Floating = ({ username, setUsername }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    setUsername('')
    navigate('/')
  }

  return (
    <>
      <Floater>
        <Avatar src="https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png" />
        <User>{username}</User>
        <Logout>
          <HiOutlineLogout onClick={handleLogout} />
        </Logout>
      </Floater>
    </>
  )
}

export default Floating
