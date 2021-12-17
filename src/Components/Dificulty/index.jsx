import React, { useState } from "react";
import styled from "styled-components";
import Board from "../Board/index";
import easy from "../../assets/easy.png";
import medium from "../../assets/medium.png";
import hard from "../../assets/hard.png";

const Component = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
  width: 100%;
  margin: auto;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const DificultyLevel = styled.div`
  height: 40%;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #335577;
  background-color: #102132;
  margin: auto;
  text-align: center;
  padding-top: 10px;

  cursor: pointer;
  @media (max-width: 1000px) {
    height: 90%;
    margin-bottom: 10px;
  }

  @media (min-width: 1400px) {
    height: 65%;
  }
  :hover {
    filter: brightness(110%);
  }
  h1 {
    color: #fff;
  }

  img {
    width: 70%;
    height: 70%;
    border-radius: 10px;
  }
`;

const H1 = styled.h1`
  color: white;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export default function Dificulty() {
  const [dificulty, setDificulty] = useState(undefined);
  return (
    <>
      {dificulty === undefined ? (
        <>
          <H1>ESCOLHA A DIFICULDADE</H1>
          <Component>
            <DificultyLevel onClick={() => setDificulty(8)}>
              <h1>Facil</h1>
              <img src={easy} alt="easy" />
              <h1>4X4</h1>
            </DificultyLevel>
            <DificultyLevel onClick={() => setDificulty(18)}>
              <h1>Medio</h1>
              <img src={medium} alt="medium" />
              <h1>6X6</h1>
            </DificultyLevel>
            <DificultyLevel onClick={() => setDificulty(32)}>
              <h1>Difícil</h1>
              <img src={hard} alt="hard" />
              <h1>8X8</h1>
            </DificultyLevel>
          </Component>
        </>
      ) : (
        <Board dificulty={dificulty} />
      )}
    </>
  );
}
