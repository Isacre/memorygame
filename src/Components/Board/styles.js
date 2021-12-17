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
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  place-items: center;
  grid-gap: 10px;
  margin: auto;
  margin-bottom: 20px;
  @media (min-width: 1000px) {
    width: 45%;
  }
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
