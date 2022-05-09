import styled, { keyframes } from "styled-components";

const animateYang = keyframes`
    from{
        transform:rotate(0deg);
    }

    to{
        transform:rotate(360deg);
    }

`;
export const Container = styled.div`

    width: 300px;
    height: 300px;
    border-radius: 50%;
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
    animation: ${animateYang} 1s;


  @media (min-width: 768px) {
    width: 600px;
    height: 600px;
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
    position: relative;
    align-items: center;
    color: #ffff;
    margin-top: -50%;
    margin-left: 50%;
  
  
  
  svg {
    color: #ffff;
  }

  
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 600px;
    position: relative;
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
  h3 {
    margin-right: 10px;
    color: #1c1c1c;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 600px;
    position: relative;
    align-items: center;
    color: #1c1c1c;
    margin-top: -130%;
    margin-right: 40%;
    div {
      display: flex;
      flex-direction: row;
      height: 40px;
      width: 210px;
      align-items: flex-end;
    }
  }
`;
