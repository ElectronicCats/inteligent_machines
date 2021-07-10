import sytled, { createGlobalStyle } from 'styled-components';
import { device } from './queries';
export const GlobalStyle = createGlobalStyle`
:root {
    --main-bg-color: ${(props) =>
      props.theme === 'dark' ? '#1e1f20' : '#ffffff'};
    --main-fnt-color: ${(props) =>
      props.theme === 'dark' ? '#ffffff' : 'var(--color-dark-blue)'};
    --color-dark-blue: #22244f;
    --color-blue: #0071b5;
    --color-darkgray: #181818;
    --color-gray: #252627;
    --color-purple: #714d9a;
    --color-pink: #e72479;
    --color-orange: #f9b03c;
    --color-green: #00FF95;
    --highligth-darkblue: #0071b5;
    --highligth-blue: 'var(--color-green)';
    --highligth: ${(props) =>
      props.theme === 'dark'
        ? 'var(--highligth-blue)'
        : 'var(--highligth-darkblue)'};
    --shadow: 0 4px 8px var(--highligth);
    --default-font: 'Acumin';
    --headers-font: 'Gotham';
    --nav-bar-width: 100px;
    --font-size: 12px;
    --gradient: 90deg, #0071b5 0%, #00FF95 100%;
    --gradient-dark: 90deg, #0071b5 0%, #22244f 100%;
    @media screen and ${device.laptop} {
    --font-size: 18px;
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb{
    background:#888;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #555;
  }

  html {
        box-sizing: border-box;
        color: var(--black);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

      }
      *, *::before, *::after {
        box-sizing: inherit;
      }
      body,
      div,
      header,
      section,
      article,
      aside,
      nav,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-wrap: break-word;
      }
      body,
      div,
      header,
      section,
      article,
      aside,
      nav,
      ul,
      ol,
      li,
      p {
        font-family: var(--default-font), sans-serif;
        font-size: var(--font-size);
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: var(--headers-font), sans-serif;
      }
      ul {
        list-style: none;
      }
      body{
        background: var(--main-bg-color);
        color: var(--main-fnt-color);
      }
      button {
        background: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
      }
      a {
        text-decoration: none;
      }
`;

export const CenterDiv = sytled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  @media ${device.mobileL},${device.mobileM},${device.mobileS} {
    flex-direction: column;
  }
  `;
export const Panel = sytled.div`
  background-color: var(--main-bg-color);
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;
export const CardDiv = sytled.div`
  box-shadow: var(--shadow);
  border-radius: 8px;
  padding: 30px;
`;
