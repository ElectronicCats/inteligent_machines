import styled from 'styled-components';

export const Container = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: 80%;
`;
export const ContainerTitle = styled.h2`
  text-transform: none;
  background-color: ${({ color }) => (color ? color : 'var(--highligth)')};
  color: var(--main-fnt-color);
  border-radius: 5px;
  padding-left: 35px;
  padding-right: 35px;
  padding-bottom: 6px;
  padding-top: 5px;
  display: table;
  margin-bottom: 25px;
  font-size: 2rem;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 8%);
`;

export const ContalinerList = styled.ul`
  width: 100%;
  list-style-position: outside;
  & > li {
    padding: 0 5px;
    margin: 10px 0;
    &::marker {
      content: '•';
      font-size: 1.5em;
      color: ${({ color }) => (color ? color : 'var(--highligth)')};
    }
  }
`;
