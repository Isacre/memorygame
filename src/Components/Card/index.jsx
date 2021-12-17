import { MainContainer, CardContainer, Front, Back } from "./styles";
import React from "react";
import reacticon from "../../assets/reacticon.svg";

export default function Card(props) {
  const { setClicks, setactiveCards, setFoundPairs } = props;
  const index = props.index;
  const activeCards = props.activeCards;
  const card = props.card;
  const clicks = props.clicks;
  const ImagesData = props.ImagesData;
  const Pairs = props.Pairs;
  const dificulty = props.dificulty;

  function handleCardClick() {
    setClicks(clicks + 1);

    if (activeCards.length === 0) {
      setactiveCards([index]);
    }

    if (
      activeCards.length === 1 &&
      activeCards[0] !== index &&
      ImagesData[activeCards[0]] === ImagesData[index]
    ) {
      setFoundPairs([...Pairs, ...activeCards, index]);
      setactiveCards([]);
    }

    if (activeCards.length === 1) {
      setactiveCards([...activeCards, index]);
    }

    if (activeCards.length === 2) {
      setactiveCards([index]);
    }
  }

  return (
    <MainContainer dificulty={dificulty}>
      <CardContainer
        onClick={handleCardClick}
        activeCards={activeCards}
        className={
          activeCards.indexOf(index) !== -1 || Pairs.indexOf(index) !== -1
            ? "flipped"
            : ""
        }
      >
        <Back>
          <img src={reacticon} alt="backicon" />
        </Back>
        <Front className={Pairs.indexOf(index) !== -1 ? "found" : ""}>
          <img src={card} alt="frontimg" />
        </Front>
      </CardContainer>
    </MainContainer>
  );
}
