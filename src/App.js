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

const Input = styled.input`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  width: 75%;
  min-height: 0.1em;
  margin-bottom: 0.7em;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  color: #d9d9d9;
  text-align: center;
  ::placeholder {
    text-align: center;
    color: #d9d9d9;
  }
`;

const Button = styled.button`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  width: 70%;
  height: 10%;
  border-radius: 10px;
  margin-top: 0.5em;
  background: #1a8cff;
  box-shadow: 0px 2px 7px #1a8cff;
  border: none;
  :not(:disabled) {
    cursor: pointer;
  }
`;
function App() {
  return (
    <div className="App">
      <Box>
        <Header>chatr</Header>
        <Input placeholder="Username"></Input>
        <Input placeholder="Password"></Input>
        <Button
          onClick={() => {
            alert("douchebag");
          }}
        >
          login
        </Button>
      </Box>
    </div>
  );
}

export default App;
