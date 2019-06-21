import { createGlobalStyle } from "styled-components";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    outline:0;
  }

  html{
    font-size:16px;
  }

  body{
    background:#ffffff;
    color:black;
    font-size:1em;
    font-family:'Roboto', sans-serif;
  }

  & * a{
    text-decoration:none;
  }

  & * input button{
    font-family:'Roboto', sans-serif;
  }

  & * button{
    cursor:pointer;
  }

  & * i {
    font-size: 1.75em;
    
  }

`;

export default GlobalStyle;
