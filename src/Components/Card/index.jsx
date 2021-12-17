import { MainContainer, CardContainer, Front, Back } from "./styles";
import React, { useState } from "react";
import reacticon from "../../assets/reacticon.svg";

export default function Card(props) {
  const [Flipped, setFlipped] = useState(false);
  const { setClicks, setactiveCards, setFoundPairs } = props;
  const index = props.index;
  const activeCards = props.activeCards;
  const card = props.card;
  const clicks = props.clicks;
  const ImagesData = props.ImagesData;
  const Pairs = props.Pairs;

  function handleCardClick() {
    setFlipped(true);
    setClicks(clicks + 1);
    if (activeCards.length === 0) {
      setactiveCards([index]);
    }
    if (
      activeCards.length === 1 &&
      ImagesData[activeCards[0]] === ImagesData[index]
    ) {
      setFoundPairs([...Pairs, ...activeCards, index]);
      setactiveCards([...activeCards, index]);
    }
    if (activeCards.length === 1) {
      setactiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) setactiveCards([index]);
  }

  return (
    <MainContainer>
      <CardContainer
        flipped={Flipped}
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
        <Front>
          <img src={card} alt="frontimg" />
        </Front>
      </CardContainer>
    </MainContainer>
  );
}
