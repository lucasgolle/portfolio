import styled, { keyframes } from "styled-components";

const animateYing = keyframes`
    0%{
      transform: translateY(0);
    }

    100%{
      transform: translateY(20px);
    }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90vw;
  justify-content: center;
  margin-bottom: 8rem;
  padding-top: 8rem;

  h1 {
    text-align: center;
    font-size: 1.4rem;
    margin-top: -3.5rem;
    margin-bottom: 4rem;
  }

  p {
    font-size: 1rem;
    text-align: left;
    color: var(--gray-800);
    letter-spacing: 0.1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    display: block;
  }

  h2 {
    text-align: start;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
      margin-left: -25px;
      margin-top: 20px;
    }
  }

  @media (min-width: 1024px) {
    width: 60vw;
    h1 {
      font-size: 2.4rem;
      margin-top: 1rem;
    }

    img {
      width: 220px;
      height: 220px;
      margin-right: 2rem;
    }

    h2 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 20px;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const PictureProfiles = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  display: block;
  animation: ${animateYing} 1.8s infinite alternate;

  @media (min-width: 1024px) {
    width: 220px;
    height: 220px;
    margin-right: 2rem;
  }
`;
