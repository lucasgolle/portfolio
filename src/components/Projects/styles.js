import styled, { keyframes } from "styled-components";

export const Container = styled.div`

  h1 {
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    justify-content: center;
    width: 100%;
    margin-top: 6rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
  }

  img {
    max-width: 360px;
    width: 90vw;
    height: 220px;
    border-radius: 8px;
    box-shadow: 0.5px 0.5px 15px #111111;
    cursor: pointer;
    border: 1px solid black;
    &:hover {
      width: 95vw;
      max-width: 375px;
      transition: 1s;
      box-shadow: 14px 14px 20px #111111;
    }
  }

  li {
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 2.4rem;
    }

    ul {
      display: flex;
      flex-direction: row;
      column-count: 2;
      width: 100vw;
    }

    h3 {
      font-size: 1.4rem;
      text-align: start;
    }

    img {
    max-width: 360px;
    height: 230px;
    border-radius: 8px;
    box-shadow: 0.5px 0.5px 15px #111111;
    cursor: pointer;
    border: 1px solid black;
    &:hover {
      max-width: 375px;
      transition: 1s;
      box-shadow: 14px 14px 20px #111111;
    }
  }
  li {
    margin-bottom: 10rem;
  }
  }
`;

export const ContainerBack = styled.div`
  background-color: #1c1c1c;
  padding-top: 3rem;
  h1 {
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 30px;
    color: white;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    justify-content: center;
    width: 100%;
    margin-top: 6rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
  }

  img {
    max-width: 360px;
    width: 90vw;
    height: 220px;
    border-radius: 8px;
    box-shadow: 0.5px 0.5px 15px #111111;
    cursor: pointer;
    border: 1px solid black;
    &:hover {
      width: 95vw;
      max-width: 375px;
      transition: 1s;
      box-shadow: 14px 14px 20px #111111;
    }
  }

  li {
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 2.4rem;
    }

    ul {
      display: flex;
      flex-direction: row;
      column-count: 2;
      width: 100vw;
    }

    h3 {
      font-size: 1.4rem;
      text-align: start;
    }

    img {
    max-width: 360px;
    height: 230px;
    border-radius: 8px;
    box-shadow: 0.5px 0.5px 15px #111111;
    cursor: pointer;
    border: 1px solid black;
    &:hover {
      max-width: 375px;
      transition: 1s;
      box-shadow: 14px 14px 20px #111111;
    }
  }
  li {
    margin-bottom: 10rem;
  }
  }
`;

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-80px)
    }

    to{
        opacity: 1;
        transform: translateX(0px)
    }

`;

const appearFromRigth = keyframes`
    from{
        opacity: 0;
        transform: translateX(80px)
    }

    to{
        opacity: 1;
        transform: translateX(0px)
    }

`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${appearFromLeft} 1s;
  @media (min-width: 1024px){
    margin-right: 100px;
  }
`;

export const AnimationContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${appearFromRigth} 1s;
`;
