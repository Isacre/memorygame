import { BoardContainer, Title, Game, Stats, PlayAgainButton } from "./styles";
import React, { useState } from "react";
import { Images as Imagens } from "../Images";
import Card from "../Card";
import { shuffle } from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Board(props) {
  const { setDificulty } = props;
  const dificulty = props.dificulty;
  const slicedimages = Imagens.slice(0, dificulty);
  const [ImagesData, setImagesData] = useState(
    shuffle([...slicedimages, ...slicedimages])
  );
  const [clicks, setClicks] = useState(0);
  const [activeCardsvalue, setactiveCards] = useState([]);
  const [FoundPairs, setFoundPairs] = useState([]);
  const activeCards = [...new Set(activeCardsvalue)];

  function ResetGame() {
    setFoundPairs([]);
    setClicks(0);
    setactiveCards([]);
    setTimeout(function () {
      setImagesData(shuffle([...slicedimages, ...slicedimages]));
    }, 300);

    toast.success("Cartas embaralhadas", { theme: "dark" });
  }

  return (
    <BoardContainer>
      <ToastContainer />
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
        <p>Erros: {clicks}</p>
        <PlayAgainButton onClick={ResetGame}>Reiniciar</PlayAgainButton>
        <PlayAgainButton
          onClick={() => {
            setDificulty(0);
          }}
        >
          Trocar dificuldade
        </PlayAgainButton>
        <p>Acertos: {FoundPairs.length / 2}</p>
      </Stats>
    </BoardContainer>
  );
}

export default Board;
