import React from 'react'
import styled from 'styled-components'

const Avatar = styled.img`
  display: flex;
  border-radius: 50%;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 1em;
  top: 1em;
  width: 5em;
  height: 5em;
  margin-top: 0;
`
const User = styled.h1`
  position: absolute;
  font-style: normal;
  font-weight: 600;
  font-size: 200%;
  display: flex;
//   margin-left: .7em;
//   top: -2.5%;
right: 2vw;
//   margin-top: 0;
  padding: 0;
  top: 2vh;
  color: #ffffff;
  &:hover {
    cursor: context-menu;
  }
`
const Floater = styled.div`
  border: solid 3px #505050;
  background: #696969;
  position: fixed;
  display: flex;
  flex-grow: 1;
//   flex-direction: column;
  right: 7vw;
  top: 15vh;
  margin-left: auto;
  margin-right: auto;
  width: 5vw;
  min-width: 5vw;
  height: 10vh;
  padding: 5em;
  border-radius: 8px;
`

const Floating = ({username}) => {
  return (
    <Floater>
      <Avatar src="https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png" />
      <User>{username}</User>
    </Floater>
  )
}

export default Floating
