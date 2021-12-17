import styled from "styled-components";

export const MainContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 95px;
  height: 95px;
  perspective: 1000px;
`;
export const CardContainer = styled.div`
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

export const Front = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const Back = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #357;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
  backface-visibility: hidden;

  img {
    :hover {
      filter: contrast(200%);
      transition: 0.5s;
    }
  }
`;
