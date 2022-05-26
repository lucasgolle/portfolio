import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  color: #e8e4b8;
  letter-spacing: 2px;
  background-color: #1c1c1c;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: bold;
    color: #ffff;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  li {
    &:hover {
      color: #ffff;
      border-bottom: 1px solid #e8e4b8;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    font-size: 1rem;
    font-weight: 500;
    color: #e8e4b8;
    letter-spacing: 2px;
    background-color: #1c1c1c;
    padding: 4rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-left: 10px;
      font-weight: bold;
      color: #ffff;
    }

    img {
      size: 50px;
      width: 40px;
      margin-right: 10px;
      cursor: pointer;
    }

    div {
      display: flex;
    }

    li {
      margin-right: 3rem;
      cursor: pointer;

      &:hover {
        color: #ffff;
        border-bottom: 1px solid #e8e4b8;
      }
    }
  }
`;
