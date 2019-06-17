import { createGlobalStyle } from "styled-components";

import "@fortawesome/fontawesome-free/css/all.min.css";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
  }

  html{
    font-size:16px;
  }

  body{
    background:#ffffff;
    color:black;
    font-size:1em;
  }

  & * a{
    text-decoration:none;
  }
`;

export default GlobalStyle;
