import { createGlobalStyle} from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: ${({theme}) => theme.bgColor};
    color: ${({theme})=> theme.textColor };
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
  }

`