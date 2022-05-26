import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90vw;
  justify-content: center;
  margin-bottom: 8rem;

  h1 {
    text-align: center;
    font-size: 1.4rem;
    margin-top: 1rem;
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
    margin-bottom: 1rem;
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

  @media (min-width: 1024px) {

    width: 60vw;
    h1 {
      font-size: 2.4rem;
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
