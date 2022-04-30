import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: ${theme.font.family.sans};
        color: ${theme.palette.black};
    }

    a {
        color: ${theme.palette.black};
        text-decoration: none;
        cursor: pointer;
    }
`;
