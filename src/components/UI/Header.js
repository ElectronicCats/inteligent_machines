import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../styles/queries';

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

  height: 100px;
  width: 100px;
`;

export const HeaderLinks = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }
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

export const StyledLink = styled(NavLink)`
  &.${({ activeClassName }) => activeClassName} {
    background: red;
  }
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
  @media ${device.mobileS} {
    display: auto;
  }
  @media ${device.laptop} {
    display: none;
  }
  position: absolute;
  top: 5%;
  right: 1rem;
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

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--main-bg-color);
  height: 200px;
  width: 100vw;
  text-align: left;
  border: solid red 1px;
  position: absolute;
  bottom: 100%;
  right: 0;
  transform: ${({ open }) => (open ? 'translateY(100%)' : 'translateY(0)')};
  transition: transform 0.3s ease-in-out;
`;
