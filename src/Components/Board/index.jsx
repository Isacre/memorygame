import React, { useState } from "react";
import styled from "styled-components";
import Images from "../Images";
import Card from "../Card";
import { shuffle } from "lodash";

const BoardContainer = styled.div`
  height: 95vh;
  width: 95%;
  margin: auto;
  margin-top: 20px;
`;
const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

const Game = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 50%;
  place-items: center;
  grid-gap: 10px;
  margin: auto;
`;

function Board() {
  const [ImagesData, setImagesData] = useState(shuffle([...Images, ...Images]));
  const [clicks, setClicks] = useState(0);
  const activeCards = [{}];

  return (
    <BoardContainer>
      <Title>JOGO DA MEMORIA</Title>
      <Game>
        {ImagesData.map((card, index) => {
          return (
            <Card
              card={card}
              setClicks={setClicks}
              clicks={clicks}
              key={index}
              activeCards={activeCards}
            />
          );
        })}
      </Game>
    </BoardContainer>
  );
}

export default Board;
