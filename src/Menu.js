import styled from "styled-components";

import { Link } from "react-router-dom";

const Father = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Btn = styled.button`
  width: 150px;
  height: 100px;
  border-radius: 5px;
  border: 0;
  background-color: ${(props) => props.bgColor};
  color: white;
  font-size: 20px;
  :hover {
    transition: 0.3s;
    font-size: 30px;
  }
`;

function Menu() {
  return (
    <Father>
      <Link to="/kakasi">
        <Btn bgColor="gray">카카시</Btn>
      </Link>
      <Link to="/rengoku">
        <Btn bgColor="darkred">렌고쿠</Btn>
      </Link>
      <Link to="/nezuko">
        <Btn bgColor="pink">네즈코</Btn>
      </Link>
      <Link to="/levi">
        <Btn bgColor="brown">리바이</Btn>
      </Link>
      <Link to="/eren">
        <Btn bgColor="black">에렌</Btn>
      </Link>
      <Link to="/sinobu">
        <Btn bgColor="purple">시노부</Btn>
      </Link>
    </Father>
  );
}

export default Menu;
