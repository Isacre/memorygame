import styled from "styled-components";

export const BoardContainer = styled.div`
  height: calc(100vh - 20px);
  width: 100%;
  margin-top: 10px;
`;
export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
  width: 45%;
  margin: auto;
`;

export const Game = styled.div`
  display: grid;

  place-items: center;
  grid-gap: 10px;
  margin: auto;
  margin-bottom: 20px;
  //Easy
  width: ${(props) => (props.dificulty === 8 ? "25%" : "")};
  grid-template-columns: ${(props) =>
    `repeat(${props.dificulty === 8 ? "4, 1fr" : ""})`};
  //Medium
  width: ${(props) => (props.dificulty === 18 ? "35%" : "")};
  grid-template-columns: ${(props) =>
    `repeat(${props.dificulty === 18 ? "6, 1fr" : ""})`};
  //Hard
  width: ${(props) => (props.dificulty === 32 ? "45%" : "")};
  grid-template-columns: ${(props) =>
    `repeat(${props.dificulty === 32 ? "8, 1fr" : ""})`};
`;

export const Stats = styled.div`
  display: flex;
  width: 25%;
  height: 5vh;
  margin: auto;
  justify-content: space-between;
  background-color: #335577;
  align-items: center;
  margin-bottom: 10px;
  padding: 0px 15px;
  border-radius: 5px;
  p {
    color: white;
    font-weight: 700;
  }
`;
