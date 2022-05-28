import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  color: #e8e4b8;
  letter-spacing: 2px;
  background-color: #1c1c1c;
  padding: 1rem;
  width: 100vw;
  max-width: 100vw;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 20;
  top: 0%;

  h1 {
    margin-left: 10px;
    font-size: 1rem;
    font-weight: bold;
    color: #ffff;
    display: block;
  }

  span {
    display: flex;
    width: 20px;
    position: absolute;
    right: 5%;
    color: white;
    cursor: pointer;
    @media (min-width: 768px) {
      display: none;
    }
  }

  div {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    background-color: #1c1c1c;
    justify-content: space-between;

    img {
      width: 40px;
      cursor: pointer;
      transition: 0.5s;
      margin-right: 1rem;

      &:hover {
        transition: 0.5s;
        box-shadow: 0.5px 0.5px 15px white;
        border-radius: 100%;
      }
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

export const MenuBar = styled.img`
  display: flex;
  width: 20px;
  position: absolute;
  right: 5%;
  color: white;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 180px;
  margin-top: -17px;
  text-align: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  font-size: 1rem;
  color: white;
  background-color: #1c1c1c;
  animation: 1s animationCard;
  overflow: hidden;

  @keyframes animationElement {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes animationCard {
    0% {
      height: 0%;
      opacity: 0.4;
    }
    100% {
      height: 180px;
      opacity: 1;
    }
  }

  li {
    padding: 0.8rem;
    animation: 1s animationElement;
  }

  div {
    display: flex;
    justify-content: center;
    padding: 0.8rem;
    animation: 1s animationElement;
  }

  img {
    width: 35px;
    margin-right: 10px;
    animation: 1s animationElement;
    margin-left: 10px;

    &:hover {
        transition: 0.5s;
        box-shadow: 0.5px 0.5px 15px white;
        border-radius: 100%;
      }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
