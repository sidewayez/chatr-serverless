import React, { useContext } from 'react'
import styled from 'styled-components'
import DashLayoutComponent from '../components/DashLayoutComponent'
import '../App.css'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const User = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 200%;
  margin-left: 10em;
`

const Dashboard = () => {
  const navigate = useNavigate()
  const { username } = useContext(UserContext)
  return (
    <DashLayoutComponent>
      <User>{username}</User>
    </DashLayoutComponent>
  )
}

export default Dashboard
