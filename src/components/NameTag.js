import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { device } from '../worker/breakpoints'

const Avatar = styled.img`
  border-radius: 50%;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 1em;
  top: 0.5em;
  width: 4em;
  height: 4em;
`

const handleUserFont = (props) => {
  if (props.width > 130) {
    return 150
  } else if (props.width > 122) {
    return 160
  } else if (props.width >= 119) {
    return 180
  } else {
    return 250
  }
}

const handleUserHeight = (props) => {
  if (props.width > 130) {
    return 4
  }
   else if (props.width > 120) {
    return 3
  } 
   else if (props.width > 119) {
    return 2
  } 
  else {
    return 2.5
  }
}
const handleUserWidth = (props) => {
  if (props.width > 130) {
    return 1
  } else if (props.width >= 119) {
    return 4
  } else {
    return 2.5
  }
}

const User = styled.h1`
  margin: 0 auto;
  position: absolute;
  margin-left: ${handleUserWidth}vw;
  font-style: normal;
  font-weight: 600;
  // display: ;
  color: #ffffff;
  font-size: ${handleUserFont}%;
  top: ${handleUserHeight}vh;
  // right: 15px;
`
const Nametag = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 3px #505050;
  background: #696969;
  position: fixed;
  max-height: 0vh;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  top: 12vh;
  border-radius: 8px;
  @media only screen and ${device.xs} {
    display: none;
  }
  @media only screen and ${device.sm} {
    width: 4em;
    height: 4em;
    padding: 5em;
    padding-bottom: 0;
    right: 3vw;
    display: flex;
  }
  // @media only screen and ${device.md} {
  //   width: 4em;
  //   height: 4em;
  //   padding: 5em;
  //   padding-bottom: 0;
  //   right: 5vw;
  //   display: flex;
  // }
  // @media only screen and ${device.lg} {
  //   width: 4em;
  //   height: 4em;
  //   padding: 5em;
  //   padding-bottom: 0;
  //   right: 5vw;
  //   display: flex;
  // }
  // @media only screen and ${device.xlg} {
  //   width: 4em;
  //   height: 4em;
  //   padding: 5em;
  //   padding-bottom: 0;
  //   right: 5vw;
  //   display: flex;
  // }
`
const NameTageContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-grow: 1;
`
const NameTag = ({ username }) => {
  const nameTagRef = useRef()
  const [nameWidth, setWidth] = useState(0)
  useEffect(() => {
    setWidth(nameTagRef.current.offsetWidth)
    console.log(nameTagRef)
  }, [username])
  return (
    <>
      <NameTageContainer>
        <Nametag draggable={true}>
          <Avatar src="https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png" />
          <User ref={nameTagRef} width={nameWidth}>
            {username}
          </User>
        </Nametag>
      </NameTageContainer>
    </>
  )
}

export default NameTag
