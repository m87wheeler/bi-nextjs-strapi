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

    :root {
        --color-primary: ${theme.palette.primary._};
        --color-primary-contrast: ${theme.palette.primary.contrast};

        --color-secondary: ${theme.palette.primary._};
        --color-secondary-contrast: ${theme.palette.primary.contrast};

        --color-white: ${theme.palette.white};
        --color-white-contrast: ${theme.palette.black};

        --color-black: ${theme.palette.black};
        --color-black-contrast: ${theme.palette.white};
        
        --color-none: transparent;

        --section-padding-x: 0;
        --section-padding-top: 6rem;
        --section-padding-bottom: 5rem;
    }
`;
