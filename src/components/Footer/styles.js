import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  color: #e8e4b8;
  letter-spacing: 2px;
  background-color: #1c1c1c;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-bottom: 0.4rem;
  }

  h2 {
    font-size: 0.6rem;
  }

  img {
    width: 35px;
    cursor: pointer;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7rem;
    &:hover {
      color: #ffff;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    padding: 4rem;

    h1 {
      margin-bottom: 1.4rem;
    }

    h2 {
      font-size: 1rem;
    }

    img {
      width: 45px;
      cursor: pointer;
      transition: 1s;

      &:hover {
        width: 50px;
        transition: 1s;
      }
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      &:hover {
        color: #ffff;
        cursor: pointer;
      }
    }
  }
`;
