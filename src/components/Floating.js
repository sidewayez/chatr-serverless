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
    // margin-left: 5vw;
    // margin-top: 6.5vh;
    right: 10px;
    font-size: 200%;
    top: 1.5vh;
  }
  @media only screen and ${device.sm} {
    // margin-left: 5vw;
    // margin-top: 5vh;
    font-size: 200%;
  }
  @media only screen and ${device.md} {
    // font-size: 300%;
    // margin-left: 15vw;
    // margin-top: 5vh;
    font-size: 200%;
  }
  @media only screen and ${device.lg} {
    font-size: 200%;
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
    // padding: 5em;
    right: 6vw;
  }
  @media only screen and ${device.sm} {
    width: 4em;
    height: 4em;
    // max-height: 0vh;
    padding: 5em;
    padding-bottom: 0;
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
  @media only screen and ${device.xs} {
    height: 1em;
    width: 5em;
    right: 1vw;
    top: 6vh;
  }
  @media only screen and ${device.sm} {
    height: 2em;
    width: 8em;
    top: 10vh;
  }
  @media only screen and ${device.md} {
    display: none;
  }
  @media only screen and ${device.lg} {
    display: none;
  }
  @media only screen and ${device.xlg} {
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
      <Floater draggable={true}>
        <Avatar src="https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png" />
        <User>{username}</User>
        {/* <Logout>
          <HiOutlineLogout onClick={handleLogout} />
        </Logout> */}
      </Floater>
    </>
  )
}

export default Floating
