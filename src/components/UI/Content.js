import styled from 'styled-components';

export const Container = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: 80%;
`;
export const BackgroundContainer = styled.article`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 600px;
`;

export const ContainerTitle = styled.h2`
  margin: 10px;
  background-color: ${({ colorBg }) => (colorBg ? colorBg : 'transparent')};
  color: ${({ color }) => (color ? color : 'var(--main-fnt-color)')};
  font-size: ${({ size }) => (size ? size + 'rem' : 'initial')};
  text-transform: uppercase;
  font-weight: bold;
  text-align: ${({ align }) => (align ? align : 'center')};
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

export const ContainerP = styled.p`
  margin: 20px;
  max-width: 700px;
  font-size: ${({ size }) => (size ? size + 'rem' : 'initial')};
`;

export const ToogleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--main-bg-color);
  min-height: ${({ open }) => (open ? '200px' : '0px')};
  width: 100%;
  transition: all 0.3s ease-out;
  opacity: ${({ open }) => (open ? '1' : '0')};
`;
