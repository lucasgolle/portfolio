import styled from "styled-components";

export const Container = styled.div`
        width: 600px;
        height: 600px;
        border-radius: 50%;
        margin: 5em auto;
        border: 1px solid #000;
        background: radial-gradient(circle at 50% 25%, black 5%, transparent 5%), radial-gradient(closest-side circle at 50% 25%, white 100%, transparent 100%),
        radial-gradient(circle at 50% 75%, white 5%, transparent 5%),
        radial-gradient(closest-side circle at 50% 75%, black 100%, transparent 100%),
        linear-gradient(to right, white 50%, black 50%);
        
        div{
          display: flex;
          flex-direction: column;
          height: 600px;
          position: relative;
          align-items: center;
          color: #1C1C1C;
          justify-content: space-around;
        }

        
`

export const Back = styled.h3`

        color: #ffff;
        margin-top: 160px;
`

