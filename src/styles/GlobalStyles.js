import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        /* outline: 1px solid red; */
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

    body{
        margin: 0;
        font-family: "Roboto", serif;
        background-color: #F0F9FF;
    }

`;