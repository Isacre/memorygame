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
    if (
      activeCards.length === 1 &&
      ImagesData[activeCards[0]] !== ImagesData[index]
    ) {
      setactiveCards([...activeCards, index]);
      setTimeout(function () {
        setactiveCards([]);
      }, 800);
      setClicks(clicks + 1);
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
          <img src={reacticon} alt="backicon" draggable="false" />
        </Back>
        <Front className={Pairs.indexOf(index) !== -1 ? "found" : ""}>
          <img src={card} alt="frontimg" draggable="false" />
        </Front>
      </CardContainer>
    </MainContainer>
  );
}
