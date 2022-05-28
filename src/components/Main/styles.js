import styled, { keyframes } from "styled-components";

// const animateYang =
//     from{
//         transform:rotate(0deg);
//     }

//     to{
//         transform:rotate(360deg);
//     }

// `;

const animateYing = keyframes`
    0%{
      transform: translateY(0);
    }

    100%{
      transform: translateY(25px);
    }

`;

export const Container = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  max-width: 100vw;
  margin: 5em auto;
  border: 1px solid #000;
  background: radial-gradient(circle at 50% 25%, black 5%, transparent 5%),
    radial-gradient(
      closest-side circle at 50% 25%,
      white 100%,
      transparent 100%
    ),
    radial-gradient(circle at 50% 75%, white 5%, transparent 5%),
    radial-gradient(
      closest-side circle at 50% 75%,
      black 100%,
      transparent 100%
    ),
    linear-gradient(to right, white 50%, black 50%);
  box-shadow: 14px 14px 20px #111111;
  animation: ${animateYing} 1.8s infinite alternate;
  margin-bottom: 20rem;

  @media (min-width: 768px) {
    width: 600px;
    height: 600px;
    margin-bottom: 10rem;
  }
`;

export const TitulosHabilidades = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  position: relative;
  align-items: center;
  color: #1c1c1c;
  justify-content: space-around;

  @media (min-width: 768px) {
    height: 600px;
  }
`;

export const Back = styled.h3`
  color: #ffff;
  margin-top: 160px;
`;
export const HabilidadesBack = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  font-size: 0.6rem;
  position: relative;
  align-items: flex-start;
  color: #ffff;
  margin-top: -44%;
  margin-left: 55%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    color: #ffff;
    margin-top: 5px;
  }

  h3 {
    margin-right: 10px;
    color: #ffff;
    margin-top: 5px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 600px;
    position: relative;
    font-size: 1rem;
    align-items: center;
    color: #1c1c1c;
    margin-top: -50%;
    margin-left: 50%;
    div {
      display: flex;
      flex-direction: row;
      height: 40px;
      width: 210px;
      align-items: center;
    }
    h3 {
      margin-right: 10px;
      color: #ffff;
    }
  }
`;

export const HabilidadesFront = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  font-size: 0.6rem;
  position: relative;
  align-items: flex-start;
  color: black;
  margin-top: -130%;
  margin-left: 20%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    color: #ffff;
    margin-top: 5px;
  }

  h3 {
    margin-right: 10px;
    color: black;
    margin-top: 5px;
  }

  @media (min-width: 768px) {
    height: 600px;
    font-size: 1rem;
    margin-top: -130%;
    margin-left: 10%;
    div {
      display: flex;
      flex-direction: row;
      height: 40px;
      width: 210px;
      align-items: flex-end;
    }
    h3 {
      margin-right: 10px;
      color: #1c1c1c;
    }
  }
`;
