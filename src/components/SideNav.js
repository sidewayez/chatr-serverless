import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = styled.nav`
  position: absolute;
  width: 10em;
  height: 100%;
  background: #404040;
  border-right: solid 1px #505050;
`
const SideNav = () => {
  const navigate = useNavigate()
  return <Navbar></Navbar>
}

export default SideNav
