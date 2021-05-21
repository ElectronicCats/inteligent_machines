import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const AppTitle = styled.h1`
  font-size: 1.5em;
`;

export const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const AppIntro = styled.p`
  font-size: large;
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--main-bg-color);
  height: 100vh;
  text-align: left;
  border: solid red 1px;
  position: absolute;
  top: 0;
  right: 100%;
  transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: var(--mobile)) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--main-fnt-color);
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: var(--mobile)) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: var(--main-fnt-color);
    }
  }
`;
