import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: #293241;
        font-size: 10px;
        margin: 0;
    }

    .site-content {
        min-height: 89vh;
    }
`