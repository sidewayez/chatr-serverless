import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { TbLogout } from 'react-icons/tb'
import { device } from '../worker/breakpoints'

const UserMenuContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 10vw;
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
  &:hover {
    cursor: context-menu;
  }
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
    font-size: x-small;
    margin: auto;
  }

  @media only screen and ${device.lg} {
    font-size: small;
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

//  const Logout = styled.button`
//   height: 2em;
//   width: 8em;
//   position: absolute;
//   top: 10vh;
//   right: 3vw;
//   background: #1a8cff;
//   border: none;
//   color: white;
//   border-radius: 8px;
//   :not(:disabled) {
//     cursor: pointer;
//   }
//   &:hover {
//     box-shadow: 0px 2px 7px #1a8cff;
//   }
//   @media only screen and ${device.xs} {
//     height: 1em;
//     width: 5em;
//     right: 1vw;
//     top: 6vh;
//   }
//   @media only screen and ${device.sm} {
//     height: 2em;
//     width: 8em;
//     top: 10vh;
//   }
//   @media only screen and ${device.md} {
//     display: none;
//   }
//   @media only screen and ${device.lg} {
//     display: none;
//   }
//   @media only screen and ${device.xlg} {
//     display: none;
//   }
// `

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
