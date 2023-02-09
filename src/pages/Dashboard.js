import React, { useContext } from 'react'
import styled from 'styled-components'
import SideNav from '../components/SideNav'
import '../App.css'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
const Wrapper = styled.div`
  width: 100%;
  background-color: #474747;
  min-height: 100vh;
  display: flex;
`

const User = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 200%;
  margin-left: 10em;
`
const Chatr = styled.p`
  color: #346dc2;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 200%;
  margin-top: 0;
  &:hover {
    cursor: pointer;
    text-shadow: #346dc2 1px 0 8px;
  }
  position: fixed;
`

const Dashboard = () => {
  const navigate = useNavigate()
  const { username } = useContext(UserContext)
  return (
    <>
      <Wrapper>
        <SideNav />
        <Chatr
          onClick={() => {
            navigate('/login')
          }}
        >
          chatr
        </Chatr>
        <User>{username}</User>
      </Wrapper>
    </>
  )
}

export default Dashboard
