import styled from 'styled-components';

export const MainLayout = styled.main`
  font-family: var(--default-font), sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: var(--main-bg-color);
  color: var(--main-fnt-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: var(--nav-bar-width) 1fr 100px 157px;
  grid-template-areas:
    'nav'
    'main'
    'footnav'
    'footer';
`;

export const WrapperContent = styled.section`
  grid-area: main;
  padding: 5px;
`;
export const WrapperNav = styled.header`
  grid-area: nav;
`;
export const WrapperFoot = styled.footer`
  grid-area: footer;
`;
export const WrapperFootNav = styled.section`
  grid-area: footnav;
`;
