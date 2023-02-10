import React from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Wrapper = styled.div`
  width: 100%;
  background-color: #474747;
  min-height: 100vh;
  display: flex;
`
const Chatr = styled.p`
  color: #1a8cff;
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
`

const DashLayoutComponent = ({ children }) => {
  const navigate = useNavigate()
  return (
    <>
      <Wrapper>
        <SideNav />
        <Chatr>chatr</Chatr>
        {children}
      </Wrapper>
    </>
  )
}

export default DashLayoutComponent
