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
export const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  margin: 5px;
  font-size: var(--font-size);
  background: var(--highligth);
`;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--highligth);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
