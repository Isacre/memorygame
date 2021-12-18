import { BoardContainer, Title, Game, Stats } from "./styles";
import React, { useState } from "react";
import { Images as Imagens } from "../Images";
import Card from "../Card";
import { shuffle } from "lodash";

function Board(props) {
  const dificulty = props.dificulty;
  const slicedimages = Imagens.slice(0, dificulty);
  const [ImagesData, setImagesData] = useState(
    shuffle([...slicedimages, ...slicedimages])
  );
  const [clicks, setClicks] = useState(0);
  const [activeCardsvalue, setactiveCards] = useState([]);
  const [FoundPairs, setFoundPairs] = useState([]);
  const activeCards = [...new Set(activeCardsvalue)];

  return (
    <BoardContainer>
      {FoundPairs.length === ImagesData.length ? (
        <Title>VOCÊ VENCEU, PARABENS</Title>
      ) : (
        <Title>JOGO DA MEMORIA</Title>
      )}

      <Game dificulty={dificulty}>
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
              dificulty={dificulty}
            />
          );
        })}
      </Game>
      <Stats dificulty={dificulty}>
        <p>Clicks: {clicks}</p>
        <p>Pares encontrados: {FoundPairs.length / 2}</p>
      </Stats>
    </BoardContainer>
  );
}

export default Board;
