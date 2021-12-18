import styled from "styled-components";

export const BoardContainer = styled.div`
  margin-top: 10px;
`;
export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;

export const Game = styled.div`
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  margin: auto;
  margin-bottom: 20px;
  width: fit-content;
  //Easy
  grid-template-columns: ${(props) =>
    `repeat(${props.dificulty === 8 ? "4, 1fr" : ""})`};
  //Medium
  grid-template-columns: ${(props) =>
    `repeat(${props.dificulty === 18 ? "6, 1fr" : ""})`};
  //Hard
  grid-template-columns: ${(props) =>
    `repeat(${props.dificulty === 32 ? "8, 1fr" : ""})`};
`;

export const Stats = styled.div`
  display: flex;
  height: 6vh;
  justify-content: space-between;
  background-color: #335577;
  align-items: center;
  margin: auto;
  margin-bottom: 10px;
  padding: 0px 15px;
  border-radius: 5px;

  @media (max-width: 374px) {
    //easy
    width: 80%;
  }
  @media (min-width: 375px) {
    //easy
    width: 85%;
  }

  @media (min-width: 768px) {
    width: 88%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
  p {
    color: white;
    font-weight: 700;
  }
`;

export const PlayAgainButton = styled.button`
  height: 60%;
  width: 30%;
  margin-left: 5%;
  background-color: rgb(91, 155, 251);
  border: none;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #fff;
  cursor: pointer;
`;
