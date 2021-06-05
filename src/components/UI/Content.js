import styled from 'styled-components';

export const Container = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: 80%;
`;
export const ContainerTitle = styled.h2`
  margin: 10px;
  background-color: ${({ colorBg }) => (colorBg ? colorBg : 'transparent')};
  color: ${({ color }) => (color ? color : 'var(--main-fnt-color)')};
  font-size: ${({ size }) => (size ? size + 'rem' : 'initial')};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

export const ContalinerList = styled.ul`
  width: 100%;
  list-style-position: outside;
  & > li {
    padding: 0 5px;
    margin: 20px 0;
    &::marker {
      content: '•';
      font-size: 1.5em;
      color: ${({ color }) => (color ? color : 'var(--highligth)')};
    }
  }
`;

export const ContainerOrderList = styled.ol`
  width: 100%;
  list-style-position: outside;
  & > li {
    padding: 0 5px;
    margin: 20px 0;
    &::marker {
      font-size: 1.5em;
      color: ${({ color }) => (color ? color : 'var(--main-fnt-color)')};
    }
  }
`;
