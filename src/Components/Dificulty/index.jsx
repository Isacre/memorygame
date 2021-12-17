import React, { useState } from "react";
import styled from "styled-components";
import Board from "../Board/index";
const Component = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
  width: 70%;
  margin: auto;
`;
const DificultyLevel = styled.div`
  height: 600px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px;
  background-color: #357;
  margin: auto;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
  :hover {
    filter: brightness(110%);
  }
  h1 {
    color: #fff;
  }
`;
export default function Dificulty() {
  const [dificulty, setDificulty] = useState(undefined);
  return (
    <>
      {dificulty === undefined ? (
        <Component>
          <DificultyLevel onClick={() => setDificulty(8)}>
            <h1>Facil</h1>
          </DificultyLevel>
          <DificultyLevel onClick={() => setDificulty(18)}>
            <h1>Médio</h1>
          </DificultyLevel>
          <DificultyLevel onClick={() => setDificulty(32)}>
            <h1>Dificil</h1>
          </DificultyLevel>
        </Component>
      ) : (
        <Board dificulty={dificulty} />
      )}
    </>
  );
}
