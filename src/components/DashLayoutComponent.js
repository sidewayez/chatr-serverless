import React, { useState } from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import FriendModal from './FriendModal'

const Wrapper = styled.div`
  width: 100%;
  background-color: #474747;
  font-family: 'Raleway';
  min-height: 100vh;
  display: flex;
  flex-grow: 0;
  // margin: auto;
  overflowx: hidden;
`
const Chatr = styled.p`
  display: flex;
  color: #1a8cff;
  background: #282828;
  width: 12%;
  font-family: 'Raleway';
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
`

const DashLayoutComponent = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Wrapper>
        <SideNav open={open} setOpen={setOpen} />
        <Chatr>chatr</Chatr>
        {open && <FriendModal />}
        {children}
      </Wrapper>
    </>
  )
}

export default DashLayoutComponent
