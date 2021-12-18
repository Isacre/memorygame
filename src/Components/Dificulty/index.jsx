import React, { useState } from "react";
import { Component, DificultyLevel, H1 } from "./styles";
import Board from "../Board/index";
import easy from "../../assets/easy.png";
import medium from "../../assets/medium.png";
import hard from "../../assets/hard.png";

export default function Dificulty() {
  const [dificulty, setDificulty] = useState(0);

  return (
    <>
      {dificulty === 0 ? (
        <>
          <H1>ESCOLHA A DIFICULDADE</H1>
          <Component>
            <DificultyLevel onClick={() => setDificulty(8)}>
              <h1>Fácil</h1>
              <img src={easy} alt="easy" />
              <h1>4X4</h1>
            </DificultyLevel>
            <DificultyLevel onClick={() => setDificulty(18)}>
              <h1>Médio</h1>
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
        <Board dificulty={dificulty} setDificulty={setDificulty} />
      )}
    </>
  );
}
