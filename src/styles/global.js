import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background-color: #F8F8F8;
        width: 100vw;
        max-width: 100vw;
        overflow-x: hidden;
    }

    body, input, button{
        font-family: 'Catamaran', sans-serif;
        font-size: 1rem;
    }
    
    h1, h2, h3, h4, h5, h6, li{
        font-family: 'Catamaran', sans-serif;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        font-family: 'Catamaran', sans-serif;
    }

`;