import React, { useContext } from 'react'
import styled from 'styled-components'
import DashLayoutComponent from '../components/DashLayoutComponent'
import '../App.css'
import { UserContext } from '../context/UserContext'
import NameTag from '../components/NameTag'
import { device } from '../worker/breakpoints'
import MainFeed from '../components/MainFeed'
import ConditionalNavBar from '../components/ConditionalNavBar'

const Header = styled.h1`
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 300%;
  margin-left: 15vw;
  margin-top: 5vh;
  color: #ff6b00;
  @media only screen and ${device.xs} {
    margin-left: 9vw;
    margin-top: 6.3vh;
    font-size: 250%;
  }
  @media only screen and ${device.sm} {
    font-size: 300%;
    margin-left: 5vw;
    margin-top: 5vh;
  }
  @media only screen and ${device.md} {
    font-size: 300%;
    margin-left: 17vw;
    margin-top: 5vh;
  }
  @media only screen and ${device.lg} {
    font-size: 300%;
    margin-left: 17vw;
    margin-top: 5vh;
  }
`

const Dashboard = () => {
  const { username, setUsername } = useContext(UserContext)
  return (
    <DashLayoutComponent>
      <Header>Messages</Header>
      <MainFeed />
      <NameTag username={username} setUsername={setUsername} />
      <ConditionalNavBar username={username} setUsername={setUsername} />
    </DashLayoutComponent>
  )
}

export default Dashboard
