import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #FAFAFB;
    background: url('/assets/images/background-pokedex.svg') no-repeat 70% top #FAFAFB;
    -webkit-font-smoothing: antialiased;
    background-size: 35%;
  }

  body, input, button{
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  #__next {
    max-width: 1140px;
    margin: 0 auto;
    padding: 40px 15px;
  }

  button {
    cursor: pointer;
  }
`;
