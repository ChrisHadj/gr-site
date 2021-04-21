import { createGlobalStyle } from "styled-components";

import MarkerFont from "./PermanentMarker-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'PermanentMarker-Regular';
        src: local('PermanentMarker-Regular'), url(${MarkerFont}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }
`;
