import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    font-size: 2.4rem;
  }

  ul {
    display: flex;
    column-count: 2;
    justify-content: space-around;
    margin: 0 auto;
    width: 70%;
    margin-top: 6rem;
  }

  h3{
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 2px;

  }

  img {
    width: 100%;
    height: 300px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
	box-shadow: 0.5px 0.5px 15px black;
    width: 110%;
    transition: width 1s;
    height: 110%;
}
  }

  li {
    background-color: grey;
    width: 30vw;
    height: 300px;
    border-radius: 4px;
    max-width: 460px;
    margin-top: 4rem;
    margin-bottom: 4rem;
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
`;

export const AnimationContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${appearFromRigth} 1s;
`;
