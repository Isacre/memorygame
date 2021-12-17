import styled from "styled-components";

export const MainContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 77px;
  height: 77px;
  perspective: 1000px;

  @media (max-width: 374px) {
    //easy
    width: ${(props) => (props.dificulty === 8 ? "71px" : "")};
    height: ${(props) => (props.dificulty === 8 ? "71px" : "")};
    //medium
    width: ${(props) => (props.dificulty === 18 ? "40px" : "")};
    height: ${(props) => (props.dificulty === 18 ? "40px" : "")};
    //hard
    width: ${(props) => (props.dificulty === 32 ? "27px" : "")};
    height: ${(props) => (props.dificulty === 32 ? "27px" : "")};
  }
  @media (min-width: 375px) {
    //easy
    width: ${(props) => (props.dificulty === 8 ? "77px" : "")};
    height: ${(props) => (props.dificulty === 8 ? "77px" : "")};
    //medium
    width: ${(props) => (props.dificulty === 18 ? "55px" : "")};
    height: ${(props) => (props.dificulty === 18 ? "55px" : "")};
    //hard
    width: ${(props) => (props.dificulty === 32 ? "38px" : "")};
    height: ${(props) => (props.dificulty === 32 ? "38px" : "")};
  }

  @media (min-width: 768px) {
    //easy
    width: ${(props) => (props.dificulty === 8 ? "150px" : "")};
    height: ${(props) => (props.dificulty === 8 ? "150px" : "")};
    //medium
    width: ${(props) => (props.dificulty === 18 ? "110px" : "")};
    height: ${(props) => (props.dificulty === 18 ? "110px" : "")};
    //hard
    width: ${(props) => (props.dificulty === 32 ? "80px" : "")};
    height: ${(props) => (props.dificulty === 32 ? "80px" : "")};
  }
  @media (min-width: 1024px) {
    //easy
    width: ${(props) => (props.dificulty === 8 ? "190px" : "")};
    height: ${(props) => (props.dificulty === 8 ? "190px" : "")};
    //medium
    width: ${(props) => (props.dificulty === 18 ? "120px" : "")};
    height: ${(props) => (props.dificulty === 18 ? "120px" : "")};
    //hard
    width: ${(props) => (props.dificulty === 32 ? "90px" : "")};
    height: ${(props) => (props.dificulty === 32 ? "90px" : "")};
  }
`;

export const CardContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  border-radius: 10px;
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
  box-shadow: ${(props) =>
    props.className === "found"
      ? "0px 0px 10px #43FFFF"
      : "0px 0px 10px black"};
  transition: 1s;

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
