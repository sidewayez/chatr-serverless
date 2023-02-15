import React, { useContext } from 'react'
import styled from 'styled-components'
import DashLayoutComponent from '../components/DashLayoutComponent'
import '../App.css'
import { UserContext } from '../context/UserContext'
import NameTag from '../components/NameTag'
import { device } from '../worker/breakpoints'
import UserMenu from '../components/UserMenu'
import MainFeed from '../components/MainFeed'

const Header = styled.h1`
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 300%;
  margin-left: 15vw;
  margin-top: 5vh;
  color: #ff6b00;
  &:hover {
    cursor: context-menu;
  }
  @media only screen and ${device.xs} {
    margin-left: 5vw;
    margin-top: 6.5vh;
    font-size: 250%;
  }
  @media only screen and ${device.sm} {
    font-size: 300%;
    margin-left: 5vw;
    margin-top: 5vh;
  }
  @media only screen and ${device.md} {
    font-size: 300%;
    margin-left: 15vw;
    margin-top: 5vh;
  }
  @media only screen and ${device.lg} {
    font-size: 300%;
    margin-left: 15vw;
    margin-top: 5vh;
  }
`

const Floater = styled.div`
  border: solid 3px #505050;
  background: SlateGray;
  position: fixed;
  right: 7vw;
  top: 60vh;
  margin-left: auto;
  margin-right: auto;
  width: 5vw;
  height: 10vh;
  padding: 5em;
  border-radius: 8px;
  @media only screen and ${device.xs} {
    display: flex;
  }
  @media only screen and ${device.sm} {
    display: flex;
  }
  @media only screen and ${device.md} {
    display: none;
  }
  @media only screen and ${device.lg} {
  }
  @media only screen and ${device.xlg} {
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

const Dashboard = () => {
  const { username, setUsername } = useContext(UserContext)
  return (
    <DashLayoutComponent>
      <Header>Messages</Header>
      <MainFeed />
      <NameTag username={username} setUsername={setUsername} />
      <Floater>
        <UserMenu username={username} setUsername={setUsername} />
      </Floater>
    </DashLayoutComponent>
  )
}

export default Dashboard
