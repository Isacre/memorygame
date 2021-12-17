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
  const card = props.card;
  const clicks = props.clicks;
  const { setClicks } = props;

  return (
    <MainContainer>
      <CardContainer
        flipped={Flipped}
        onClick={() => {
          setFlipped(true);
          setClicks(clicks + 1);
        }}
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
