import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Chatr = styled.p`
  color: #346dc2;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 200%;
  margin-top: 0;
  &:hover {
    cursor: pointer;
    // text-shadow: -1px 1px 4px 0px #346dc2;
    text-shadow: #FC0 1px 0 10px;
  }
//   position: sticky;
//   display: block;
`;
const Navbar = styled.nav`
  position: absolute;
  width: 17%;
  height: 100%;
  background: #404040;
  border-right: solid 1px #505050;
`;
const SideNav = () => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <Chatr
        onClick={() => {
          navigate("/");
        }}
        className=""
      >
        chatr
      </Chatr>
    </Navbar>
  );
};

export default SideNav;
