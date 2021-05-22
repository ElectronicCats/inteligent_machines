import sytled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --main-bg-color: ${(props) =>
      props.theme === 'dark' ? '#1e1f20' : '#ffffff'};
    --main-fnt-color: ${(props) =>
      props.theme === 'dark' ? '#ffffff' : '#1e1f20'};
    --color-darkgray: #181818;
    --color-gray: #252627;
    --highligth-green: #67e813;
    --highligth-darkgreen: #1dbf5e;
    --highligth: ${(props) =>
      props.theme === 'dark'
        ? 'var(--highligth-green)'
        : 'var(--highligth-darkgreen)'};
    --shadow: 0 4px 8px var(--highligth);
    --default-font: 'Josefin Sans';
    --nav-bar-width: 110px;
    --font-size: '15px';
  }
  html {
        box-sizing: border-box;
        font-family: var(--default-font), sans-serif;
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
      .icon-wolftrax {
        & > path {
          fill: var(--main-fnt-color);
        }
        &:hover > path {
          fill: var(--highligth);
        }
      }
`;

export const CenterDiv = sytled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  align-items: center;
  justify-content: center;
`;

export const CardDiv = sytled.div`
  box-shadow: var(--shadow);
  border-radius: 8px;
  padding: 30px;
`;
