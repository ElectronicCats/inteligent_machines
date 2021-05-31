import styled from 'styled-components';

export const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  width: 400px;
  height: 50px;
  margin: 10px;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : 'var(--highligth)'};
  border: none;
  border-radius: 25px;
  padding: 12px 30px;
  cursor: pointer;

  span {
    color: whitesmoke;
  }
  div {
    height: 2rem;
    text-align: center;
    width: 2rem;
    border-radius: 50%;
    font-size: 1.5rem;
    .external {
      background-color: whitesmoke;
      mix-blend-mode: difference;
    }
    .internal {
      background-color: whitesmoke;
    }
  }
`;
