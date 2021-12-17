import { BoardContainer, Title, Game, Stats } from "./styles";
import React, { useState } from "react";
import { Potato as Images } from "../Images";
import Card from "../Card";
import { shuffle } from "lodash";

function Board(props) {
  const dificulty = props.dificulty;
  const [ImagesData, setImagesData] = useState(shuffle([...Images, ...Images]));
  const Filtereddata = Images.splice(0, 32 - dificulty);
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
              Filtereddata={Filtereddata}
            />
          );
        })}
      </Game>
      <Stats>
        <p>Clicks: {clicks}</p>
        <p>Pares encontrados: {FoundPairs.length / 2}</p>
      </Stats>
    </BoardContainer>
  );
}

export default Board;
