import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 600px;
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

`;

export const TitulosHabilidades = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  position: relative;
  align-items: center;
  color: #1c1c1c;
  justify-content: space-around;
`;

export const Back = styled.h3`
  color: #ffff;
  margin-top: 160px;
`;
export const HabilidadesBack = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  position: relative;
  align-items: center;
  color: #1c1c1c;
  margin-top: -50%;
  margin-left: 50%;

  svg{
          color: #ffff;
  }

  h3{
        margin-right: 10px;
        color: #ffff;
  }

  div {
    display: flex;
    flex-direction: row;
    height: 40px;
    width: 210px;
    align-items: center;
  }
`;

export const HabilidadesFront = styled.div`
        display: flex;
        flex-direction: column;
        height: 600px;
        position: relative;
        align-items: center;
        color: #1c1c1c;
        margin-top: -130%;
        margin-right: 40%;

  
  h3{
        margin-right: 10px;
        color: #1c1c1c;
  }

  div {
    display: flex;
    flex-direction: row;
    height: 40px;
    width: 210px;
    align-items: flex-end
  }
`
