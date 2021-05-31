import { createGlobalStyle } from 'styled-components';

import Gotham_Book from './gotham_ssv/Gotham-Book.otf';
import Gotham_Light from './gotham_ssv/Gotham-Light.otf';
import Gotham_Medium from './gotham_ssv/Gotham-Medium.otf';
import Gotham_Thin from './gotham_ssv/Gotham-Thin.otf';
import Acumin_Regualr from './acoumin/Acumin-RPro.otf';
import Acumin_Bold from './acoumin/Acumin-BdPro.otf';

export const FontStyles = createGlobalStyle`
@font-face {
    font-family: Acumin;
    src: url(${Acumin_Bold});
    font-weight: bold;
}
@font-face {
    font-family: Acumin;
    src: url(${Acumin_Regualr});
    font-weight: normal;
}
@font-face {
    font-family: Acumin;
    src: url(${Acumin_Regualr});
}
@font-face {
    font-family: Gotham;
    src: url(${Gotham_Light});
    font-weight: 200;
}
@font-face {
    font-family: Gotham;
    src: url(${Gotham_Thin});
    font-weight: 100;
}
@font-face {
    font-family: Gotham;
    src: url(${Gotham_Medium});
    font-weight: 300;
}
@font-face {
    font-family: Gotham;
    src: url(${Gotham_Book});
    font-weight: normal;
}
@font-face {
    font-family: Gotham;
    src: url(${Gotham_Book});
}
`;
