import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        background-color: #E0F1E8;
        padding: 32px 16px;
        font-family: 'karla';
        font-weight: 400;
        font-size: 16px;
        color: #2A4144;


    }
    h1{
        font-family: 'karla';
        font-weight: 700;
        font-size: 32px;

    }

`;
