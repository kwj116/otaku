import styled from "styled-components";
import "./style.module.css";
import img from "../img/Eren_main.jpg";
import { Link } from "react-router-dom";

const Father = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  height: 15vh;
  background-color: ${(props) => props.bgColor};
  flex-shrink: 0;
`;

const Img = styled.img.attrs({
  src: `${img}`,
})`
  height: 600px;
  width: 500px;
  align-self: center;
`;

function Levi() {
  return (
    <Father height="center">
      <Box as="header" bgColor="black" />
      <br></br>
      <Img></Img>
      <Link to="/menu">Menu</Link>
      <Box as="footer" bgColor="black" />
    </Father>
  );
}

export default Levi;
