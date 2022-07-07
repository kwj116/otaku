import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import anya from "./img/Anya.webp";
const ani = keyframes`

50%{
    transform: rotate(180deg) ;
 
}
100%{
    transform: rotate(360deg) ;
 
}


`;

const Father = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const StyledLink = styled(Link)``;

const Img = styled.img.attrs({
  src: `${anya}`,
})`
  border-color: pink;
  border-style: solid;
  border-width: 15px 15px 15px 15px;
  display: flex;
  border-radius: 20px;
  animation: ${ani} 2s linear;
  :hover {
    opacity: 80%;
    transition: 0.3s;
    height: 300px;
    width: 350px;
  }
  height: 250px;
  width: 300px;
`;

function Home() {
  return (
    <Father>
      <StyledLink to="/menu">
        <Img></Img>
      </StyledLink>
    </Father>
  );
}
export default Home;
