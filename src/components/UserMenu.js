import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { TbLogout } from 'react-icons/tb'
import { device } from '../worker/breakpoints'

const UserMenuContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 12%;
  flex-direction: row;
  justify-content: space-between;
  border: solid 1px DimGrey;
  border-bottom: none;
  border-radius: 2px;
  background: #474747;
  @media only screen and ${device.xs} {
    font-size: x-small;
    margin: auto;
    position: relative;
  }
  @media only screen and ${device.sm} {
    font-size: small;
    margin-left: 0;
    margin: auto;
    position: relative;
  }
  @media only screen and ${device.md} {
    font-size: small;
    margin: auto;
    display: flex;
    position: fixed;
    bottom: 0;
  }

  @media only screen and ${device.lg} {
    display: flex;
    position: fixed;
    bottom: 0;
  }
  @media only screen and ${device.xlg} {
    display: flex;
    position: fixed;
    bottom: 0;
  }
`
const User = styled.p`
  color: #ffffff;
  font-size: large;
  font-style: normal;
  font-weight: 600;
  margin-left: 0.5em;
  @media only screen and ${device.xs} {
    font-size: x-small;
    margin: auto;
  }
  @media only screen and ${device.sm} {
    font-size: x-small;
    margin-left: 0;
    margin: auto;
  }
  @media only screen and ${device.md} {
    font-size: small;
    margin: auto;
  }

  @media only screen and ${device.lg} {
    font-size: medium;
    margin-left: 0.5em;
    margin: auto;
  }

  @media only screen and ${device.xlg} {
    font-size: medium;
    margin-left: 0.5em;
    margin: auto;
  }
`

const LogoutButton = styled.button`
  height: 4.3em;
  width: 3em;
  background: #1a8cff;
  border: none;
  color: white;
  border-radius: 2px;
  :not(:disabled) {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 2px 7px #1a8cff;
  }
  @media only screen and ${device.md} {
    width: 2.5em;
  }
  @media only screen and ${device.lg} {
    width: 3em;
  }
  @media only screen and ${device.xlg} {
    width: 3em;
  }
`

const UserMenu = ({ username, setUsername }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    setUsername('')
    navigate('/')
  }

  return (
    <>
      <UserMenuContainer>
        <User>{username}</User>
        <LogoutButton>
          <TbLogout onClick={handleLogout} />
        </LogoutButton>
      </UserMenuContainer>
    </>
  )
}

export default UserMenu
