import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../styles/queries';

export const HeaderContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100px;
  grid-template-areas: 'logo links';
`;

export const HeaderLogo = styled.img`
  grid-area: logo;
  align-self: center;
  justify-self: center;

  height: 100px;
  width: 120px;
  margin: 0 10px;
`;

export const HeaderLinks = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  grid-area: links;
  align-self: center;
  justify-self: center;

  a[data-link='nav-link']::after {
    content: ' ';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 10px;
    font-size: 6rem;
    background-color: var(--highligth);
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &.${({ activeClassName }) => activeClassName} {
    background: linear-gradient(var(--gradient));
    color: var(--main-bg-color);
  }
  height: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
  width: 2rem;
  height: 2rem;
  margin: 20px;
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
  transform: ${({ open }) => (open ? 'translateY(100vh)' : 'translateY(0)')};
  transition: transform 0.3s ease-in-out;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: -100vh;
  left: 0;
`;
