import React, { useState } from "react";
import styled from "styled-components";
import { Potato as Images } from "../Images";
import Card from "../Card";
import { shuffle } from "lodash";

const BoardContainer = styled.div`
  height: 95vh;
  width: 95vw;
  margin: auto;
  margin-top: 2vh;
`;
const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

const Game = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  place-items: center;
  grid-gap: 10px;
  margin: auto;

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

function Board() {
  const [ImagesData, setImagesData] = useState(shuffle([...Images, ...Images]));
  const [clicks, setClicks] = useState(0);
  const [activeCardsvalue, setactiveCards] = useState([]);
  const [FoundPairs, setFoundPairs] = useState([]);
  const activeCards = [...new Set(activeCardsvalue)];
  console.log(FoundPairs.length);

  return (
    <BoardContainer>
      {FoundPairs.length === 94 ? (
        <Title>VOCÊ VENCEU, PARABENS</Title>
      ) : (
        <Title>JOGO DA MEMORIA</Title>
      )}
      <Game>
        {ImagesData.map((card, index) => {
          return (
            <Card
              setClicks={setClicks}
              setactiveCards={setactiveCards}
              setFoundPairs={setFoundPairs}
              setImagesData={setImagesData}
              card={card}
              clicks={clicks}
              index={index}
              key={index}
              activeCards={activeCards}
              ImagesData={ImagesData}
              Pairs={FoundPairs}
            />
          );
        })}
      </Game>
    </BoardContainer>
  );
}

export default Board;
