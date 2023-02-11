import React, { useState } from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import FriendModal from './FriendModal'

const Wrapper = styled.div`
  width: 100%;
  background-color: #474747;
  min-height: 100vh;
  display: flex;
`
const Chatr = styled.p`
  display: flex;
  color: #1a8cff;
  background: #282828;
  width: 8.9em;
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

// const FriendModal = styled.div`
//   backdrop-filter: grayscale(100%);
//   padding: 3em;
//   margin: 7em;
//   max-height: 2em;
//   background-color: gray;
//   background: transparent;
//   border-radius: 5px;
//   border: solid 1px #505050;
// `

const DashLayoutComponent = ({ children }) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <Wrapper>
        <SideNav setOpen={setOpen} />
        <Chatr>chatr</Chatr>
        {open && <FriendModal />}
        {children}
      </Wrapper>
    </>
  )
}

export default DashLayoutComponent
