import React, { useContext } from 'react'
import styled from 'styled-components'
import DashLayoutComponent from '../components/DashLayoutComponent'
import '../App.css'
import { UserContext } from '../context/UserContext'

const User = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 200%;
  margin-left: 5.5em;
`

const Messages = styled.h1`
  position: absolute;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 200%;
  margin-left: 5.5em;
  margin-top: 2em;
  color: #ffffff;
`

const Dashboard = () => {
  const { username } = useContext(UserContext)
  return (
    <DashLayoutComponent>
      <Messages>Messages</Messages>
    </DashLayoutComponent>
  )
}

export default Dashboard
