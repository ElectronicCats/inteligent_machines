import styled from 'styled-components';
import { Panel } from '../../styles/GlobalStyles';

export const CardGrids = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ cardSize }) => (cardSize ? cardSize : '300px')}, 1fr)
  );
  gap: 2rem 3rem;
  align-items: ${({ align }) => (align ? align : 'initial')};
  justify-items: ${({ justify }) => (justify ? justify : 'initial')};
`;
export const SimpleCard = styled(Panel)`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    max-width: 90%;
    height: 90%;
  }
`;

export const Card = styled(Panel)`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:  220px 50px;
  grid-template-areas: 'class-logo' 'class-title';
  align-items: center;
  justify-items: center;
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
    }
`;

export const WorkshopCard = styled(Panel)`
  display: flex;
  height: 200px;
  padding: 10px 10px 10px 80px;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 160px;
    height: 160px;

    left: -100px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }
  & img {
    width: 150px;
    height: 150px;
  }
`;
