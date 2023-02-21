import React, { useState, useContext } from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import FriendModal from './FriendModal'
import { device } from '../worker/breakpoints'
import { ChatContext } from '../context/ChatContext'

const Wrapper = styled.div`
  width: 100%;
  background-color: #474747;
  font-family: 'Raleway';
  min-height: 100vh;
  display: flex;
  flex-grow: 0;
`
const Chatr = styled.p`
  display: flex;
  color: #1a8cff;
  width: 12vw;
  border-bottom: solid 1px DimGrey;
  font-style: normal;
  font-weight: 700;
  font-size: large;
  margin-top: 0;
  &:hover {
    cursor: pointer;
    text-shadow: #346dc2 1px 0 8px;
  }
  position: fixed;
  border-radius: 2px;
  @media only screen and ${device.xs} {
    display: none;
  }
  @media only screen and ${device.sm} {
    display: none;
  }
  @media only screen and ${device.md} {
    display: flex;
  }
  @media only screen and ${device.lg} {
    display: flex;
  }
  @media only screen and ${device.xlg} {
    display: flex;
  }
`

const DashLayoutComponent = ({ children }) => {
  const { openMiniModal, setOpenMini } = useContext(ChatContext)
  const { nav } = useContext(ChatContext)
  return (
    <>
      <Wrapper>
        <SideNav open={openMiniModal} setOpen={setOpenMini} />
        <Chatr>chatr</Chatr>
        {openMiniModal && <FriendModal nav={nav} />}
        {children}
      </Wrapper>
    </>
  )
}

export default DashLayoutComponent
