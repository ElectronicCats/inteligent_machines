import styled from 'styled-components';

export const CardGrids = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ cardSize }) => (cardSize ? cardSize : '300px')}, 1fr)
  );
  gap: 2rem 3rem;
  align-items: ${({ align }) => (align ? align : 'initial')};
`;
export const Card = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:  220px 50px;
  grid-template-areas: 'class-logo' 'class-title';
  align-items: center;
  justify-items: center;
  background-color: var(--main-bg-color);
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  text-align: center;
  white-space: pre-wrap;

  &:hover img {
      transform: scale(1.15);
    }
  }
  & img {
    grid-area: class-logo;
    max-width: 200px;
    height: 150px;
    transition: all 200ms ease-in-out;
`;
