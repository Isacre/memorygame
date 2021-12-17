import React, { useState } from "react";
import styled from "styled-components";
import reacticon from "../../assets/reacticon.svg";

const MainContainer = styled.div`
  position: relative;
  width: 115px;
  height: 115px;
  perspective: 1000px;
`;
const CardContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  border-radius: 10px;
  transform: ${(props) => `rotateY(${props.flipped ? "180deg" : "0deg"})`};
  transform: ${(props) =>
    `rotateY(${props.className === "flipped" ? "180deg" : "0deg"})`};

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
`;

const Front = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Back = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #357;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
  backface-visibility: hidden;
`;

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
      setFoundPairs([...Pairs, ...activeCards]);
      setactiveCards([]);
    }
    if (activeCards.length === 1) {
      setactiveCards([...activeCards, index]);
    }
    if (
      activeCards.length === 2 &&
      ImagesData[activeCards[0]] === ImagesData[activeCards[1]]
    ) {
      setFoundPairs([...Pairs, ...activeCards]);
      setactiveCards([index]);
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
