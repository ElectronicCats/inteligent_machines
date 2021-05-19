import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'logo links';
`;

export const HeaderLogo = styled.img`
  grid-area: logo;
  align-self: center;
  justify-self: center;

  height: 90px;
  width: 180px;
`;

export const HeaderLinks = styled.div`
  grid-area: links;
  align-self: center;
  justify-self: center;

  a[data-link='nav-link']:nth-child(2n) {
    border-left-style: solid;
    border-left-color: var(--highligth);
    border-right-style: solid;
    border-right-color: var(--highligth);
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px 5px;
  color: var(--main-fnt-color);
  font-weight: bold;
`;
