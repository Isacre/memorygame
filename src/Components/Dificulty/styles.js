import styled from "styled-components";

export const Component = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
  width: 100%;
  margin: auto;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    height: fit-content;
  }
`;
export const DificultyLevel = styled.div`
  height: 40%;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #335577;
  background-color: #102132;
  margin: auto;
  text-align: center;
  padding-top: 10px;

  cursor: pointer;
  @media (max-width: 1000px) {
    height: 90%;
    margin-bottom: 20px;
  }

  @media (min-width: 1400px) {
    height: 50%;
    width: 70%;
  }
  :hover {
    filter: brightness(110%);
  }
  h1 {
    color: #fff;
    margin-bottom: 15px;
  }

  img {
    width: 70%;
    height: 70%;
    border-radius: 10px;
    margin-bottom: 15px;
  }
`;

export const H1 = styled.h1`
  color: white;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
