import "./App.css";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 10.67%;
  bottom: 10.67%;
  background: #3d3d3d;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 102px;
`;

const Header = styled.h1`
  margin-left: auto;
  margin-right: auto;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 25px;
  letter-spacing: -0.02em;
  color: #1a8cff;
`;

const Line = styled.input`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  width: 75%;
  // height: 5%;
  min-height: 0.1em;
  margin: 0.5em;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  color: #d9d9d9;
  ::placeholder {
    text-align: center;
    color: #d9d9d9;
  }
`;

const Inputs = styled.div`
  min-height: 20%;
  line-height: 25px;
`;

function App() {
  return (
    <div className="App">
      <Box>
        <Header>chatr</Header>
        <Inputs>
          <Line placeholder="Username"></Line>
          <Line placeholder="Password"></Line>
        </Inputs>
      </Box>
    </div>
  );
}

export default App;
