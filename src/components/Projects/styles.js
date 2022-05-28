import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  padding-top: 4rem;
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
    transition: 1s;
    cursor: pointer;
    border: 1px solid black;
    &:hover {
      width: 95vw;
      max-width: 375px;
      transition: 1s;
      box-shadow: 14px 14px 20px #111111;
    }
  }

  p {
    width: 90vw;
    max-width: 360px;
    transition: 1s;
    font-weight: 400;
    margin-top: 2rem;
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
    -webkit-transition: all 150ms linear;
    -o-transition: all 150ms linear;
    transition: all 150ms linear;
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.4;
    pointer-events: none;
    margin-bottom: 6rem;
  }

  li {
    margin: 0 auto;
    margin-top: 1rem;
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

      &:hover + p {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    a {
      text-decoration: none;

      &:hover + p {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    p {
      max-width: 375px;
      transition: 1s;
      font-weight: 400;
      margin-top: 2rem;
      opacity: 0;
      -webkit-transform: translate3d(0, -15px, 0);
      transform: translate3d(0, -15px, 0);
      -webkit-transition: all 150ms linear;
      -o-transition: all 150ms linear;
      transition: all 150ms linear;
      font-size: 1.0625rem;
      font-weight: 500;
      line-height: 1.4;
      visibility: hidden;
      pointer-events: none;
      margin-bottom: 6rem;
    }

    li {
      margin-bottom: 0px;
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
    transition: 1s;
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
  @media (min-width: 1024px) {
    margin-right: 100px;
  }
`;

export const AnimationContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${appearFromRigth} 1s;
`;
